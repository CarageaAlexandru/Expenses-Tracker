import React from "react";
import { useGlobalContext } from "../Context/globalContent";
import { dateFormat } from "../Utils/dateFormat";

const TransactionList = () => {
	const { incomes, expenses } = useGlobalContext();

	const sortedExpenses = expenses.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	);

	const sortedIncomes = incomes.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	);

	// console.log(sortedExpenses);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="container">
						<h1>Expense Table</h1>
					</div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Date</th>
								<th scope="col">Title</th>
								<th scope="col">Amount</th>
							</tr>
						</thead>
						<tbody>
							{sortedExpenses.map((expense, index) => (
								<tr key={expense._id}>
									<th scope="row">{index + 1}</th>
									<td>{dateFormat(expense.date)}</td>
									<td>{expense.title}</td>
									<td>-£ {expense.amount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="col">
					<div className="container">
						<h1>Income Table</h1>
					</div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Date</th>
								<th scope="col">Title</th>
								<th scope="col">Amount</th>
							</tr>
						</thead>
						<tbody>
							{sortedIncomes.map((income, index) => (
								<tr key={income._id}>
									{/* index + 1 so it does not start from 0 */}
									<th scope="row">{index + 1}</th>
									<td>{dateFormat(income.date)}</td>
									<td>{income.title}</td>
									<td>+£ {income.amount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TransactionList;
