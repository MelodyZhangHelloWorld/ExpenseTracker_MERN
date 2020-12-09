
//@description  Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = (req, res, next)=> {
    res.send('Get transactions -- from transactionController!!');
}

//@description  Add a transaction
//@route POST /api/v1/transactions
//@access Public
exports.addTransaction = (req, res, next)=> {
    res.send('POST -- Add transactions -- from transactionController!!');
}


//@description  Delete one transactions
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.deleteTransaction = (req, res, next)=> {
    res.send('DELETE one transaction -- from transactionController!!');
}