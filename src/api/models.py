from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    category = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, unique=True, nullable=False)
    price = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(240), nullable=False)
    visible = db.Column(db.Boolean, nullable=False)
    sales = db.relationship('SaleItem', backref='item', lazy=True)
    wishlist = db.relationship('WishlistItem', backref='item', lazy=True)
    shopping_cart = db.relationship(
        'ShoppingCartItem', backref='item', lazy=True)
    todo_list = db.relationship('TodoList', backref='item', lazy=True)
    sale_price = db.Column(db.Float, nullable=True, default=None)

    def __repr__(self):
        return f'<Model {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "description": self.description,
            "price": self.price,
            "sale_price": self.sale_price,
            "stock": self.stock,
            "image_url": self.image_url,
            "visible": self.visible
        }


class Costumer(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    sales = db.relationship('Sale', backref='costumer', lazy=True)
    wishlist = db.relationship('WishlistItem', backref='costumer', lazy=True)
    shopping_cart = db.relationship(
        'ShoppingCartItem', backref='costumer', lazy=True)
    is_admin = db.Column(db.Boolean, nullable=False)
    todo_list = db.relationship('TodoList', backref='costumer', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "is_admin": self.is_admin
            # do not serialize the password, its a security breach
        }


class Sale(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    costumer_id = db.Column(db.Integer, db.ForeignKey(
        'costumer.id'), nullable=False)
    order_date = db.Column(db.DateTime, nullable=False)
    total = db.Column(db.Float, nullable=False)
    items = db.relationship('SaleItem', backref='sale', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "costumer_id": self.costumer_id,
            "order_date": self.order_date,
            "total": self.total
        }


class SaleItem(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    sale_id = db.Column(db.Integer, db.ForeignKey('sale.id'), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "sale_id": self.sale_id,
            "item_id": self.item_id,
        }


class WishlistItem(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    costumer_id = db.Column(db.Integer, db.ForeignKey(
        'costumer.id'), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "costumer_id": self.costumer_id,
            "item_id": self.item_id,
        }


class ShoppingCartItem(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    costumer_id = db.Column(db.Integer, db.ForeignKey(
        'costumer.id'), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "costumer_id": self.costumer_id,
            "item_id": self.item_id,
            "quantity": self.quantity
        }


class TodoList(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    category = db.Column(db.String(120), nullable=False)
    task = db.Column(db.String(120), nullable=False)
    done = db.Column(db.Boolean, nullable=False)
    costumer_id = db.Column(db.Integer, db.ForeignKey('costumer.id'))
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'))

    def __repr__(self):
        return f'<Model {self.task}>'

    def serialize(self):
        return {
            "id": self.id,
            "category": self.category,
            "task": self.task,
            "costumer_id": self.costumer_id,
            "item_id": self.item_id,
            "done": self.done
        }
