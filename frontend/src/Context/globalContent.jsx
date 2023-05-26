import React, { useState, useContext } from "react";
import axios from "axios";
// ENDPOINTS :
// router.get("/get-incomes", getIncomes);
// router.post("/add-income", addIncome);
// router.delete("/delete-income/:id", deleteIncome);

// router.get("/get-expenses", getExpenses);
// router.post("/add-expense", addExpense);
// router.delete("/delete-expense/:id", deleteExpense);

const base_url = "https://bronze-fly-hose.cyclic.app/api/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
	const [incomes, setIncomes] = useState([]);
	const [expenses, setExpenses] = useState([]);
	const [error, setError] = useState(null);

	const addIncome = async (income) => {
		try {
			const res = await axios.post(`${base_url}add-income`, income);
			console.log(res.data);
			setIncomes((prevIncomes) => {
				return [...prevIncomes, res.data];
			});
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const getIncomes = async () => {
		try {
			const res = await axios.get(`${base_url}get-incomes`);
			console.log(res.data);
			setIncomes(res.data);
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const deleteIncome = async (id) => {
		try {
			const res = await axios.delete(`${base_url}delete-income/${id}`);
			console.log(res.data);
			setExpenses((prevExpenses) => {
				return prevExpenses.filter((income) => income._id !== id);
			});
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const totalIncome = incomes.reduce((acc, curr) => {
		return acc + curr.amount;
	}, 0);

	// EXPENSES

	const addExpense = async (expense) => {
		try {
			const res = await axios.post(`${base_url}add-expense`, expense);
			console.log(res.data);
			setExpenses((prevExpenses) => {
				return [...prevExpenses, res.data];
			});
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const getExpenses = async () => {
		try {
			const res = await axios.get(`${base_url}get-expenses`);
			console.log(res.data);
			setExpenses(res.data);
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const deleteExpense = async (id) => {
		try {
			const res = await axios.delete(`${base_url}delete-expense/${id}`);
			console.log(res.data);
			setIncomes((prevExpenses) => {
				return prevExpenses.filter((expense) => expense._id !== id);
			});
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const totalExpenses = expenses.reduce((acc, curr) => {
		return acc + curr.amount;
	}, 0);

	return (
		<GlobalContext.Provider
			value={{
				addIncome,
				getIncomes,
				incomes,
				deleteIncome,
				totalIncome,
				addExpense,
				getExpenses,
				expenses,
				deleteExpense,
				totalExpenses,
				error
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
