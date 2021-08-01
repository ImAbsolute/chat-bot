import { React, useState } from "react";
import { Fab, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import "./style.css";

const MessageField = ({ messages, chatList, sendMessage, chatId }) => {
	const [value, setValue] = useState("");

	const handleKeyPress = (event, value) => {
		if (event.key === "Enter") {
			sendMessage(value);
			setValue("");
		}
	};

	const onHandleClick = (value) => {
		sendMessage(value);
		setValue("");
	};

	return (
		<div className="layout">
			<div className="MessageField">
				{chatList.chats[chatId].messageList.map((item, index) => (
					<div
						key={index}
						className="message"
						style={{
							alignSelf: item.sender === "bot" ? "flex-start" : "flex-end",
						}}
					>
						<Message messages={item} />
					</div>
				))}
			</div>
			<div className="txt-area">
				<Input
					placeholder="Введите сообщение"
					fullWidth={true}
					inputProps={{ "aria-label": "description" }}
					onChange={(event) => setValue(event.target.value)}
					value={value}
					onKeyPress={(event) => handleKeyPress(event, value)}
				/>

				<Fab color="primary" onClick={() => onHandleClick(value)}>
					<SendIcon />
				</Fab>
			</div>
		</div>
	);
};

export default MessageField;
