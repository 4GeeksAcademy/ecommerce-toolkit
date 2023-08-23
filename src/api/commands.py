
import click
from api.models import db, Item

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
                "visible": True
            },
            {
                "name": "Adventures in Wonderland",
                "category": "Books",
                "description": "Follow Alice's journey through a fantastical world.",
                "price": 9.99,
                "stock": 3,
                "image_url": "https://images.unsplash.com/photo-1691853533232-78d352cf6d25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMDQzMQ&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True
            },
            {
                "name": "Robot Friend Toy",
                "category": "Toys",
                "description": "A robotic toy that responds to your commands.",
                "price": 29.95,
                "stock": 11,
                "image_url": "https://images.unsplash.com/photo-1691689761201-4fe4388438b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTAyMQ&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True
            },
            {
                "name": "Musical Melodies",
                "category": "Music",
                "description": "An album filled with enchanting musical compositions.",
                "price": 8.49,
                "stock": 10,
                "image_url": "https://images.unsplash.com/photo-1691913865582-785ace732c29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTAzNA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True
            },
            {
                "name": "Secrets of the Universe",
                "category": "Books",
                "description": "Unlock the mysteries of the cosmos in this book.",
                "price": 14.99,
                "stock": 5,
                "image_url": "https://images.unsplash.com/photo-1612161689049-5d7b9ae3dce6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA0MA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True
            },
            {
                "name": "Adventure Explorer Kit",
                "category": "Toys",
                "description": "Equip your little explorer with everything they need.",
                "price": 21.95,
                "stock": 1,
                "image_url": "https://images.unsplash.com/photo-1692566755886-f1f3ed3d9182?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA2OQ&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True
            },
            {
                "name": "Rhythms of the Rainforest",
                "category": "Music",
                "description": "Immerse yourself in the exotic beats of the rainforest.",
                "price": 10.99,
                "stock": 25,
                "image_url": "https://plus.unsplash.com/premium_photo-1673264932910-7d8a6a3a46ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA2Nw&ixlib=rb-4.0.3&q=80&w=300",
                "visible": False
            },
            {
                "name": "Mind-Bending Puzzles",
                "category": "Toys",
                "description": "Challenge your brain with these intricate puzzles.",
                "price": 18.95,
                "stock": 20,
                "image_url": "https://images.unsplash.com/photo-1690812099637-803c65c8e495?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA3NA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True
            },
            {
                "name": "Art of Nature",
                "category": "Books",
                "description": "Explore the beauty of the natural world through art.",
                "price": 11.49,
                "stock": 14,
                "image_url": "https://plus.unsplash.com/premium_photo-1670793631242-4813c0dbe5ac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA2Nw&ixlib=rb-4.0.3&q=80&w=300",
                "visible": False
            },
            {
                "name": "Symphony Classics",
                "category": "Music",
                "description": "A collection of timeless classical music pieces.",
                "price": 13.99,
                "stock": 7,
                "image_url": "https://images.unsplash.com/photo-1568201402596-ececfcf0ce4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjgxMTA4NA&ixlib=rb-4.0.3&q=80&w=300",
                "visible": True
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
            db.session.add(new_item)
            db.session.commit()
            print("Item: ", new_item.name, " created.")
