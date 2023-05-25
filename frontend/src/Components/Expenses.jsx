import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/globalContent";
import { FaPoundSign } from "react-icons/fa";
import ExpenseForm from "./ExpenseForm";
import { dateFormat } from "../Utils/dateFormat";


const Expenses = () => {
	const { expenses, getExpenses, deleteExpense, totalExpenses } =
		useGlobalContext();
	console.log("expenses: ", expenses);

	useEffect(() => {
		getExpenses();
	}, []);

	return (
		<div className="container text-center">
			<div className="row">
				<div className="col">
					<ExpenseForm />
				</div>
				<div className="col">
					<div>
						<h3>
							Total Expenses: {<FaPoundSign />} {totalExpenses}
						</h3>
						<div className="row row-cols-1 row-cols-md-2 g-4">
							{expenses.map((expense) => {
								const {
									_id,
									title,
									amount,
									date,
									category,
									description,
								} = expense;
						
								return (
									<div className="col" key={_id}>
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">
													{title}
												</h5>
												<p className="card-text">
													Amount:
													{amount}
													<br />
													Date: {dateFormat(date)}
													<br />
													Category: {category}
													<br />
													Description: {description}
												</p>
												<button
													className="btn btn-danger"
													onClick={() =>
														deleteExpense(_id)
													}
												>
													Delete
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Expenses;
