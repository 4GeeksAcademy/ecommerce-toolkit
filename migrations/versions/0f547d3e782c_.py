"""empty message

Revision ID: 0f547d3e782c
Revises: 8b833f43ceb0
Create Date: 2023-09-02 00:46:12.072178

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0f547d3e782c'
down_revision = '8b833f43ceb0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sale_item', schema=None) as batch_op:
        batch_op.add_column(sa.Column('quantity', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sale_item', schema=None) as batch_op:
        batch_op.drop_column('quantity')

    # ### end Alembic commands ###
