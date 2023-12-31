# WebApp boilerplate with React JS and Flask API

- Sitemap https://www.figma.com/file/UPpkjl40sF54ywNMUQDHLM/Store-Toolkit?type=whiteboard&node-id=1%3A2312&t=RvXAaWZSrfVKSCw5-1
- Views https://balsamiq.cloud/sxioahp/ppf5ird/r936C
- Database Schema https://dbdiagram.io/d/64dd6ca902bd1c4a5ee75c9b

API Routes
- '/newcostumer', method: POST, body: customer info, action: create new costumer
- '/costumers', method: GET, action: get list of all costumers
- '/costumeradmin/id', method: PUT, action: change admin status to 'True'
- '/signin', method:POST, body: email & password, action: check if info is correct to sign in
- '/newitem', method: POST, body: item info, action: create new item
- '/items', method: GET, action: get list of all items
- '/item/item_id', method: GET, action: get specific item by id
- '/item/item_id', method: PUT, body: item info, action: modify item
- '/addcartitem', method: POST, body: item and costumer info, action: creates a cart item
- '/checkcartitem', methods: POST, body: costumerId & itemId, action: find if item is already in cart
- '/updatecartitem', methods: PUT, body: cart item information, action: changes the quantity value
- '/removecartitem', methods: PUT, body: cart item information, action: removes cart item
- '/getcart/id', methods: GET, action: get list of cart items associated with user id
- '/addwishlist', methods: POST, body: wishlist item information, action: creates wishlist item
- '/getwishlist/id', methods: GET, action: get list of wishlist items associated with user id
- '/removewishlisitem', methods: DELETE, body: wishlist item information, action: deletes wishlist item
- '/todos', methods: GET, action: get list of all todos
- '/newtodo', methods: POST, body: todo information, action: creates a todo
- '/updatetodo/id', methods: PUT, action: changes todo status
- '/newsale', methods: POST, body: sale infomation, action: create new sale and sale items
- '/sales', methods: GET, action: get list of all sales
- '/sale/sale_id', methods: GET, action: get specific sale information and sale items linked
- '/clearcart/user_id', method: POST, body: sold items, action: removes sold items from cart
- '/reducestock', method: POST, body: sold items, action: reduces sold items stock
- '/clearwishlist/user_id', method: POST, body: sold items, action: removes sold items from wishlist

Flask commands
- "flask insert-items", action: inserts predefined items
- "flask insert-costumers", action: inserts predefined costumers
- "flask insert-cart-items", action: inserts predefined cart items
- "flask insert-wishlist-items", action: inserts predefined wishlist items
- "flask insert-todos", action: inserts predefined todos
- "flask insert-sales", action: inserts predefined sales

Build web applications using React.js for the front end and python/flask for your backend API.

- Documentation can be found here: https://start.4geeksacademy.com/starters/react-flask
- Here is a video on [how to use this template](https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b)
- Integrated with Pipenv for package managing.
- Fast deployment to heroku [in just a few steps here](https://start.4geeksacademy.com/backend/deploy-heroku-posgres).
- Use of .env file.
- SQLAlchemy integration for database abstraction.

### 1) Installation:

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node 

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

### Undo a migration

You are also able to undo a migration by running

```sh
$ pipenv run downgrade
```

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

### **Important note for the database and the data inside it**

Every Github codespace environment will have **its own database**, so if you're working with more people eveyone will have a different database and different records inside it. This data **will be lost**, so don't spend too much time manually creating records for testing, instead, you can automate adding records to your database by editing ```commands.py``` file inside ```/src/api``` folder. Edit line 32 function ```insert_test_data``` to insert the data according to your model (use the function ```insert_test_users``` above as an example). Then, all you need to do is run ```pipenv run insert-test-data```.

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% read to deploy with Render.com and Heroku in a matter of minutes. Please read the [official documentation about it](https://start.4geeksacademy.com/deploy).

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
