import React from "react";
import { useState } from "react";

function Button( {children, colorChange}) {
const [active, setActive] = useState(false)
const handleClick = () => {
    setActive(!active);
};
    return (
        <button className={colorChange} onClick={handleClick} style={{backgroundColor: active ? "#495E57" : "#F4CE14", color: active ? "white" : "black"}} type="button">{children}</button>
    )
}

export default Button;