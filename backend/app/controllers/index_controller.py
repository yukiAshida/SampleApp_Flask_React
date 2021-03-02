from flask import Blueprint, render_template

mod_index = Blueprint('index', __name__)

@mod_index.route('/', methods=["GET","POST"])
def index():

    return "OK", 200