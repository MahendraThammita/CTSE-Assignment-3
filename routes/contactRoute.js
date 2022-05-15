const express = require("express");
const app = express();
const Contact = require("../modals/Contact");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//Add Card
router.post("/add-contact", async (req, res) => {

    try {
            let Name = req.body.Name;
            let Address_line_1 = req.body.Address_line_1;
            let Address_line_2 = req.body.Address_line_2;
            let zip_code = req.body.zip_code;
            let city = req.body.city;
            let state = req.body.state;
            let phone = req.body.phone;
            let user = req.body.user;
    
            const contact = await new Contact({
                Name: Name,
                Address_line_1: Address_line_1,
                zip_code: zip_code,
                Address_line_2: Address_line_2,
                city: city,
                state: state,
                phone: phone,
                user: user,
            });

            try {
                contact.save().then(data => {
                    res.json({ status: 201, message: "contact added successfully" , contact: contact});
                });   
            } catch (error) {
                console.log(error)
            }
    } catch (error) {
        console.log(error)
    }
  });

  //Get contact By Id
  router.route("/:id").get(async (req, res) => {
    const contactId = req.params.id;
    await Contact.findOne({_id: contactId}).then((contact) => {
        res.json({contact});
    }).catch((err) => {
        res.json({err});
    })
  })

  //Get Contacts By user Id
  router.route("/getsContactsByUser/:userId").get(async (req, res) => {
    const userId = req.params.userId;
    await Contact.find({user: userId}).then((contacts) => {
        res.json({contacts});
    }).catch((err) => {
        res.json({err});
    })
  })
  module.exports = router;
  