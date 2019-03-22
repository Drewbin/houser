const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');

require('dotenv').config({path : path.join(__dirname, '.env')});

const controller = require('./controller');
const app = express();

let dbPromise;

app.use(cors());
app.use(bodyParser.json());

function useDb() {
    return function useDbMiddleware(req, res, next) {
        if (!dbPromise) {
            dbPromise = getDb();
        }

        dbPromise
            .then(dbInstance => {
                req.db = dbInstance;

                next();
            })
            .catch(e => {
                console.error(e);
                res.status(500).send({ message: 'Something really bad happened' });
                dbPromise = null;
            });
    };
}

function getDb() {
    return massive(process.env.DB_CONNECTION_STRING, { scripts: path.join(__dirname, 'db')});
}



app.listen(4000, () => {
    console.log('Server running on port 4000.')
})