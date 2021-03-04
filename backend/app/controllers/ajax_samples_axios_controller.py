from flask import Blueprint, render_template, jsonify, request
import random

mod_ajax_samples_axios = Blueprint('ajax_samples_axios', __name__)

@mod_ajax_samples_axios.route('/ajax_samples_axios', methods=["GET","POST"])
def ajax_samples_axios():

    # データの受け取り
    if request.method == "POST":

        # json形式(辞書)でリクエストデータを受信
        receive_data = request.get_json()
        print(receive_data)

        message = "Hello! I'm axios. I received POST request..."
        lottery = random.choice(["大吉", "吉", "中吉", "半吉", "末吉", "凶"])

        return jsonify({"message":message, "lottery":lottery}), 200

    else:
        
        # 辞書形式でクエリパラメータを受信
        query_data = dict(request.args)
        print(query_data)

        message = "Hello! I'm axios. I received GET request..."
        lottery = random.choice(["大吉", "吉", "中吉", "半吉", "末吉", "凶"])

        return jsonify({"message":message, "lottery":lottery}), 200