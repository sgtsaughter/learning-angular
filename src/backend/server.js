import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import multer from 'multer';

import Characters from './models/characters';

const app = express();
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
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
    console.log(req.file);    
    let character = new Characters({
        name: req.body.name,
        description: req.body.description,
        isCool: req.body.isCool,
        characterImage: req.file.path
    });
    character.save()
        .then(character => {
            res.status(200).json({'chracter': 'Added sucessfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to add new character');
        });
});

router.route('/updateCharacter/:id').post(upload.single('characterImage'), (req, res) => {
    console.log(req.file);  
    Characters.findById(req.params.id, (err, character) => {
        if (!character) {
            return nextTick( new Error('Could not load document'));
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
    Characters.findByIdAndRemove({_id: req.params.id}, (err, character) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

app.use('/', router);
//make uploads folder public
app.use('/uploads', express.static('uploads'))
app.listen(4000, () => console.log('Express server running on port 4000'));
