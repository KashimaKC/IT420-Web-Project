const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { restart } = require('nodemon');

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
        const children = req.body.children; //an array of information about the children

        const sqlInsertParent = "INSERT INTO Parent (parent_id, lastName, firstName, address, street, apartment, city, zipcode, " 
                            + "phone, dateOfArrival, dateReceived, countryOfOrigin, immigrationStatus, speaksEnglish, notes) VALUES "
                            + "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        const sqlInsertChild = "INSERT INTO Children (child_id, parent_id, childFirstName, gender, age, shoe, childNotes) VALUES (?, ?, ?, ?, ?, ?, ?)";

        //insert the parent into the database
        db.query(sqlInsertParent, ["", lastName, firstName, address, street, apartment, 
                                    city, zipcode, phone, dateOfArrival, dateReceived, 
                                    countryOfOrigin, immigrationStatus, speaksEnglish, notes], (err, result) => {
                                        console.log(err);
        });
        
        //Get the max parent_id from the Parent table (this will go into the Children table)
        db.query('SELECT max(parent_id) FROM Parent', function (error, results, fields) {
            /*NOTE: The Parent table will never be null at this query because even if it's empty at first, the insert
            into the parent table comes before the insert into the child table.*/
            if (error) {
                throw error;
            }
            //Convert the result into a number: 
            var s = JSON.stringify(results);
            var json = JSON.parse(s);
            var obj = json[0];
            var objVal = Object.values(obj);
            var maxParentID = Number(objVal);

            //Insert the children into the database
            var jsonChildren = JSON.parse(children);
            for(let i = 0; i < 6; i++) {
                let objChildren = jsonChildren[i];
                let objValChildren = Object.values(objChildren);
                
                //check if the child is null- if so, skip inserting the child into the databse
                let isNull = false;
                if(objValChildren[0] == null && objValChildren[1] == null && objValChildren[2] == null && objValChildren[3] == null && objValChildren[4] ==null)
                    isNull = true;

                if(isNull == false) {
                    db.query(sqlInsertChild, ["", maxParentID, objValChildren[0], objValChildren[1], objValChildren[2], 
                                                    objValChildren[3], objValChildren[4]], (err, result) => {
                                                    console.log(err);
                    });
                }

            }
        });
    });
});