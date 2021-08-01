import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ chatId }) => {
	return (
		<div className="header">
			Чат {chatId}
			<Link to="/profile">
				<span>Профиль</span>
			</Link>
		</div>
	);
};

export default Header;
