import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import Header from "./header";
import Menu from "./menu";
//import Content from "./content";
import Footer from "./footer";

import Dashboard from "./Dashboard";
import Product from "./Product";

export default class Example extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Menu />
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/products" component={Product} />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<Example />, document.getElementById("root"));
}
