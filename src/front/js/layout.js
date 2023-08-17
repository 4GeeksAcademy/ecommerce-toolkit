import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Signin } from "./pages/signin.jsx";
import { CreateAccount } from "./pages/createAccount.jsx";

import { CreateItem } from "./pages/adminPages/itemWizard.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<h1>This is category</h1>} path="/category" />
                        <Route element={<h1>This is wishlist</h1>} path="/wishlist" />
                        <Route element={<h1>This is search</h1>} path="/search" />
                        <Route element={<Signin />} path="/signin" />
                        <Route element={<h1>This is Sign Out</h1>} path="/signout" />
                        <Route element={<h1>This is shopingcart</h1>} path="/cart" />
                        <Route element={<CreateAccount />} path="/createaccount" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<CreateItem />} path="admin/item/wizard" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
