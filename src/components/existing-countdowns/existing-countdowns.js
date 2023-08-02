import Countdown from "../timer/countdown";
import React from "react";
import "./exisiting-countdowns.sass";

const ExistingCountdowns = ({rf, finishDate, setIsMenuOpen, isMenuOpen}) => {

    const [data, setData] = React.useState([]);
    const [keys, setKeys] = React.useState([]);

    React.useEffect(() => {

        const handleStorage = () => {

            const keys = Object.keys(localStorage);
            setKeys(keys);

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
            <Countdown rf={rf} keyItem={item.key} key={item.key} name={item.name} finish={finish} setIsMenuOpen={setIsMenuOpen}/>
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