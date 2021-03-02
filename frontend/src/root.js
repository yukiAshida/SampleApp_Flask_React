import React from 'react';
import {BlueButton} from './component/buttons';

export default class RootPage extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }

    transPage(e, nextpage){
        this.props.transPage({"nextpage":nextpage});
    }

    Hello(e, comment){
        alert(comment);
    }

    render(){
        
        return(
            <div id="root_page" className="flex-row-center">
                
                <div className="mycard flex-column-center">
                    <BlueButton onClick={(e)=>this.transPage(e, "component_samples")} width="50vw">【サンプル】ボタン</BlueButton>
                    <BlueButton onClick={(e)=>this.Hello(e, "hello!!")} width="50vw">青</BlueButton>
                    <BlueButton onClick={(e)=>this.Hello(e, "hello!!!")} width="50vw">緑</BlueButton>
                </div>

            </div>
        );
    }
    
}

