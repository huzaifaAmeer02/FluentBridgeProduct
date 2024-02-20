const express = require('express');
const CustomerController = require('../controller/customerController')

const router = express.Router();
router.post('/save-customer',CustomerController.saveCustomer);
router.put('/update-customer',CustomerController.updateCustomer);
router.delete('/delete-customer',CustomerController.deleteCustomer);
router.get('/get-customer',CustomerController.findCustomer);
router.get('/get-all-customer',CustomerController.findallCustomer);

module.exports = router;