"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Item, Costumer, ShoppingCartItem, WishlistItem, TodoList
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
    from app import bcrypt
    body = request.get_json()
    password_hash = bcrypt.generate_password_hash(
        body["password"]).decode("utf-8")
    new_costumer = Costumer(name=body["name"], email=body["email"],
                            password=password_hash, is_admin=False)
    db.session.add(new_costumer)
    db.session.commit()
    print(body)
    return jsonify("The new costumer was added"), 200


@api.route('/costumers', methods=['GET'])
def handle_costumers():
    costumers = Costumer.query.all()
    costumers = list(map(lambda x: x.serialize(), costumers))
    return jsonify(costumers), 200


@api.route('/costumer/<int:id>', methods=['GET'])
def handle_costumer(id):
    costumer = Costumer.query.get(id)
    return jsonify(costumer.serialize()), 200


@api.route('/costumeradmin/<int:id>', methods=['PUT'])
def handle_costumer_admin(id):
    costumer = Costumer.query.get(id)
    costumer.is_admin = True
    db.session.commit()
    return jsonify("The costumer was updated"), 200


@api.route('/signin', methods=['POST'])
def handle_signin():
    from app import bcrypt
    body = request.get_json()
    costumer = Costumer.query.filter_by(email=body["email"]).first()
    if costumer is None:
        return jsonify("The email doesn't exist"), 400
    if bcrypt.check_password_hash(costumer.password, body["password"]):
        return jsonify(costumer.serialize()), 200
    else:
        return jsonify("The password is incorrect"), 400


@api.route('/newitem', methods=['POST'])
def handle_newitem():
    body = request.get_json()
    new_item = Item(name=body["name"], category=body["category"], description=body["description"],
                    price=body["price"], stock=body["stock"], image_url=body["imageUrl"], visible=body["isVisible"], sale_price=body["salePrice"])
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
    item.sale_price = body["salePrice"]
    db.session.commit()
    return jsonify("The item was updated"), 200


@api.route('/addcartitem', methods=['POST'])
def handle_add_cart_item():
    body = request.get_json()
    new_cart_item = ShoppingCartItem(
        costumer_id=body["costumerId"], item_id=body["itemId"], quantity=body["quantity"])
    db.session.add(new_cart_item)
    db.session.commit()
    return jsonify("The new item was added to the shopping cart"), 200


@api.route('/checkcartitem', methods=['POST'])
def handle_check_cart_item():
    body = request.get_json()
    cart_item = ShoppingCartItem.query.filter_by(
        costumer_id=body["costumerId"], item_id=body["itemId"]).first()
    if cart_item is None:
        return jsonify(False), 200
    return jsonify(cart_item.serialize()), 200


@api.route('/updatecartitem', methods=['PUT'])
def handle_update_cart_item():
    body = request.get_json()
    cart_item = ShoppingCartItem.query.filter_by(
        costumer_id=body["costumerId"], item_id=body["itemId"]).first()
    cart_item.quantity = body["quantity"]
    db.session.commit()
    return jsonify("The item was updated"), 200


@api.route('/removecartitem', methods=['PUT'])
def handle_remove_cart_item():
    body = request.get_json()
    item_id = body["itemId"]
    costumer_id = body["costumerId"]
    cart_item = ShoppingCartItem.query.filter_by(
        item_id=item_id, costumer_id=costumer_id).first()
    db.session.delete(cart_item)
    db.session.commit()
    return jsonify("The item was removed from the shopping cart"), 200


@api.route('/getcart/<int:id>', methods=['GET'])
def handle_get_cart(id):
    cart = ShoppingCartItem.query.filter_by(costumer_id=id).all()
    cart = list(map(lambda x: x.serialize(), cart))
    return jsonify(cart), 200


@api.route('/addwishlist', methods=['POST'])
def handle_add_wishlist():
    body = request.get_json()
    new_wishlist_item = WishlistItem(
        costumer_id=body["costumerId"], item_id=body["itemId"])
    db.session.add(new_wishlist_item)
    db.session.commit()
    return jsonify("The new item was added to the wishlist"), 200


@api.route('/getwishlist/<int:id>', methods=['GET'])
def handle_get_wishlist(id):
    wishlist = WishlistItem.query.filter_by(costumer_id=id).all()
    wishlist = list(map(lambda x: x.serialize(), wishlist))
    return jsonify(wishlist), 200


@api.route('/removewishlisitem', methods=['DELETE'])
def handle_remove_wishlist_item():
    body = request.get_json()
    item_id = body["itemId"]
    costumer_id = body["costumerId"]
    wishlist_item = WishlistItem.query.filter_by(
        item_id=item_id, costumer_id=costumer_id).first()
    db.session.delete(wishlist_item)
    db.session.commit()
    return jsonify("The item was removed from the wishlist"), 200


@api.route('/newtodo', methods=['POST'])
def handle_new_todo():
    body = request.get_json()
    new_todo = TodoList(category=body["category"], task=body["task"],
                        costumer_id=body["costumerId"], item_id=body["itemId"], done=False)
    db.session.add(new_todo)
    db.session.commit()
    return jsonify("The new todo was added"), 200
