import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../Context/globalContent";

function ExpenseForm() {
	const { addExpense, getExpenses, error, setError } = useGlobalContext();
	// console.log('addExpense: ', addExpense);
	const [inputState, setInputState] = useState({
		title: "",
		amount: "",
		date: "",
		category: "",
		description: "",
	});

	const { title, amount, date, category, description } = inputState;

	const handleInput = (name) => (e) => {
		setInputState({ ...inputState, [name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await addExpense(inputState);
			setInputState({
				title: "",
				amount: "",
				date: "",
				category: "",
				description: "",
			});
			console.log("New expense added");

			// Retrieve the updated list of incomes
			await getExpenses();
			console.log("Expenses updated");
		} catch (error) {
			console.log("Error adding expense:", error);
			setError(error);
		}
	};

	// console.log(title, amount, date, category, description);

	return (
		<div className="container-sm mt-5">
			<form onSubmit={handleSubmit}>
				{error && <p className="error">{error}</p>}
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						value={title}
						name="title"
						placeholder="Expense Title"
						onChange={handleInput("title")}
						required
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						value={amount}
						name="amount"
						placeholder="Expense Amount"
						onChange={handleInput("amount")}
						required
					/>
				</div>
				<div className="mb-3">
					<DatePicker
						className="form-control"
						placeholderText="Enter A Date"
						selected={date}
						dateFormat="dd/MM/yyyy"
						onChange={(date) => {
							setInputState({ ...inputState, date: date });
						}}
						required
					/>
				</div>
				<div className="mb-3">
					<select
						required
						className="form-control"
						value={category}
						name="category"
						id="category"
						onChange={handleInput("category")}
					>
						<option value="" disabled>
							Select Option
						</option>
						<option value="education">Education</option>
						<option value="groceries">Groceries</option>
						<option value="health">Health</option>
						<option value="subscriptions">Subscriptions</option>
						<option value="takeaways">Takeaways</option>
						<option value="clothing">Clothing</option>
						<option value="travelling">Travelling</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div className="mb-3">
					<textarea
						className="form-control"
						name="description"
						value={description}
						placeholder="Add A Description"
						id="description"
						cols="30"
						rows="4"
						onChange={handleInput("description")}
						required
					></textarea>
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default ExpenseForm;
