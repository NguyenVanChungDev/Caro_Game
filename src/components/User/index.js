import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../action/loginUser";
import "./index.css";

function User(props) {
    const [namePlayerOne, setNamePlayerOne] = useState("");
    const [namePlayerTwo, setNamePlayerTwo] = useState("");
    const dispatch = useDispatch();

    const handlePlayerOneInput = (e) => {
        setNamePlayerOne(e.target.value);
    };

    const handlePlayerTwoInput = (e) => {
        setNamePlayerTwo(e.target.value);
    };
    useEffect(() => {
        dispatch(
            loginUser({
                namePlayerOne,
                namePlayerTwo,
            })
        );
        console.log("run..................................");
    }, [namePlayerTwo]);

    return (
        <div id="common">
            <div className="userFlex">
                <div className="userOne">
                    <label htmlFor="playerOne">Player 1 (X) : </label>
                    <input
                        value={namePlayerOne}
                        type="text"
                        id="playerOne"
                        placeholder="Enter your name of Player 1"
                        onChange={handlePlayerOneInput}
                    />
                </div>

                <div>
                    <label htmlFor="playerTwo">Player 2 (O): </label>
                    <input
                        type="text"
                        id="playerTwo"
                        placeholder="Enter your name of Player 2"
                        onChange={handlePlayerTwoInput}
                    />
                    <br />
                    <br />
                </div>
            </div>
            <div className="user">
                ( X ) :{" "}
                <span style={{ marginRight: "48px" }}>{namePlayerOne}</span>( O)
                :<span> {namePlayerTwo}</span>
            </div>
        </div>
    );
}

export default User;
