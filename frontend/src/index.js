import React from 'react';
import ReactDOM from 'react-dom';
import './style/index';

import RootPage from './root'
import ComponentSamplesPage from './component_samples'
import AjaxSamplesPage from './ajax_samples'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "page": "root",
    };
  }

  // トップレベルのページ遷移・データ更新関数
  // [TODO] pageがundifinedになりうる
  transPage({nextpage, update={}}){
        
    // 状態をコピー
    var new_state = Object.assign({},this.state);
    
    // 遷移先のページを指定
    new_state["page"] = nextpage;

    // 親パラメタの更新
    for(var key in update){  new_state[key] = update[key];  }

    // 状態を遷移
    this.setState(new_state);

  }

  render(){

    console.log("page:", this.state["page"]);

    return(
        <div id="index">

            {/* rootページ */}
            {this.state["page"]=="root" && <RootPage transPage={({nextpage, update})=>this.transPage({nextpage, update})} />}

            {/* component_samplesページ */}
            {this.state["page"]=="component_samples" && <ComponentSamplesPage transPage={({nextpage, update})=>this.transPage({nextpage, update})} />}

            {/* component_samplesページ */}
            {this.state["page"]=="ajax_samples" && <AjaxSamplesPage transPage={({nextpage, update})=>this.transPage({nextpage, update})} />}
            

        </div>
    );
  } 
}


ReactDOM.render(
  <Main />,
  document.getElementById('app')
);