import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendClock } from "../../action/sendClock";
import "./index.css";

function Clock(props) {
    const [second, setSecond] = useState(0);
    const [minus, setMinus] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        if (minus === 20) {
            console.log("at Clock Dispatch Minus");
            dispatch(sendClock({ minus }));
        }
    }, [minus === 20]);

    const userInfo = useSelector((state) => state.user);
    const broadInfo = useSelector((state) => state.broad);

    // Check user have ?
    const isRun = Boolean(userInfo.namePlayerOne || userInfo.namePlayerTwo);

    // timerId of setInterval()
    let timerId = useRef();

    useEffect(
        () => {
            var counter = 0;
            if (isRun) {
                timerId.current = setInterval(() => {
                    counter += 1;
                    if (counter >= 60) {
                        setSecond(() => {
                            return counter % 60;
                        });
                        setMinus(() => {
                            return Math.floor(counter / 60);
                        });
                    } else {
                        setSecond(counter);
                    }
                }, 1000);
            }

            // Clear interval if isEnd==true or minus ==20
            if (broadInfo.isEnd || minus == 20) {
                return clearInterval(timerId.current);
            }
        },
        [isRun],
        [broadInfo.isEnd],
        [minus == 20]
    );

    return (
        <div>
            <div>
                <p className="clock">
                    Đồng hồ đếm giờ:
                    <span className="minus"> {minus}</span> :
                    <span className="second"> {second}</span>
                </p>
                {broadInfo.isEnd && (
                    <p className="timed">
                        Thời gian đã chơi: {minus} phút {second} giây
                    </p>
                )}
            </div>
        </div>
    );
}

export default Clock;
