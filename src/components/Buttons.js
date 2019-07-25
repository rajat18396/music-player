import React from "react";
import ButtonUI from '@material-ui/core/Button';

const Button = props => {
    return (
        <ButtonUI
            className="buttoncolorchange"
            onClick={props.action}
        >
            {props.title}
        </ButtonUI>
    );
};

export default Button;
