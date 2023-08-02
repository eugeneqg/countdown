import React from "react";
import { ThreeDots } from "react-bootstrap-icons";

import "./countdown.sass";
import Menu from "../menu/menu";

const Countdown = ({rf, keyItem, name, finish}) => {
    const [now, setNow] = React.useState(new Date().getTime());
    const [timeLeft, setTimeLeft] = React.useState(finish - now);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [days, setDays] = React.useState(0);


    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(finish - now);
            setNow(new Date().getTime())
            return clearInterval(interval);
        }, 1000);

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((timeLeft / (1000 * 60) % 60));
        const seconds = Math.floor((timeLeft / 1000) % 60)
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);

    if (timeLeft < 0) {
      clearInterval(interval);
    }

    }, [now, finish, timeLeft]);

    const openModal = () => {
        setIsMenuOpen(true);
    }

    const deleteItem = () => {
        localStorage.removeItem(JSON.stringify(keyItem));
        window.dispatchEvent(new Event("storage"));
    }




    return (
        <div className="countdown">
            {isMenuOpen ? <Menu rf={rf} setIsMenuOpen={setIsMenuOpen} deleteItem={deleteItem}/> : null}
            <div className="countdown__name">
                <ThreeDots onClick={openModal}/>
                <h3>{name}</h3>
            </div>
            <div className="countdown__timer">
                <div className="countdown__timer-block">
                    <h3>{days}</h3>
                    <p>days</p>
                </div>
                <div className="countdown__timer-block">
                    <h3>{hours}</h3>
                    <p>hours</p>
                </div> 
                <div className="countdown__timer-block">
                    <h3>{minutes}</h3>
                    <p>minutes</p>
                </div>
                <div className="countdown__timer-block">
                    <h3>{seconds}</h3>
                    <p>seconds</p>
                </div>

            </div>
        </div>
    )
}

export default Countdown;