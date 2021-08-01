import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../../App";
import { Profile } from "../Profile";

export const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={App} />
			<Route
          exact
          path="/chat/:chatId/"
          render={(obj) => <App chatId={Number(obj.match.params.chatId)} />}
        />
			<Route exact path="/profile" render={() => <Profile />} />
		</Switch>
	);
};
