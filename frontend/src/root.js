import React from "react";
import { Button } from "./component/buttons";

export default class RootPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  transPage(e, nextpage) {
    this.props.transPage({ nextpage: nextpage });
  }

  render() {
    return (
      <div id="root_page" className="flex-row-center">
        <div className="mycard flex-column-center">
          <Button
            color="BLUE"
            onClick={(e) => this.transPage(e, "ajax_samples")}
            width="50vw"
          >
            【サンプル】AJAX
          </Button>
          <Button
            color="BLUE"
            onClick={(e) => this.transPage(e, "component_samples")}
            width="50vw"
          >
            【サンプル】コンポーネント
          </Button>
        </div>
      </div>
    );
  }
}
