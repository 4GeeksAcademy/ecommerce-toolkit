
import click
from api.models import db, Item, Costumer, ShoppingCartItem, WishlistItem

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""


def setup_commands(app):
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add

    @app.cli.command("insert-test-users")  # name of our command
    @click.argument("count")  # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")
    """

    @app.cli.command("insert-items")
    def insert_items_data():
        items = [
            {
                "name": "How to become a wolf",
                "category": "Books",
                "description": "A captivating novel about life's mysteries.",
                "price": 12.99,
                "stock": 5,
                "image_url": "https://images.unsplash.com/photo-1690274302746-dd28a19967c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMDk0Mw&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": 10.99
            },
            {
                "name": "Adventures in Wonderland",
                "category": "Books",
                "description": "Follow Alice's journey through a fantastical world.",
                "price": 9.99,
                "stock": 3,
                "image_url": "https://images.unsplash.com/photo-1691853533232-78d352cf6d25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMDQzMQ&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": 7.99
            },
            {
                "name": "Robot Friend Toy",
                "category": "Toys",
                "description": "A robotic toy that responds to your commands.",
                "price": 29.95,
                "stock": 11,
                "image_url": "https://images.unsplash.com/photo-1691689761201-4fe4388438b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTAyMQ&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": None
            },
            {
                "name": "Musical Melodies",
                "category": "Music",
                "description": "An album filled with enchanting musical compositions.",
                "price": 8.49,
                "stock": 10,
                "image_url": "https://images.unsplash.com/photo-1691913865582-785ace732c29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTAzNA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": 5.99
            },
            {
                "name": "Secrets of the Universe",
                "category": "Books",
                "description": "Unlock the mysteries of the cosmos in this book.",
                "price": 14.99,
                "stock": 5,
                "image_url": "https://images.unsplash.com/photo-1612161689049-5d7b9ae3dce6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA0MA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": None
            },
            {
                "name": "Adventure Explorer Kit",
                "category": "Toys",
                "description": "Equip your little explorer with everything they need.",
                "price": 21.95,
                "stock": 1,
                "image_url": "https://images.unsplash.com/photo-1692566755886-f1f3ed3d9182?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA2OQ&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": None
            },
            {
                "name": "Rhythms of the Rainforest",
                "category": "Music",
                "description": "Immerse yourself in the exotic beats of the rainforest.",
                "price": 10.99,
                "stock": 25,
                "image_url": "https://plus.unsplash.com/premium_photo-1673264932910-7d8a6a3a46ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA2Nw&ixlib=rb-4.0.3&q=80&w=300",
                "visible": False,
                "sale_price": 7.49
            },
            {
                "name": "Mind-Bending Puzzles",
                "category": "Toys",
                "description": "Challenge your brain with these intricate puzzles.",
                "price": 18.95,
                "stock": 20,
                "image_url": "https://images.unsplash.com/photo-1690812099637-803c65c8e495?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA3NA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": None
            },
            {
                "name": "Art of Nature",
                "category": "Books",
                "description": "Explore the beauty of the natural world through art.",
                "price": 11.49,
                "stock": 14,
                "image_url": "https://plus.unsplash.com/premium_photo-1670793631242-4813c0dbe5ac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA2Nw&ixlib=rb-4.0.3&q=80&w=300",
                "visible": False,
                "sale_price": None
            },
            {
                "name": "Symphony Classics",
                "category": "Music",
                "description": "A collection of timeless classical music pieces.",
                "price": 13.99,
                "stock": 7,
                "image_url": "https://images.unsplash.com/photo-1568201402596-ececfcf0ce4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA4NA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True,
                "sale_price": 8.99
            }]

        for item in items:
            new_item = Item()
            new_item.name = item["name"]
            new_item.category = item["category"]
            new_item.description = item["description"]
            new_item.price = item["price"]
            new_item.stock = item["stock"]
            new_item.image_url = item["image_url"]
            new_item.visible = item["visible"]
            new_item.sale_price = item["sale_price"]
            db.session.add(new_item)
            db.session.commit()
            print("Item: ", new_item.name, " created.")

    @app.cli.command("insert-costumers")
    def insert_costumers_data():
        costumers = [
            {
                "name": "John Doe",
                "email": "john@doe.com",
                "password": "$2y$10$ILsnuwcNhB9oMo4/BFKiiukjcjuvliXE4WSEfe3x2SwpdFAL3HP9q",
                "is_admin": False
            },
            {
                "name": "Jane Smith",
                "email": "jane@example.com",
                "password": "$2y$10$d1NSFyZ0T6nh6SfAvf51YuQWDY0Pge41.GbZGZYbmuqB0j4KQUZ4u",
                "is_admin": False
            },
            {
                "name": "Michael Johnson",
                "email": "michael@email.net",
                "password": "$2y$10$40E/wNQ1atMEyOYgyNQ1IOLcRIaTS4kpJ7wauKPD7/Yk0NH8F1OKK",
                "is_admin": False
            },
            {
                "name": "Emily Brown",
                "email": "emily123@gmail.com",
                "password": "$2y$10$CRG5w4azhpXvtKK5MNY3j.Dwo7/UlBGwPjd6CeZh2JJL34jUCYY8G",
                "is_admin": False
            },
            {
                "name": "Daniel Wilson",
                "email": "danielw@website.com",
                "password": "$2y$10$MeWG6GI6GPxkx6drCY2oUeYKMTWVSp6WS69sbpPH2o/7n71pmQlty",
                "is_admin": False
            },
            {
                "name": "Sophia Miller",
                "email": "sophiam@somemail.org",
                "password": "$2y$10$BxgfXbeArprYhGDqEEnXzeD7Bu8ScZecHSnGV6Q8TeMKewH.kCSKe",
                "is_admin": False
            },
            {
                "name": "Matthew Taylor",
                "email": "mattaylor@emailprovider.com",
                "password": "$2y$10$a1K7B32MKQGUwE1neLV9UeJNVCGInn825IymeF44Gaj5stx/U1.NK",
                "is_admin": False
            },
            {
                "name": "Olivia Martinez",
                "email": "oliviam@fakemail.net",
                "password": "$2y$10$HLg5gvo7fhLGcuqkrHilMOe02uGft4DqxuwN8gsZsPaP.0f56OuNO",
                "is_admin": False
            },
            {
                "name": "William Anderson",
                "email": "will.anderson@examplemail.com",
                "password": "$2y$10$VJMZB3XqBA9UmEbJAezcRejE751B17l0YjRAmx8NR4WiVntyV.tRi",
                "is_admin": False
            },
            {
                "name": "Ava Thomas",
                "email": "ava.t@example.org",
                "password": "$2y$10$VQ.BaALHLS.csT8UmaM8reC9yPbcB1wMXNdyxAny9t6CkCbFImzcm",
                "is_admin": False
            }
        ]

        for costumer in costumers:
            new_costumer = Costumer()
            new_costumer.name = costumer["name"]
            new_costumer.email = costumer["email"]
            new_costumer.password = costumer["password"]
            new_costumer.is_admin = costumer["is_admin"]
            db.session.add(new_costumer)
            db.session.commit()
            print("Costumer: ", new_costumer.name, " created.")

    @app.cli.command("insert-cart-items")
    def insert_cart_items_data():
        cart_items = [
            {"costumer_id": 1, "item_id": 1, "quantity": 1},
            {"costumer_id": 2, "item_id": 3, "quantity": 5},
            {"costumer_id": 3, "item_id": 2, "quantity": 2},
            {"costumer_id": 4, "item_id": 4, "quantity": 3},
            {"costumer_id": 1, "item_id": 5, "quantity": 7},
            {"costumer_id": 2, "item_id": 6, "quantity": 1},
            {"costumer_id": 3, "item_id": 8, "quantity": 4},
            {"costumer_id": 4, "item_id": 7, "quantity": 2},
            {"costumer_id": 1, "item_id": 9, "quantity": 3},
            {"costumer_id": 2, "item_id": 1, "quantity": 2}
        ]

        for cart_item in cart_items:
            new_cart_item = ShoppingCartItem()
            new_cart_item.costumer_id = cart_item["costumer_id"]
            new_cart_item.item_id = cart_item["item_id"]
            new_cart_item.quantity = cart_item["quantity"]
            db.session.add(new_cart_item)
            db.session.commit()
            print("Cart item: ", new_cart_item.id, " created.")

    @app.cli.command("insert-wishlist-items")
    def insert_wishlist_items_data():
        wishes = [
            {"costumer_id": 1, "item_id": 1},
            {"costumer_id": 2, "item_id": 3},
            {"costumer_id": 3, "item_id": 2},
            {"costumer_id": 4, "item_id": 4},
            {"costumer_id": 1, "item_id": 5},
            {"costumer_id": 2, "item_id": 6},
            {"costumer_id": 3, "item_id": 8},
            {"costumer_id": 4, "item_id": 7},
            {"costumer_id": 1, "item_id": 9},
            {"costumer_id": 2, "item_id": 1}
        ]

        for wish in wishes:
            new_wish = WishlistItem()
            new_wish.costumer_id = wish["costumer_id"]
            new_wish.item_id = wish["item_id"]
            db.session.add(new_wish)
            db.session.commit()
            print("Wish: ", new_wish.id, " created.")
