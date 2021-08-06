import "./App.css";
import React from "react";
import MessageField from "./components/MessageField";
import ChatList from "./components/ChatList";
import Header from "./components/Header";

function App({ chatId }) {
	return (
		<div className="App">
			<Header chatId={chatId} />
			<div className="wrapper">
				<ChatList chatId={chatId} />
				<MessageField chatId={chatId} />
			</div>
		</div>
	);
}

App.defaultProps = {
	chatId: 1,
};

export default App;
