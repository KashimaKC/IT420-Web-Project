const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
//const { restart } = require('nodemon');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.listen('3001', () => {
    console.log("Running on port 3001.");
});

const db = mysql.createPool ({
    host: 'demalgeri.cikeys.com',
    user: 'demalger_spw_user',
    password: 'z1p1Dd00d4!',
    database: 'demalger_spw'
});

app.get('/', function(req, res){
    res.send("backend");
});

app.post('/', function (req, res) {
    db.getConnection(function (err, db) {
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const address = req.body.address;
        const street = req.body.street;
        const apartment = req.body.apartment;
        const city = req.body.city;
        const zipcode = req.body.zipcode;
        const phone = req.body.phone;
        const dateOfArrival = req.body.dateOfArrival;
        const dateReceived = req.body.dateReceived;
        const countryOfOrigin = req.body.countryOfOrigin;
        const immigrationStatus = req.body.immigrationStatus;
        const speaksEnglish = req.body.speaksEnglish;
        const notes = req.body.notes;

        const sqlInsertParent = "INSERT INTO Parent (parent_id, lastName, firstName, address, street, apartment, city, zipcode, " 
                            + "phone, dateOfArrival, dateReceived, countryOfOrigin, immigrationStatus, speaksEnglish, notes) VALUES "
                            + "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        //insert the parent into the database
        db.query(sqlInsertParent, ["", lastName, firstName, address, street, apartment, 
                                    city, zipcode, phone, dateOfArrival, dateReceived, 
                                    countryOfOrigin, immigrationStatus, speaksEnglish, notes], (err, result) => {
                                        console.log(err);
                                    });
    });
});