import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider, useGlobalContext } from "../src/Context/globalContent"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</React.StrictMode>
);
