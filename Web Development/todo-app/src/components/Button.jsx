import React from "react";

const Button = ({
    width,
    height,
    display,
    alignItems,
    justifyContent,
    backgroundColor,
    children,
    ...rest
}) => {
    const style = {
        width,
        height,
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor,
    };
    
    return (
        <button style={style} {...rest}>
            {children}
        </button>
    );
};

export default Button;