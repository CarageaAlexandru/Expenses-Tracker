import React from "react";
import { useGlobalContext } from "../Context/globalContent";
import Form from "./Form";

const Incomes = () => {
	const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
		useGlobalContext();
	return (
		<div>
			<Form />
		</div>
	);
};

export default Incomes;
