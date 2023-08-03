import React from "react";
import { ThreeDots } from "react-bootstrap-icons";

import "./countdown.sass";
import Menu from "../menu/menu";

const Countdown = ({keyItem, name, date, finish, bgcolor, isDark}) => {
    const [now, setNow] = React.useState(new Date().getTime());
    const [timeLeft, setTimeLeft] = React.useState(finish - now);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [bgColor, setBgColor] = React.useState(bgcolor ? bgcolor : "#F7F7F7");
    const [width, setWidth] = React.useState("100%");


    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [days, setDays] = React.useState(0);


    React.useEffect(() => {

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((timeLeft / (1000 * 60) % 60));
        const seconds = Math.floor((timeLeft / 1000) % 60)
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);

        const interval = setInterval(() => {
            setTimeLeft(finish - now);
            setNow(new Date().getTime())
            return clearInterval(interval);
        }, 1000);
    } else {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);;
    }

    }, [now, finish, timeLeft]);

    const openModal = () => {
        setIsMenuOpen(true);
    }

    const deleteItem = () => {
        localStorage.removeItem(JSON.stringify(keyItem));
        window.dispatchEvent(new Event("storage"));
    }

    const setColor = (color) => {
        setBgColor(color)
        localStorage.setItem(keyItem, JSON.stringify({name: name, date: date, key: keyItem, bgcolor: color}));
        window.dispatchEvent(new Event("storage"));
    }

    const handleYPosition = (e) => {
        const show = e.target.getBoundingClientRect()
        show.y < 507 ? setWidth("100%") : setWidth("90%");
    }

    return (
        <div onClick={handleYPosition} className="countdown" style={{"backgroundColor": `${bgColor}`, "width": `${width}`}}>
            {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} deleteItem={deleteItem} setColor={setColor}/> : null}
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