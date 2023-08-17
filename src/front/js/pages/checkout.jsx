import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
      // TODO: Handle form submission
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row gx-5">
                    <div className="col-md-7">
                        <div className="row mb-4"> 
                            <h4 className="mt-3">Delivery Information</h4>                                              
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label"> Name: </label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label"> Last Name: </label>
                                        <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label"> Movile Number: </label>
                                        <input type="text" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label"> Address: </label>
                                        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="form-label"> Country: </label>
                                        <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} />
                                    </div>
                                    <div className="col-md-5">
                                        <label className="form-label"> City: </label>
                                        <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label"> ZIP: </label>
                                        <input type="text" className="form-control" value={zip} onChange={(e) => setZip(e.target.value)} />
                                    </div>
                                </div>                                                   
                            </div>                            
                        </div>  
                        <hr className="mt-0 line"></hr> 
                        <div className="row mb-3"> 
                            <h4 className="mt-3">Payment Detail</h4>                                              
                            <div>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label"> Email: </label>
                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label"> Card Number: </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-credit-card"></i></span>
                                            <input type="text" className="form-control" value={cardNumber} placeholder="0000 0000 0000 0000" onChange={(e) => setCardNumber(e.target.value)} />
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label"> Expiry Date: </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                            <input type="text" className="form-control" value={date} placeholder="MM/YY" onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label"> CVV: </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                            <input type="text" className="form-control" value={cvv} placeholder="000" onChange={(e) => setCvv(e.target.value)} />
                                        </div>
                                    </div>
                                    
                                </div>                                                   
                            </div>
                        </div> 
                        
                    </div>
                    <div className="col-md-5">
                        <h4 className="mt-3">Order Summary</h4> 
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="img-fluid" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg"/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="col-xs-12">Product name</div>
                                        <div className="col-xs-12 text-secondary"><h6><span>$</span>00.00</h6></div>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <h6><span>$</span>25.00</h6>
                                    </div>   
                                    <div className="col-sm-3">
                                    <i class="fa-solid fa-trash fa-xl"></i>
                                    </div>   
                                </div>                                                
                            </div>
                            
                           
                        </div>
                    </div>
                </div>  
                <div className="container d-flex justify-content-center mb-3">
                                <button type="submit" className="btn bg-primary-subtle">Create account</button>
                </div>    
            </form>
            
          
        </div>

    );
};