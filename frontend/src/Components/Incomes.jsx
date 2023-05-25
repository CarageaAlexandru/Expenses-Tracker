import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/globalContent";
import Form from "./Form";

const Incomes = () => {
	const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
		useGlobalContext();

	useEffect(() => {
		getIncomes();
	}, []);

	return (
		<div className="container text-center">
			<div className="row">
				<div className="col">
					<Form />
				</div>
				<div className="col">
					<div>
						<h3>Total Income: {totalIncome}</h3>
						<div className="row row-cols-1 row-cols-md-2 g-4">
							{incomes.map((income) => {
								const {
									_id,
									title,
									amount,
									date,
									category,
									description,
								} = income;
								{
									/* const formatedDate = date.split('T')[0]; */
								}
								return (
									<div className="col" key={_id}>
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">
													{title}
												</h5>
												<p className="card-text">
													Amount: {amount}
													<br />
													Date: {date}
													<br />
													Category: {category}
													<br />
													Description: {description}
												</p>
												<button
													className="btn btn-danger"
													onClick={() =>
														deleteIncome(_id)
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
