import React from 'react';
import {Button} from './component/buttons';
import {TextBox, PasswordBox} from './component/texts';
import {SelectBox} from './component/selects';
import {CheckBox} from './component/checks';

export default class ComponentSamplesPage extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            "text":"",
            "password":"",
            "select1":"",
            "select2":"",
            "check1":false,
            "check2":false,
            "check3":true,
        };
    }

    onClick(e, comment){
        alert(comment);
    }

    onChange(e, label){

        var new_state = Object.assign({},this.state);
        new_state[label] = e.target.value;
        this.setState(new_state);
    }

    onChangeSelect(e, label){

        var new_state = Object.assign({},this.state);
        new_state[label] = e.target.value;
        this.setState(new_state);
    }

    onClickCheck(e, label){
        console.log(label)
        var new_state = Object.assign({},this.state);
        new_state[label] = Boolean( (1+new_state[label])%2 );
        this.setState(new_state);
    }


    render(){

        console.log(this.state);
        
        return(
            <div className="flex-column-left">

                <h2>ボタン</h2>
                <div className="mycard flex-row-center">
                    <Button color="RED" onClick={(e)=>this.onClick(e, "Red Button")} width="15%">RED</Button>
                    <Button color="BLUE" onClick={(e)=>this.onClick(e, "Blue Button")} width="15%">BLUE</Button>
                    <Button color="GREEN" onClick={(e)=>this.onClick(e, "Green Button")} width="15%">GREEN</Button>
                    <Button color="YELLOW" onClick={(e)=>this.onClick(e, "Yello Button")} width="15%">YELLO</Button>
                    <Button color="PURPLE" onClick={(e)=>this.onClick(e, "Purple Button")} width="15%">PURPLE</Button>
                    <Button color="SKY" onClick={(e)=>this.onClick(e, "Sky Button")} width="15%">SKY</Button>
                </div>

                <h2>テキストボックス</h2>
                <div className="mycard flex-column-left">
                    <TextBox value={this.state["text"]} label="テキスト" onChange={(e)=>this.onChange(e, "text")} width="45%" height="50px"></TextBox>
                    <PasswordBox value={this.state["password"]} label="パスワード" onChange={(e)=>this.onChange(e, "password")} width="45%" height="50px"></PasswordBox>
                </div>

                <h2>セレクトボックス</h2>
                <div className="mycard flex-column-left">
                    <SelectBox values={["DOG", "CAT", "RABIT", "OTHERS"]} selected_value={this.state["select"]} onChange={(e)=>this.onChangeSelect(e, "select1")} width="45%" height="50px"/>
                    <SelectBox values={["MAN", "WOMAN", "OTHERS"]} selected_value={this.state["select"]} onChange={(e)=>this.onChangeSelect(e, "select2")} width="45%" height="50px"/>
                </div>

                <h2>チェックボックス</h2>
                <div className="mycard flex-column-left">
                    <CheckBox label="check1" checked={this.state["check1"]} onChange={(e)=>this.onClickCheck(e, "check1")} width="30%" height="50px"/>
                    <CheckBox label="check2" checked={this.state["check2"]} onChange={(e)=>this.onClickCheck(e, "check2")} width="30%" height="50px"/>
                    <CheckBox label="check3" checked={this.state["check3"]} onChange={(e)=>this.onClickCheck(e, "check3")} width="30%" height="50px"/>
                </div>

                <h2>ラジオボタン</h2>
                <div className="mycard flex-column-left">
                </div>
                
            </div>
        );
    }
    
}

