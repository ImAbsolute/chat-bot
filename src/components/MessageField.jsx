import React from "react";
import { Fab, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./Actions/messages";

const MessageField = ({ chatId }) => {
	const message = useSelector((glogalState) => glogalState.messages);
	const dispatch = useDispatch();
	const timer = React.useRef(null);

	const [value, setValue] = React.useState("");

	const handleKeyPress = React.useCallback(
		(event) => {
			if (event.key === "Enter") {
				dispatch(addMessage({ text: value, sender: "me" }, chatId));
				setValue("");
			}
		},
		[dispatch, value, chatId]
	);

	const onHandleClick = React.useCallback(() => {
		dispatch(addMessage({ text: value, sender: "me" }, chatId));
		setValue("");
	}, [dispatch, value, chatId]);

	React.useEffect(() => {
		if (message[chatId][message[chatId].length - 1].sender === "me") {
			timer.current = setTimeout(() => {
				dispatch(
					addMessage(
						{ text: "Не приставай ко мне я бот!", sender: "bot" },
						chatId
					)
				);
			}, 1000);
		}
	}, [message]);

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
