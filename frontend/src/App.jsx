import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Components/NavMenu";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Transactions from "./Components/Transactions";
import Incomes from "./Components/Incomes";
import Expenses from "./Components/Expenses";
import { useGlobalContext } from "./Context/globalContent";

function App() {
	const [active, setActive] = useState(1);
	console.log(active);
	// access the context provider
	const global = useGlobalContext();
	// console.log(global);

	const switchViews = () => {
		switch (active) {
			case 1:
				return <Dashboard />;
			case 2:
				return <Transactions />;
			case 3:
				return <Incomes />;
			case 4:
				return <Expenses />;
			default:
				return <Dashboard />;
		}
	};

	return (
		<div className="App">
			<NavMenu
				active={active}
				setActive={setActive}
				switchViews={switchViews}
			/>
		</div>
	);
}

export default App;
