"""empty message

Revision ID: 1f75bea403dd
Revises: 
Create Date: 2023-08-23 19:03:27.087986

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1f75bea403dd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('costumer',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_admin', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('item',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('category', sa.String(length=120), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('stock', sa.Integer(), nullable=False),
    sa.Column('image_url', sa.String(length=240), nullable=False),
    sa.Column('visible', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('name')
    )
    op.create_table('sale',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('costumer_id', sa.Integer(), nullable=False),
    sa.Column('order_date', sa.DateTime(), nullable=False),
    sa.Column('total', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['costumer_id'], ['costumer.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_cart_item',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('costumer_id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['costumer_id'], ['costumer.id'], ),
    sa.ForeignKeyConstraint(['item_id'], ['item.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('todo_list',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('category', sa.String(length=120), nullable=False),
    sa.Column('task', sa.String(length=120), nullable=False),
    sa.Column('done', sa.Boolean(), nullable=False),
    sa.Column('costumer_id', sa.Integer(), nullable=True),
    sa.Column('item_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['costumer_id'], ['costumer.id'], ),
    sa.ForeignKeyConstraint(['item_id'], ['item.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('wishlist_item',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('costumer_id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['costumer_id'], ['costumer.id'], ),
    sa.ForeignKeyConstraint(['item_id'], ['item.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sale_item',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('sale_id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['item_id'], ['item.id'], ),
    sa.ForeignKeyConstraint(['sale_id'], ['sale.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('sale_item')
    op.drop_table('wishlist_item')
    op.drop_table('todo_list')
    op.drop_table('shopping_cart_item')
    op.drop_table('sale')
    op.drop_table('item')
    op.drop_table('costumer')
    # ### end Alembic commands ###