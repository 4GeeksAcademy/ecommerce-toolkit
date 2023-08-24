
import os
from flask_admin import Admin
from .models import db, Item, Costumer, Sale, SaleItem, WishlistItem, ShoppingCartItem, TodoList
from flask_admin.contrib.sqla import ModelView


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(Item, db.session))
    admin.add_view(ModelView(Costumer, db.session))
    admin.add_view(ModelView(Sale, db.session))
    admin.add_view(ModelView(SaleItem, db.session))
    admin.add_view(ModelView(WishlistItem, db.session))
    admin.add_view(ModelView(ShoppingCartItem, db.session))
    admin.add_view(ModelView(TodoList, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
