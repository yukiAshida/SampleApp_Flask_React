from flask import Flask
from flask_cors import CORS

# Flaskアプリ生成
app = Flask(__name__)
CORS(app)
# app = Flask(__name__, template_folder='./views/templates',static_folder='./views/statics')

# indexルーティング
from app.controllers.index_controller import mod_index
app.register_blueprint(mod_index)

# ajax_samples_superagentルーティング
from app.controllers.ajax_samples_superagent_controller import mod_ajax_samples_superagent
app.register_blueprint(mod_ajax_samples_superagent)

# ajax_samples_axiosルーティング
from app.controllers.ajax_samples_axios_controller import mod_ajax_samples_axios
app.register_blueprint(mod_ajax_samples_axios)


# === 以下未使用 ====

# from flask_sqlalchemy import SQLAlchemy
# from flask_login import LoginManager
# import sys, os

# ログインマネージャー
# login_manager = LoginManager()
# login_manager.init_app(app)
# app.config["SECRET_KEY"] = 'ysxhsdfkawefuhaiweufjaksbdfuaiwefhaksgdfaksdf'

# DB
# if "--dev" in sys.argv:

#     POSTGRES_URL="127.0.0.1:5432"
#     POSTGRES_USER="postgres"
#     POSTGRES_PW=sys.argv[1]
#     POSTGRES_DB="heilab_expense"
#     DB_URL = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)
# else:
#     DB_URL = os.environ.get("DATABASE_URL")

# app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
# db = SQLAlchemy(app)