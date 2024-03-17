const Customer = require('../model/customerSchema');
const {response} = require("express");

// Import the required modules

/*
* POST -> save
* This function saves a new customer to the database.
*/
const saveCustomer = (req,resp) =>{
    console.log(resp.body)
    const tempCustomer = new Customer({
        nic:req.body.nic,
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary,
    });
    tempCustomer.save().then(result=>{
        resp.status(201).json({status:true,message:'customer saved'});
    }).catch(error=>{
        resp.status(500).json(error);
    });
};

/*
* PUT -> Update
* This function updates an existing customer in the database.
*/
const updateCustomer = (req,resp) =>{
    Customer.updateOne({nic:req.headers.nic},{
        $set:{
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary
        }
    }).then(result=>{
        if(result.modifiedCount>0){
            resp.status(201).json({status:true,message:'customer updated'});
        }else{
            resp.status(200).json({status:false,message:'try again'})
        }
    }).catch(error=>{
        resp.status(500).json(error);
    })
};

/*
* DELETE -> remove
* This function deletes a customer from the database.
*/
const deleteCustomer = (req,resp) =>{
    Customer.deleteOne({nic:req.headers.nic}).then(result=>{
        if(result.deletedCount>0){
            resp.status(204).json({status:true,message:'customer deleted'});
        }else{
            resp.status(400).json({status:false,message:'try again'})
        }
    }).catch(error=>{
        resp.status(500).json(error);
    })
};

/*
* GET -> fetch
* This function finds a customer in the database based on the NIC (National Identity Card) number.
*/
const findCustomer = (req,resp) =>{
    Customer.findOne({nic:req.headers.nic}).then(result=>{
        if(result==null){
            resp.status(404).json({status:false,message:'customer not found'});
        }else{
            resp.status(200).json({status:true,data:result})
        }
    }).catch(error=>{
        resp.status(500).json(error);
    })
};

/*
* GET -> fetch all
* This function fetches all customers from the database.
*/
const findallCustomer = (req,resp) =>{
    Customer.find().then(result=>{
        resp.status(200).json({status:true,data:result});
    }).catch(error=>{
        resp.status(500).json(error);
    })
};

// Export the functions
module.exports={
    saveCustomer,
    updateCustomer,
    deleteCustomer,
    findCustomer,
    findallCustomer
}
