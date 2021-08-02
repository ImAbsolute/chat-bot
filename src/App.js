import "./App.css";
import React from "react";
import MessageField from "./components/MessageField";
import ChatList from "./components/ChatList";
import Header from "./components/Header";

function App({ chatId }) {
	const [state, setState] = React.useState({
		messages: {
			1: [{ text: "Привет!", sender: "bot" }],
			2: [{ text: "Здравствуй!", sender: "bot" }],
		},
	});
	const [chatList, setChatList] = React.useState({
		chats: {
			1: { title: "Чат 1", messageList: state.messages[1] },
			2: { title: "Чат 2", messageList: state.messages[2] },
		},
	});

	const sendMessage = (message) => {
		setState({
			messages: {
				...state.messages,
				[chatId]: [...state.messages[chatId], { text: message, sender: "me" }],
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
		setState({
			messages: {
				...state.messages,
				[chatId]: [],
			},
		});
		setChatList({
			chats: {
				...chatList.chats,
				[chatId]: { title: title, messageList: state.messages[chatId] },
			},
		});
		console.log(chatList);
	};

  React.useEffect(()=>{
    setChatList({
			chats: {
				...chatList.chats,
				[chatId]: {
					...chatList.chats[chatId],
					messageList: state.messages[chatId],
				},
			},
		});
    if (state.messages[chatId].[state.messages[chatId].length-1].sender === "me") {
			setTimeout(
				() =>
					setState({
						messages: {
              ...state.messages,
              [chatId]: [...state.messages[chatId], { text: "Привет,я бот", sender: "bot" }],
            },
					}),
				1000
			);
		}
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state])

	console.log(state.messages);
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
				<ChatList handleAddChat={handleAddChat} chats={chatList.chats} />
				<MessageField
					messages={state}
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
