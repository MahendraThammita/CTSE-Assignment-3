const express = require("express");
const app = express();
const Payment = require("../modals/Payment");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var moment = require('moment'); // require
moment().format(); 


//Make Payment
router.post("/makePayment", async (req, res) => {

            let paymentDateTime = moment();
            let totalAmmount = req.body.totalAmmount;
            let deliveryCost = req.body.deliveryCost;
            let discount = req.body.discount;
            let PaymentCard = req.body.PaymentCard;
            let user = req.body.user;
    
            const payment = await new Payment({
                paymentDateTime: paymentDateTime,
                totalAmmount: totalAmmount,
                deliveryCost: deliveryCost,
                discount: discount,
                PaymentCard: PaymentCard,
                user: user,
            });

            try {
                payment.save().then(data => {
                    res.json({ status: 201, message: "payment made successfully" , payment: payment});
                });   
            } catch (error) {
                console.log(error)
            }
  });

  //Get payment By Id
  router.route("/:id").get(async (req, res) => {
    const paymentId = req.params.id;
    await Payment.findOne({_id: paymentId}).then((payment) => {
        res.json({payment});
    }).catch((err) => {
        res.json({err});
    })
  })

  module.exports = router;
  