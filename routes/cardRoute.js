const express = require("express");
const app = express();
const Card = require("../modals/Card");
const router = require("express").Router();


//Add Card
router.post("/add-card", async (req, res) => {

    try {
        const isExisting = await Card.findOne({ cardNumber: req.body.cardNumber });
  
        if (isExisting) {
            res.json({ status: 401, message: "card already exist", card: req.body.cardNumber });
            console.log(error)
        } else {

            let cardNumber = req.body.cardNumber;
            let expiryDate = req.body.expiryDate;
            let cardHolderName = req.body.cardHolderName;
            let cvvCode = req.body.cvvCode;
            let user = req.body.user;
    
            const card = await new Card({
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardHolderName: cardHolderName,
                cvvCode: cvvCode,
                user: user,
            });

            try {
                card.save().then(data => {
                    res.json({ status: 201, message: "card added successfully" , card: data.cardNumber});
                });   
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }
  });

  //Get Card By Id
  router.route("/:id").get(async (req, res) => {
    const cardId = req.params.id;
    await Card.findOne({_id: cardId}).then((card) => {
        res.json({card});
    }).catch((err) => {
        res.json({err});
    })
  })

  //Get Card By user Id
  router.route("/getsCardsByUser/:userId").get(async (req, res) => {
    const userId = req.params.userId;
    await Card.find({user: userId}).then((cards) => {
        res.json({cards});
    }).catch((err) => {
        res.json({err});
    })
  })
  module.exports = router;
  