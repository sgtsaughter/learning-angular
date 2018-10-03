import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Characters from './models/characters';

const app = express();
const router = express.Router();

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

router.route('/saveCharacters').post((req, res) => {
    let character = new Characters(req.body);
    character.save()
        .then(character => {
            res.status(200).json({'chracter': 'Added sucessfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to createnew record');
        });
});

router.route('updateCharacter/:id').post((req, res) => {
    Characters.findById(req.params.id, (err, character) => {
        if (!character) {
            return nextTick( new Error('Could not load document'));
        }
        else {
            character.name = req.body.name;
            character.description = req.body.description;
            character.isCool = req.body.isCool;

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
app.listen(4000, () => console.log('Express server running on port 4000'));
