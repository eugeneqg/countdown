import React from "react";
import "./new-countdown.sass";
import { Row, Col } from "react-bootstrap";

const NewCountdown = ({setFinishDate}) => {

    const [name, setName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [active, setActive] = React.useState(false);
    const bgColors = ["#FFBDBD", "#D0F0B7","#AFC1FF", "#FFB7D9", "#FFE2B7", "#B7E9FF", "#FFFCB7"];
    const randomElement = bgColors[Math.floor(Math.random() * bgColors.length)];
    const now = new Date().getTime();
    let today = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeDate = (e) => {
        const finish = new Date(e.target.value).getTime();
        const diff = finish - now;
        diff > 0 ? setActive(true) : setActive(false)
        setDate(finish);
    }

    const handler = () => {
        const key = new Date().getTime()
        localStorage.setItem(key, JSON.stringify({name: name, date: date, key: key, bgcolor: randomElement}));
        window.dispatchEvent(new Event("storage"));
        setName("");
    }

    React.useEffect(() => {

        if (name && date && active) {
            document.querySelector("button").disabled = false
        } else {
            document.querySelector("button").disabled = true
        }

    }, [name, date, now, active]);

    return (
        <div className="timer-input">
           <Row className="w-100 m-0">
                <input onChange={changeName} value={name} className="timer-input__title" placeholder="Name your countdown"></input>
           </Row>
           <Row className="w-100 m-0 timer-inputs">
                <Col xs={8}>
                    <input onChange={changeDate} className="timer-inputs__col" type="datetime-local" value={today} min={today}></input>
                </Col>
                <Col>
                    <button onClick={handler} type="submit" className="timer-inputs__button">Add</button>
                </Col>
           </Row>
        </div>
    )
}

export default NewCountdown;