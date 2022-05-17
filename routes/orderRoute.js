const express = require("express");
const app = express();
const Order = require("../modals/Order");
const router = require("express").Router();


//Create Order
router.post("/create-order", async (req, res) => {
    
    let status = req.body.status;
    let payment = req.body.payment;
    let address = req.body.address;
    let items = req.body.items;
    let user = req.body.user;

    const order = await new Order({
        status: status,
        payment: payment,
        address: address,
        items: items,
        user: user,
    });

    try {
        order.save().then(order => {
            res.json({ status: 201, message: "order created successfully" , order: order});
        });   
    } catch (error) {
        console.log(error)
    }
  });

  //Get order By Id
  router.route("/:id").get(async (req, res) => {
    const orderId = req.params.id;
    await Order.findOne({_id: orderId}).then((order) => {
        res.json({order});
    }).catch((err) => {
        res.json({err});
    })
  })

  //Get orders By user Id
  router.route("/getOrdersByUser/:userId").get(async (req, res) => {
    const userId = req.params.userId;
    await Order.find({user: userId}).then((orders) => {
        res.json({orders});
    }).catch((err) => {
        res.json({err});
    })
  })

  router.put("/updateOrderStatus/:id", async (req,res) => {

    try {
        const updatedOrder = {
            status:req.body.status,
        };
    
        const orderId = req.params.id;
    
        await Order.findByIdAndUpdate(orderId,updatedOrder).then((order) => {
            res.json({status:200, order:order})
        }).catch((err) => {
            res.json({status:400, message:err})
        })
    } catch (error) {
        console.log(error)
    }

})
  
module.exports = router;
  