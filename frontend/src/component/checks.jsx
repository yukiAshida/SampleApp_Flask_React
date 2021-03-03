import React from 'react';
import styled from "styled-components";


export const CheckBox = (props)=>{
    
    var ID = String(Math.round(Math.random()*100000));
    
    return ( 

        <StyledCheck width={props.width} height={props.height}>
          <input id={"check-" + ID + props.label} type="checkbox" onChange={props.onChange} checked={props.checked}></input>
          <label for={"check-" + ID + props.label}>{props.label}</label>
        </StyledCheck>

    );
}

const StyledCheck = styled.div`

margin: 10px;

input {
  display: none; 
}

label {
  width: ${props => props.width!=undefined?props.width:"30px"};
  height: ${props => props.height!=undefined?props.height:"30px"};
  line-height: ${props => props.height!=undefined?props.height:"30px"};
  
  display: block;
  position: relative;

  // 〇マークがちょうど30px幅なので...
  padding-left: 60px;

  border: 3px solid #fff;
  border-radius: 100px;
  color: #fff;
  background-color: #6a8494;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background-color .2s;
}

// 丸マークの描画
label::before {
  content: '';
  display: block;

  // 丸マークの位置決め
  // 上下左10px空ける
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;

  // 丸マークの形
  width: 30px;
  border: 3px solid #fff;
  border-radius: 100px;
  transition: background-color .2s;
}

input:checked + label {
  background-color: #ab576c;
}

input:checked + label::before {
  background-color: #fff;
}
`;