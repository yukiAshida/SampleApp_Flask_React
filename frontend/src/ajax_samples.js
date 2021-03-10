import React from "react";
import { Button } from "./component/buttons";
import request from "superagent";
import axios from "axios";

const ROOT_ORIGIN = "http://3.114.6.60:8000/";

export default class AjaxSamplesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "No record yet...",
      lottery: "---",
    };
  }

  getWithSuperagent(e, label) {
    request
      .get(ROOT_ORIGIN + "/ajax_samples_superagent")
      .set("Content-Type", "application/json; charset=utf-8")
      .query(this.state)
      .end((error, res) => {
        // サーバーからログインチェック判定用変数を取得
        var res_text = JSON.parse(res.text);

        // 状態を更新
        var new_state = Object.assign({}, this.state);
        new_state["message"] = res_text["message"];
        new_state["lottery"] = res_text["lottery"];
        this.setState(new_state);
      });
  }

  postWithSuperagent(e, label) {
    request
      .post(ROOT_ORIGIN + "ajax_samples_superagent")
      .set("Content-Type", "application/json; charset=utf-8")
      .send(this.state)
      .end((error, res) => {
        // サーバーからログインチェック判定用変数を取得
        var res_text = JSON.parse(res.text);

        // 状態を更新
        var new_state = Object.assign({}, this.state);
        new_state["message"] = res_text["message"];
        new_state["lottery"] = res_text["lottery"];
        this.setState(new_state);
      });
  }

  getWithAxios(e, label) {
    axios
      .get(ROOT_ORIGIN + "ajax_samples_axios", { params: this.state })
      .then((res) => {
        var new_state = Object.assign({}, this.state);
        new_state["message"] = res.data["message"];
        new_state["lottery"] = res.data["lottery"];
        this.setState(new_state);
      });
  }

  postWithAxios(e, label) {
    axios.post(ROOT_ORIGIN + "ajax_samples_axios", this.state).then((res) => {
      var new_state = Object.assign({}, this.state);
      new_state["message"] = res.data["message"];
      new_state["lottery"] = res.data["lottery"];
      this.setState(new_state);
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="flex-column-left">
        <h2>Flaskサーバーと通信</h2>
        <div className="mycard flex-row-center">
          <Button
            color="RED"
            onClick={(e) => this.getWithSuperagent(e, "superagent-get")}
            width="23%"
          >
            GET Superagent
          </Button>
          <Button
            color="BLUE"
            onClick={(e) => this.postWithSuperagent(e, "superagent-post")}
            width="23%"
          >
            POST Superagent
          </Button>
          <Button
            color="GREEN"
            onClick={(e) => this.getWithAxios(e, "axios-get")}
            width="23%"
          >
            GET Axios
          </Button>
          <Button
            color="YELLOW"
            onClick={(e) => this.postWithAxios(e, "axios-post")}
            width="23%"
          >
            POST Axios
          </Button>
        </div>

        <div className="mycard">
          <h1>通信結果：</h1>
          <div>{this.state["message"]}</div>
          <div>{this.state["lottery"]}</div>
        </div>
      </div>
    );
  }
}
