import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { AuthProvider } from "./component/authProvider";
import { Signin } from "./pages/signin.jsx";
import { CreateAccount } from "./pages/createAccount.jsx";
import { Checkout } from "./pages/checkout.jsx";
import { AdminAuthProvider } from "./component/adminAuthProvider";
import { ItemList } from "./pages/adminPages/itemList.jsx";
import { CostumersList } from "./pages/adminPages/costumersList.jsx";
import { CreateItem } from "./pages/adminPages/itemWizard.jsx";
import { ModifyItem } from "./pages/adminPages/modifyWizard.jsx";
import { CreateUser } from "./pages/adminPages/userWizard.jsx";
import { Cart } from "./pages/cart.jsx";
import { Wishlist } from "./pages/wishlist.jsx";
import { Product } from "./pages/product.jsx";
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { AdminNavtabs } from "./component/adminNavtabs.jsx";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    const { store, actions } = useContext(Context);
    const [user, setUser] = useState(store.user);
    const [admin, setAdmin] = useState(store.admin);
    console.log(user);

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Product />} path="/product/:itemId" />
                        <Route element={<h1>This is category</h1>} path="/category" />
                        <Route element={<h1>This is search</h1>} path="/search" />
                        <Route element={<Signin />} path="/signin" />
                        <Route element={<CreateAccount />} path="/createaccount" />

                        <Route element={<AuthProvider> <Wishlist /> </AuthProvider>} path="/wishlist" />
                        <Route element={<AuthProvider> <Cart /> </AuthProvider>} path="/cart" />
                        <Route element={<AuthProvider> <Checkout /> </AuthProvider>} path="/checkout" />

                        <Route element={<h1>Not found!</h1>} />

                        <Route path="/admin/" element={<AdminAuthProvider> <AdminNavtabs /> <Outlet /> </AdminAuthProvider>}>
                            <Route element={<ItemList />} path="item" />
                            <Route element={<CreateItem />} path="item/wizard" />
                            <Route element={<ModifyItem />} path="item/modify/:itemId" />
                            <Route element={<CostumersList />} path="costumers" />
                            <Route element={<CreateUser />} path="costumers/wizard" />
                            <Route element={<h1>This is the sales module</h1>} path="sales" />
                            <Route element={<h1>This is the todo module</h1>} path="todo" />
                        </Route>

                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
