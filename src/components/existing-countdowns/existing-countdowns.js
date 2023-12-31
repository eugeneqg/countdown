import Countdown from "../timer/countdown";
import React from "react";
import "./exisiting-countdowns.sass";

const ExistingCountdowns = ({finishDate, setIsMenuOpen, isMenuOpen}) => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        const handleStorage = () => {

            const keys = Object.keys(localStorage);

            const parsed = keys.map(key => {
              return JSON.parse(localStorage.getItem(key))
            });

            setData(parsed); 
        }

        handleStorage();

        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);

    }, [])

    const countdowns = data.length > 0 ? data.map(item => {
        const finish = item.date;

        return (
            <Countdown keyItem={item.key} key={item.key} name={item.name} date={item.date} finish={finish} setIsMenuOpen={setIsMenuOpen} bgcolor={item.bgcolor}/>
        )
    }) : <p>No countdowns</p>

    return (
        <div className="countdowns-wrapper">
            <div className="countdowns">
                {countdowns}
            </div>
        </div>
    )
}

export default ExistingCountdowns;