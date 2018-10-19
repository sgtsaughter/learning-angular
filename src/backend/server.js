import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import multer from 'multer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Characters from './models/characters';
import User from './models/user';


const app = express();
const router = express.Router();

//chat variables
const port = 4000;
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Image upload infomration 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

//Add some type of filter for the files
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         //store the file
//         cb(null, true);
//     }
//     else {
//         //reject the file. Replace null with a callback function to respond with an error. This will simply not write the image to the file system. 
//         cb(null, false);
//     }
// };

const upload = multer({
    storage: storage,
    fileSize: 1024 * 1024 * 25,
    //fileFilter: fileFilter
})

app.use(cors());
app.use(bodyParser.json());

//URL to mongo db
mongoose.connect('mongodb://localhost:27017/characters');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

//Endpoints
router.route('/getCharacters').get((req, res) => {
    Characters.find((err, character) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(character);
        }
    })
});

router.route('/getCharacters/:id').get((req, res) => {
    Characters.findById(req.params.id, (err, character) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(character);
        }
    });
});

router.route('/saveCharacters').post(upload.single('characterImage'), (req, res) => {
    //console.log(req.file);    
    console.log(req.body);
    let character = new Characters({
        name: req.body.name,
        description: req.body.description,
        isCool: req.body.isCool,
        characterImage: req.file.path
    });
    character.save()
        .then(character => {
            res.status(200).json({ 'chracter': 'Added sucessfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to add new character');
        });
});

router.route('/updateCharacter/:id').post(upload.single('characterImage'), (req, res) => {
    console.log(req.file);
    Characters.findById(req.params.id, (err, character) => {
        if (!character) {
            return nextTick(new Error('Could not load document'));
        }
        else {
            character.name = req.body.name;
            character.description = req.body.description;
            character.isCool = req.body.isCool;
            character.characterImage = req.file.path;

            character.save().then(character => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/deleteCharacter/:id').get((req, res) => {
    Characters.findByIdAndRemove({ _id: req.params.id }, (err, character) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

//User signup and login
router.route('/signup').post((req, res) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Email already Exists"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            email: req.body.email,
                            password: hash,
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(400).send('Failed to sign up a new user');
                            });
                    }
                })
            }
        })
});

router.route('/deleteUser/:id').get((req, res) => {
    User.findByIdAndRemove({ _id: req.params.id }, (err, user) => {
        if (err)
            res.json(err);
        else
            res.json('User Deleted Successfully');
    })
})

router.route('/login').post((req, res, next) => {
    console.log(req.body);
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth Failed 1"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth Failed 2"
                    });
                }
                //Note: the "secret" here should be replaced with a private key on a server if this application was ever put into production
                if (result) {
                    const token = jwt.sign({
                        email: user[0],
                        userId: user[0]._id
                    },
                        "secret",
                        {
                            expiresIn: '1h'
                        },
                    );
                    return res.status(200).json({
                        message: 'Login Successful',
                        token: token
                    });
                }
                res.status(401).json({
                    message: 'Auth Failed 3'
                })
            })
        })
})

//Chat api call 
io.on('connection', (socket) => {
    console.log('new connection made');
  
     // Test Messages
    socket.on('send-message', (data) => {
      console.log(data.text);
      io.emit('message-received', data);
    });
  
  });

app.use('/', router);
//make uploads folder public
app.use('/uploads', express.static('uploads'))
//app.listen(4000, () => console.log('Express server running on port 4000'));

server.listen(port, () => {
    console.log("Listening on port " + port);
  });
  