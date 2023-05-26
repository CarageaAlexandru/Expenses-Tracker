import React, { useEffect } from "react";
import {
	Chart as ChartJs,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { dateFormat } from "../Utils/dateFormat";
import { useGlobalContext } from "../Context/globalContent";

ChartJs.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
);

const Dashboard = () => {
	const { incomes, expenses, getIncomes, getExpenses } = useGlobalContext();

	// now this hook will fetch the incomes and expenses from the database
	useEffect(() => {
		getIncomes();
		getExpenses();
	}, []);

	const data = {
		labels: incomes.map((inc) => {
			const { date } = inc;
			return dateFormat(date);
		}),
		datasets: [
			{
				label: "Income",
				data: [
					...incomes.map((income) => {
						const { amount } = income;
						return amount;
					}),
				],
				backgroundColor: "green",
				borderColor: "#00FF00",
				tension: 0.2,
			},
			{
				label: "Expenses",
				data: [
					...expenses.map((expense) => {
						const { amount } = expense;
						return amount;
					}),
				],
				backgroundColor: "red",
				borderColor: "#FF00FF",
				tension: 0.2,
			},
		],
	};
	const options = {
		plugins: {
			legend: {
				position: "top",
			},
		},
		scales: {
			x: {
				grid: {
					color: "rgba(255, 255, 255, 0.1)",
				},
				ticks: {
					color: "white", // Color of the x-axis labels
					font: {
						size: 16,
					},
				},
			},
			y: {
				grid: {
					color: "rgba(255, 255, 255, 0.1)",
				},
				ticks: {
					color: "white", // Color of the y-axis labels
					font: {
						size: 16,
					},
				},
			},
		},
	};

	return (
		<div className="container bg-dark mt-5">
			<div className="row">
				<div className="col">
					<Line data={data} options={options} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
