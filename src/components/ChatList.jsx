import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Input,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "./Actions/chats";
import { addNewMessageList } from "./Actions/newMessageList";
import SendIcon from "@material-ui/icons/Send";
import "./style.css";
import { Link } from "react-router-dom";

const ChatList = ({ chatId }) => {
	const [input, setInput] = React.useState("");
	const chats = useSelector((glogalState) => glogalState.chats);
	const dispatch = useDispatch();
	console.log(chats);

	// const handleKeyPress = (event, value) => {
	// 	if (event.key === "Enter") {
	// 		setInput("");
	// 	}
	// };

	const newId = Object.keys(chats).length + 1;
	console.log(newId);

	const handleKeyPress = React.useCallback(
		(event) => {
			if (event.key === "Enter") {
				dispatch(addChat(input, newId));
				dispatch(addNewMessageList(newId));
				setInput("");
			}
		},
		[dispatch, input, newId]
	);

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
