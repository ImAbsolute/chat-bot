import "./App.css";
import React from "react";
import MessageField from "./components/MessageField";
import ChatList from "./components/ChatList";
import Header from "./components/Header";

function App({ chatId }) {
	const [messageList, setmessageList] = React.useState({
		messages: {
			1: [{ text: "Привет!", sender: "bot" }],
			2: [{ text: "Здравствуй!", sender: "bot" }],
		},
	});
	const [chatList, setChatList] = React.useState({
		chats: {
			1: { title: "Чат 1", messageList: messageList.messages[1] },
			2: { title: "Чат 2", messageList: messageList.messages[2] },
		},
	});

	const sendMessage = (message) => {
		setmessageList({
			messages: {
				...messageList.messages,
				[chatId]: [...messageList.messages[chatId], { text: message, sender: "me" }],
			},
		});
		// setChatList({
		// 	chats: {
		// 		...chatList.chats,
		// 		[chatId]: {
		// 			...chatList.chats[chatId],
		// 			messageList: state.messages[chatId],
		// 		},
		// 	},
		// });
	};

 
	

	const handleAddChat = (title) => {
		const chatId = Object.keys(chatList.chats).length + 1;
    setmessageList({
			messages: {
				...messageList.messages,
				[chatId]: [],
			},
		});
    setChatList({
			chats: {
				...chatList.chats,
				[chatId]: { title: title, messageList: messageList.messages[chatId] },
			},
		});
		console.log(chatList);
	};

	React.useEffect(() => {
		setChatList({
			chats: {
				...chatList.chats,
				[chatId]: {
					...chatList.chats[chatId],
					messageList: messageList.messages[chatId],
				},
			},
		});
		if (
			messageList.messages[chatId][messageList.messages[chatId].length - 1].sender === "me"
		) {
			setTimeout(
				() =>
					setmessageList({
						messages: {
							...messageList.messages,
							[chatId]: [
								...messageList.messages[chatId],
								{ text: "Привет,я бот", sender: "bot" },
							],
						},
					}),
				1000
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [messageList]);

  

  
	console.log(messageList.messages);
	console.log(chatList.chats);
	console.log(chatId);

	// React.useEffect(() => {
	// 	if (state.messages[state.messages.length - 1].sender === "me") {
	// 		setTimeout(
	// 			() =>
	// 				setState({
	// 					messages: [
	// 						...state.messages,
	// 						{ text: "Не приставай ко мне я бот!", sender: "bot" },
	// 					],
	// 				}),
	// 			1000
	// 		);
	// 	}
	// }, [state]);

	return (
		<div className="App">
			<Header chatId={chatId} />
			<div className="wrapper">
				<ChatList handleAddChat={handleAddChat}  chats={chatList.chats} />
				<MessageField
					chatList={chatList}
					sendMessage={sendMessage}
					chatId={chatId}
				/>
			</div>
		</div>
	);
}

App.defaultProps = {
	chatId: 1,
};

export default App;
