import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SalesList = () => {
    const [sortMethod, setSortMethod] = useState("id");
    const [allSales, setAllSales] = useState([]);
    useEffect(() => {
        let url = String(process.env.BACKEND_URL + "api/sales");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                data.sort((a, b) => {
                    if (a[sortMethod] < b[sortMethod]) {
                        return -1;
                    }
                    if (a[sortMethod] > b[sortMethod]) {
                        return 1;
                    }
                    return 0;
                });
                setAllSales(data);
            })
    }, [sortMethod]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2 className="mt-3">Sales list</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setSortMethod(e.target.value)}>
                        <option defaultValue="id">Sort by ID</option>
                        <option value="costumer_id">Sort by costumer ID</option>
                        <option value="order_date">Sort by date</option>
                        <option value="total">Sort by total</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Sale ID</th>
                                <th scope="col">Costumer ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Total</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allSales.map((sale) => {
                                return (
                                    <tr key={sale.id}>
                                        <th scope="row">{sale.id}</th>
                                        <td>{sale.costumer_id}</td>
                                        <td>{sale.order_date}</td>
                                        <td>{sale.total}</td>
                                        <td>
                                            <Link to={'/admin/sale/:' + sale.id} className="text-decoration-none">Details</Link>
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
