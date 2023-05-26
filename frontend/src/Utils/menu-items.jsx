import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";

export const menuItems = [
	{
		id: 1,
		title: "Dashboard",
		icon: <MdOutlineSpaceDashboard />,
		link: "/dashboard",
	},
	{
		id: 2,
		title: "View Transactions",
		icon: <GrTransaction />,
		link: "/dashboard",
	},
	{
		id: 3,
		title: "Incomes",
		icon: <GiReceiveMoney />,
		link: "/dashboard",
	},
	{
		id: 4,
		title: "Expenses",
		icon: <GiPayMoney />,
		link: "/dashboard",
	},
];
