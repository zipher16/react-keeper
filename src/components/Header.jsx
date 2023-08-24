import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import Time from "./Time";

function Header() {
	return (
		<header>
			<h1>
				<HighlightIcon />
				Keeper
			</h1>
			<h2>
				<Time />
			</h2>
		</header>
	);
}

export default Header;
