import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SaleDetails = () => {
    const [sale, setSale] = useState();
    const [saleItems, setSaleItems] = useState();
    const [items, setItems] = useState();
    const saleId = useParams().saleId.substring(1);

    useEffect(() => {
        fetchSale();
        fetchItems();
    }, []);

    const fetchSale = async () => {
        let url = process.env.BACKEND_URL + "api/sale/" + saleId;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setSale(data.sale);
                setSaleItems(data.saleItems);
            });
    };

    const fetchItems = async () => {
        let url = process.env.BACKEND_URL + "api/items";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setItems(data);
            });
    };

    const renderSaleItems = () => {
        console.log("saleItems", saleItems);
        console.log("items", items);
        if (!saleItems || !items) {
            return null;
        }

        return (
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Product ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit price</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {saleItems.map((saleItem) => {
                                const itemName = items.find((item) => item.id === saleItem.item_id).name;
                                return (
                                    <tr key={saleItem.id}>
                                        <th scope="row">{saleItem.item_id}</th>
                                        <td>{itemName}</td>
                                        <td>{saleItem.quantity}</td>
                                        <td>$ {saleItem.final_price}</td>
                                        <td>$ {Math.round(saleItem.quantity * saleItem.final_price * 100) / 100}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };

    const renderSale = () => {
        console.log(sale);
        if (!sale) {
            return null;
        }

        return (
            <div className="row">
                <div className="col-12">
                    <p><strong>Sale ID:</strong> {sale.id}</p>
                    <p><strong>Costumer ID:</strong> {sale.costumer_id}</p>
                    <p><strong>Date:</strong> {sale.order_date}</p>
                    <p><strong>Total:</strong> $ {sale.total}</p>
                </div>
            </div>
        )
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2 className="mt-3">Sale details</h2>
                    {renderSale()}
                </div>
                <div className="col-8">
                    <h2 className="mt-3">Sale items</h2>
                    {renderSaleItems()}
                </div>
            </div>
        </div>
    );
};

