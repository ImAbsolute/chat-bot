import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeName} from "./Actions/profile"

export const Profile = () => {
	const profile = useSelector((glogalState) => glogalState.profile);
	const dispatch = useDispatch();

  const onHandleChange=React.useCallback(()=>{
    dispatch(changeName("Max"))
  },[dispatch])
	return (
		<div className="profile">
			<span>Name:{profile.name}</span>
			<span>Age:{profile.age}</span>
      <button className="change_button" onClick={onHandleChange}>Изменить имя</button>
		</div>
	);
};
