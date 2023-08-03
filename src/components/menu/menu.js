import "./menu.sass"
import React from "react";
import { Trash } from "react-bootstrap-icons";

const Menu = ({setIsMenuOpen, deleteItem, setColor}) => {

    const ref = React.useRef()

    const closeMenu = (e) => {
        console.log(e.target)
        if (ref.current && ref.current.contains(e.target)) {
            setIsMenuOpen(false);
        }
    }

    return (
            <div onClick={closeMenu} ref={ref} className="menu">
                <div onClick={deleteItem} className="d-flex gap-2 align-items-center">
                    <Trash/>
                    <h2>Delete</h2>
                </div>
                <div className="colors">
                    <div onClick={() => setColor("#FFBDBD")} style={{"backgroundColor": "#FFBDBD"}} className="colors__item"></div>
                    <div onClick={() => setColor("#D0F0B7")} style={{"backgroundColor": "#D0F0B7"}} className="colors__item"></div>
                    <div onClick={() => setColor("#AFC1FF")} style={{"backgroundColor": "#AFC1FF"}} className="colors__item"></div>
                    <div onClick={() => setColor("#FFB7D9")} style={{"backgroundColor": "#FFB7D9"}} className="colors__item"></div>
                    <div onClick={() => setColor("#FFE2B7")} style={{"backgroundColor": "#FFE2B7"}} className="colors__item"></div>
                    <div onClick={() => setColor("#B7E9FF")} style={{"backgroundColor": "#B7E9FF"}} className="colors__item"></div>
                    <div onClick={() => setColor("#FFFCB7")} style={{"backgroundColor": "#FFFCB7"}} className="colors__item"></div>
                </div>
            </div>
    )
}

export default Menu;