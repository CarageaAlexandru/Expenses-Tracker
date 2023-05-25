import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../Context/globalContent";

function Form() {
	const { addIncome, getIncomes, error, setError } = useGlobalContext();
	// console.log('addIncome: ', addIncome);
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
			await addIncome(inputState);
			setInputState({
				title: "",
				amount: "",
				date: "",
				category: "",
				description: "",
			});
			console.log("New income added");

			// Retrieve the updated list of incomes
			await getIncomes();
			console.log("Incomes updated");
		} catch (error) {
			console.log("Error adding income:", error);
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
						placeholder="Salary Title"
						onChange={handleInput("title")}
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						value={amount}
						name="amount"
						placeholder="Salary Amount"
						onChange={handleInput("amount")}
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
						<option value="salary">Salary</option>
						<option value="freelancing">Freelancing</option>
						<option value="investments">Investiments</option>
						<option value="stocks">Stocks</option>
						<option value="bitcoin">Bitcoin</option>
						<option value="bank">Bank Transfer</option>
						<option value="youtube">Youtube</option>
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

export default Form;
