"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Item
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/newitem', methods=['POST'])
def handle_newitem():
    body = request.get_json()
    new_item = Item(name=body["name"], category=body["category"], description=body["description"], price=body["price"], stock=body["stock"], image_url=body["imageUrl"], visible=body["isVisible"])
    db.session.add(new_item)
    db.session.commit()
    print(body)
    return jsonify("The new item was added"), 200