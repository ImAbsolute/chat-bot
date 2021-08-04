import React from "react";
import { Fab, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addMessageToState } from "./Actions/messages";

const MessageField = ({ chatId }) => {
	const message = useSelector((glogalState) => glogalState.messages);
	const dispatch = useDispatch();

	const [value, setValue] = React.useState("");

	const handleKeyPress = (event, value) => {
		if (event.key === "Enter") {
			setValue("");
		}
	};

	const onHandleClick = React.useCallback(() => {
		dispatch(addMessageToState(value, chatId));
		setValue("");
	}, [dispatch, value, chatId]);

	return (
		<div className="layout">
			<div className="MessageField">
				{message[chatId].map((item, index) => (
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
