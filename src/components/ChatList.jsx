import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Input,
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";
import "./style.css";
import { Link } from "react-router-dom";

const ChatList = ({ handleAddChat, chats }) => {
	const [input, setInput] = React.useState("");

	const handleKeyPress = (event, value) => {
		if (event.key === "Enter") {
			handleAddChat(value);
			setInput("");
		}
	};

	return (
		<div className="chat-list">
			<List>
				{Object.keys(chats).map((chatId) => (
					<Link key={chatId} to={`/chat/${chatId}`}>
						<ListItem>
							<ListItemIcon>
								<SendIcon />
							</ListItemIcon>
							<ListItemText primary={chats[chatId].title} />
						</ListItem>
					</Link>
				))}
				<ListItem key="Add new chat" style={{ height: "60px" }}>
					<Input
						placeholder="Добавить нвоый чат"
						onChange={(event) => setInput(event.target.value)}
						value={input}
						onKeyPress={(event) => handleKeyPress(event, input)}
					/>
				</ListItem>
			</List>
		</div>
	);
};

export default ChatList;
