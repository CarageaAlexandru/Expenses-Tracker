import React, { useState, useContext } from "react";
import axios from "axios";
// ENDPOINTS :
// router.get("/get-incomes", getIncomes);
// router.post("/add-income", addIncome);
// router.delete("/delete-income/:id", deleteIncome);

// router.get("/get-expenses", getExpenses);
// router.post("/add-expense", addExpense);
// router.delete("/delete-expense/:id", deleteExpense);

const base_url = "http://localhost:3000/api/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
	const [incomes, setIncomes] = useState([]);
	const [expenses, setExpenses] = useState([]);
	const [error, setError] = useState(null);

	const addIncome = async (income) => {
		try {
			console.log(income);
			const res = await axios.post(`${base_url}add-income`, income);
			setIncomes([...incomes, res.data]);
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	return (
		<GlobalContext.Provider value={addIncome}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
