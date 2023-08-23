"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Item, Costumer
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/newcostumer', methods=['POST'])
def handle_newcostumer():
    body = request.get_json()
    new_costumer = Costumer(name=body["name"], email=body["email"],
                            password=body["password"], is_admin=False)
    db.session.add(new_costumer)
    db.session.commit()
    print(body)
    return jsonify("The new costumer was added"), 200


@api.route('/newitem', methods=['POST'])
def handle_newitem():
    body = request.get_json()
    new_item = Item(name=body["name"], category=body["category"], description=body["description"],
                    price=body["price"], stock=body["stock"], image_url=body["imageUrl"], visible=body["isVisible"])
    db.session.add(new_item)
    db.session.commit()
    print(body)
    return jsonify("The new item was added"), 200


@api.route('/items', methods=['GET'])
def handle_items():
    items = Item.query.all()
    items = list(map(lambda x: x.serialize(), items))
    return jsonify(items), 200


@api.route('/item/<int:id>', methods=['GET'])
def handle_item(id):
    item = Item.query.get(id)
    return jsonify(item.serialize()), 200


@api.route('/item/<int:id>', methods=['PUT'])
def handle_update_item(id):
    body = request.get_json()
    item = Item.query.get(id)
    item.name = body["name"]
    item.category = body["category"]
    item.description = body["description"]
    item.price = body["price"]
    item.stock = body["stock"]
    item.visible = body["isVisible"]
    db.session.commit()
    return jsonify("The item was updated"), 200
