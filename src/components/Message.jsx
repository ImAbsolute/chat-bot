import React from "react";

const Message = ({ messages }) => {
	return (
		<>
			<div>{messages.text}</div>
			<div className="message-sender">{messages.sender}</div>
		</>
	);
};
export default Message;
