import "./menu.sass"
import React from "react";

const Menu = ({setIsMenuOpen, deleteItem}) => {

    const ref = React.useRef()

    const closeMenu = (e) => {
        console.log(e.target)
        if (ref.current && ref.current.contains(e.target)) {
            setIsMenuOpen(false);
        }
    }

    return (
            <div onClick={closeMenu} ref={ref} className="menu">
                <div>
                    <h2 onClick={deleteItem}>Delete</h2>
                </div>
                <div>
                    <h2>Change colour</h2>
                </div>
            </div>
    )
}

export default Menu;