const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');


const db = mysql.createPool ({
    host: 'demalgeri.cikeys.com',
    user: 'demalger_spw_user',
    password: 'z1p1Dd00d4!',
    database: 'demalger_spw'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//     //db.query("INSERT INTO Parent (firstName, lastName) VALUES ('Sally', 'Hanson')");
//     //How to delete a row from the database: DELETE from Parent WHERE parent_id=0;
//     res.send("backend");
//     //console.log("inserted");
// })

app.post("/api/insert", (req, res) =>{

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

    const childField = req.body.childField; //and array of information about the children

    const sqlInsertParent = "INSERT INTO Parent (lastName, firstName, address, street, apartment, city, zipcode, " 
                        + "phone, dateOfArrival, dateReceived, countryOfOrigin, immigrationStatus, speaksEnglish, notes) VALUES "
                        + "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

    const sqlInsertChild = "INSERT INTO Children (parent_id, childFirstName, gender, age, shoe, childNotes) VALUES (?, ?, ?, ?, ?, ?)"

    //get maximum parent_id from the Parent table and use it as the foreign key in the Children table
    maxParentID = db.query("SELECT max(parent_id) FROM Parent");
    // if(maxParentID == NULL) //only happens if this is the first entry into the database
    //     maxParentID = 1;
    // else
    //     maxParentID += 1;
    maxParentID += 1;
        
    console.log(maxParentID);

    //insert the parent into the database
    db.query(sqlInsertParent, [maxParentID, lastName, firstName, address, street, apartment, 
                        city, zipcode, phone, dateOfArrival, dateReceived, 
                        countryOfOrigin, immigrationStatus, speaksEnglish, notes], (err, result) => {
                            console.log(err);
                        });

    //insert the child into the database
    //https://stackoverflow.com/questions/51193704/react-input-setstate-for-array-of-objects
    for(let i = 0; i < childField.length; i++) {
        db.query(sqlInsertChild, [maxParentID, childField[i].childFirstName, childField[i].gender, childField[i].age, 
                                    childField[i].shoe, childField[i].childNotes], (err, result) => {
                                        console.log(err);
                                    });
    }
});

app.listen(3001, () =>  {
    console.log("Running on port 3001."); // test msg
});