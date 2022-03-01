import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendBroadInfo } from "../../action/sendBroadInfo";

import "./style.css";

function Nuclear(props) {
    const [winer, setWiner] = useState(undefined);
    const [isEnd, setIsEnd] = useState(false);
    const [result, setResult] = useState("");
    const dispatch = useDispatch();

    // data of User
    const [core, setCore] = useState({
        playerValue: "X",
        data: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
    });

    // Array origin (with 30 element)
    const btnArray = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    ];

    // Get information os User from Redux
    const userInf = useSelector((state) => state.user);

    // Get Minus from store of Redux and Check with 20
    const minus = useSelector((state) => state.clock.minus);
    useEffect(() => {
        if (minus == 20) {
            setWiner(undefined);
            setIsEnd(true);
        }
    }, [minus]);

    useEffect(
        () => {
            if (isEnd) {
                dispatch(
                    sendBroadInfo({
                        isEnd,
                        winer,
                    })
                );
                if (winer == "X") {
                    setResult(userInf.namePlayerOne);
                } else if (winer == "O") {
                    setResult(userInf.namePlayerTwo);
                } else {
                    setResult("Đã hòa !");
                }
            }
        },
        [isEnd],
        [winer],
        [userInf]
    );

    // Check who is WIN?
    const checkWinter = (core) => {
        const data = core.data;

        // Array win
        const pointLink = [
            [0, 1, 2, 3, 4],
            [6, 7, 8, 9, 10],
            [12, 13, 14, 15, 16],
            [18, 19, 20, 21, 22],
            [24, 25, 26, 27, 28],
            [0, 6, 12, 18, 24],
            [1, 7, 13, 19, 25],
            [2, 8, 14, 20, 26],
            [3, 9, 15, 21, 27],
            [4, 10, 16, 22, 28],
            [0, 7, 14, 21, 28],
            [4, 9, 14, 19, 24],
            [1, 2, 3, 4, 5],
            [7, 8, 9, 10, 11],
            [13, 14, 15, 16, 17],
            [19, 20, 21, 22, 23],
            [25, 26, 27, 28, 29],
            [1, 8, 15, 22, 29],
            [5, 10, 15, 20, 25],
        ];

        for (const [a, b, c, d, e] of pointLink) {
            if (
                data[a] &&
                data[a] === data[b] &&
                data[b] === data[c] &&
                data[c] === data[d] &&
                data[d] === data[e]
            ) {
                setWiner(core.playerValue);
                setIsEnd(true);
                console.log(".....WIN.......");
            } else {
                const emptyELe = data.includes("");
                if (!emptyELe) {
                    setIsEnd(true);
                    setWiner(undefined);
                }
            }
        }
    };

    // When user click into cells
    const handleClick = (core, e, index) => {
        // Check is running?
        if (!(userInf.namePlayerOne || userInf.namePlayerTwo) && !isEnd) {
            alert("Nhập tên để bắt đầu chơi !");
            return;
        }

        // Check user can play continue? and Set state of core (data of User)
        if (core.data[index] === "" && !isEnd) {
            core.playerValue = core.playerValue == "X" ? "O" : "X";
            core.data[index] = core.playerValue;
            checkWinter(core);

            setCore((core) => ({
                ...core,
                playerValue: core.playerValue,
                data: core.data,
            }));
        }
        if (isEnd) {
            alert("Ván đấu đã kết thúc, xem kết quả tại màn hình");
        }
    };

    return (
        <div>
            <h3>
                <span>{winer === undefined && isEnd && result}</span>
                <span>
                    {winer != undefined && isEnd && result}{" "}
                    {winer != undefined && isEnd && " chiến thắng rồi"}
                </span>
            </h3>
            <div className="displayMain">
                {" "}
                {btnArray.map((item, index) => {
                    return (
                        <button
                            onClick={(e) => handleClick(core, e, index)}
                            className="btn1"
                            id={"btn" + index}
                            key={index}
                        >
                            {core.data[index]}
                        </button>
                    );
                })}{" "}
            </div>{" "}
        </div>
    );
}

export default Nuclear;
