import React from 'react';
import styled from "styled-components";


export const TextBox = (props)=>{
    return ( 
        <StyledText type="text" value={props.value} placeholder={props.label} onChange={props.onChange} width={props.width} height={props.height}/>
    );
}

export const PasswordBox = (props)=>{
    return ( 
        <StyledText type="password" value={props.value} placeholder={props.label} onChange={props.onChange} width={props.width} height={props.height}/>
    );
}

const StyledText = styled.input`
box-sizing: border-box;

width: ${props => props.width!=undefined?props.width:"30px"};
height: ${props => props.height!=undefined?props.height:"30px"};
line-height: ${props => props.height!=undefined?props.height:"30px"};

transition: 0.3s;
letter-spacing: 1px;
padding: 10px;
margin: 10px;
color: #000000;

border: 1px solid #bbbbbb;
border-radius: 4px;
outline: none;

&:focus{
    border: 1px solid #888888;
	box-shadow: 0 0 5px 1px rgba(0,0,0,0.5);
}
`;