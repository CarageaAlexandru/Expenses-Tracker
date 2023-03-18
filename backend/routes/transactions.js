const {
	addIncome,
	getIncomes,
	deleteIncome,
} = require("../controllers/income");

const router = require("express").Router();

router.get("/get-incomes", getIncomes);
router.post("/add-income", addIncome);
router.delete("/delete-income/:id", deleteIncome);

module.exports = router;
