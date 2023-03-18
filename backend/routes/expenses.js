const {
	getExpenses,
	addExpense,
	deleteExpense,
} = require("../controllers/expense");

const router = require("express").Router();

router.get("/get-expenses", getExpenses);
router.post("/add-expense", addExpense);
router.delete("/delete-income/:id", deleteExpense);

module.exports = router;
