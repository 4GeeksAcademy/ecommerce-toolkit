"""empty message

Revision ID: 9d1c5af713d3
Revises: 1f75bea403dd
Create Date: 2023-08-25 22:36:33.910232

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9d1c5af713d3'
down_revision = '1f75bea403dd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('shopping_cart_item', schema=None) as batch_op:
        batch_op.add_column(sa.Column('quantity', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('shopping_cart_item', schema=None) as batch_op:
        batch_op.drop_column('quantity')

    # ### end Alembic commands ###