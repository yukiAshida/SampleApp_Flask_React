import React from 'react';
import styled from "styled-components";

const COLORS = {
    "RED":["B1221A", "F37167"],
    "BLUE":["233B6C", "6283C2"],
    "GREEN":["005344", "26896D"],
    "YELLOW":["F15A22", "FCBB76"],
    "PURPLE":["6658A6", "9B92C6"],
    "OTHERS":["111111", "888888"]
}

export const Button = (props)=>{

    var cb = COLORS[props.color]?COLORS[props.color][0]:COLORS["OTHERS"][0]
    var ca = COLORS[props.color]?COLORS[props.color][1]:COLORS["OTHERS"][1]

    return ( <StyledButton onClick={(e)=>props.onClick(e)} colorBefore={cb} colorAfter={ca} width={props.width}>{props.children}</StyledButton> );
}


const StyledButton = styled.button`
    background-color: ${props => props.colorBefore!=undefined?props.colorBefore:"#FF0000"};
    &:active {
        background-color: ${props => props.colorAfter!=undefined?props.colorAfter:"#FF0000"};
    }
    color: #FFFFFF;

    border-radius: 3px;
    border: 0;

    height: 48px;
    width: ${props => props.width!=undefined?props.width:'50px'};    

    margin: 10px;
    outline: none;
`;