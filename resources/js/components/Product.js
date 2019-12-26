import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Product extends Component {
    constructor() {
        super();
        //Initialize the state in the constructor
        this.state = {
            products: []
        };
    }

    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        fetch("/api/products")
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ products });
            });
    }
    renderProducts() {
        return this.state.products.map(product => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                 
                <li key={product.id}>{product.title}</li>*/
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Projects</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/dashboard">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Projects
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        {/* Default box */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Projects</h3>
                                <div className="card-tools">
                                    <button
                                        type="button"
                                        className="btn btn-tool"
                                        data-card-widget="collapse"
                                        data-toggle="tooltip"
                                        title="Collapse"
                                    >
                                        <i className="fas fa-minus" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped projects">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "5%" }}>#</th>
                                            <th style={{ width: "25%" }}>
                                                Title
                                            </th>
                                            <th style={{ width: "50%" }}>
                                                Description
                                            </th>
                                            <th style={{ width: "20%" }}>
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>{this.renderProducts()}</tbody>
                                </table>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
        );
    }
}

export default Product;
