import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/globalContent";
import Form from "./Form";
import { dateFormat } from "../Utils/dateFormat";

const Incomes = () => {
	const { incomes, getIncomes, deleteIncome, totalIncome } =
		useGlobalContext();
	const [incomeList, setIncomeList] = useState([]);

	useEffect(() => {
		getIncomes();
	}, []);

	useEffect(() => {
		setIncomeList(incomes);
	}, [incomes]);

	const handleDeleteIncome = (incomeId) => {
		deleteIncome(incomeId);
		setIncomeList((prevIncomeList) =>
			prevIncomeList.filter((income) => income._id !== incomeId)
		);
	};

	return (
		<div className="container text-center">
			<div className="row">
				<div className="col">
					<Form />
				</div>
				<div className="col">
					<div className="container mt-5">
						<h3>
							Total Income: {totalIncome} £
						</h3>
						<div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
							{incomeList.map((income) => {
								const {
									_id,
									title,
									amount,
									date,
									category,
									description,
								} = income;
								return (
									<div className="col" key={_id}>
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">
													{title}
												</h5>
												<p className="card-text">
													<strong>Amount:</strong>{" "}
													{amount} £ <br />
													<strong>Date:</strong>{" "}
													{dateFormat(date)} <br />
													<strong>
														Category:
													</strong>{" "}
													{category} <br />
													<strong>
														Description:
													</strong>{" "}
													{description}
												</p>
												<button
													className="btn btn-danger"
													onClick={() =>
														handleDeleteIncome(_id)
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

export default Incomes;
