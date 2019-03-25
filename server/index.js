const path = require('path');
require('dotenv').config({path : path.join(__dirname, '.env')});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
let dbPromise;
const controller = require('./controller');

//Middleware
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


app.use(cors());
app.use(bodyParser.json());
app.use(useDb());


//Endpoints
app.get('/api/properties', controller.getAll );
app.post('/api/property', controller.create );
app.delete('/api/property/:id', controller.delete);


app.listen(4000, () => {
    console.log('Server running on port 4000.')
})