import React from 'react';
import styled from "styled-components";


export const SelectBox = (props)=>{

    var values = props.values
    var selected_value = props.selected_value

    return (
        <StyledSelect width={props.width} height={props.height}>
            <select onChange={props.onChange}>
                {selected_value==undefined && <option value="" hidden>{props.label}</option>}    
                {values.map( 
                    (v, i) => { return v==selected_value?<option value={v} key={i} selected>{v}</option>:<option value={v} key={i}>{v}</option>} 
                )}
            </select>
        </StyledSelect>
    );
}


const StyledSelect = styled.div`
width: ${props => props.width!=undefined?props.width:"30px"};
height: ${props => props.height!=undefined?props.height:"30px"};
line-height: ${props => props.height!=undefined?props.height:"30px"};
margin: 10px;
padding: 0px;

position: relative;
border: 1px solid #bbbbbb;
border-radius: 4px;
background: #ffffff;

&>select{

    width: 100%;
    height: 100%;
    padding:10px;
    cursor: pointer;
    text-overflow: ellipsis;  // 文字がはみ出たら...にする

    // 中のselectの不要なものを透かす
    outline: none;
    background: transparent;
    background-image: none;
    border: none;
    box-shadow: none;

    // デフォルトの矢印非表示
    -webkit-appearance: none;
    appearance: none;
}


// 矢印を表示
&::before {
	position: absolute;
	top: 45%;
	right: 0.9em;
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #666666;
	pointer-events: none;
}
`;