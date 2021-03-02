import React from 'react';
import {RedButton, BlueButton, GreenButton, YelloButton, PurpleButton} from './component/buttons';
import {TextBox, PasswordBox} from './component/texts';

export default class ComponentSamplesPage extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            "text":"",
            "password":""
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

    render(){

        console.log(this.state);
        
        return(
            <div className="flex-column-left">

                <h2>シンプルなボタン</h2>
                <div className="mycard flex-row-center">
                    
                    <RedButton onClick={(e)=>this.onClick(e, "Red Button")} width="18%">RED</RedButton>
                    <BlueButton onClick={(e)=>this.onClick(e, "Blue Button")} width="18%">BLUE</BlueButton>
                    <GreenButton onClick={(e)=>this.onClick(e, "Green Button")} width="18%">GREEN</GreenButton>
                    <YelloButton onClick={(e)=>this.onClick(e, "Yello Button")} width="18%">YELLO</YelloButton>
                    <PurpleButton onClick={(e)=>this.onClick(e, "Purple Button")} width="18%">PURPLE</PurpleButton>

                </div>

                <h2>シンプルなテキストボックス</h2>
                <div className="mycard flex-row-center">

                    <TextBox value={this.state["text"]} label="テキスト" onChange={(e)=>this.onChange(e, "text")} width="45%"></TextBox>
                    <PasswordBox value={this.state["password"]} label="パスワード" onChange={(e)=>this.onChange(e, "password")} width="45%"></PasswordBox>

                </div>

            </div>
        );
    }
    
}

