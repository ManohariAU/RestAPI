import React, { Component } from 'react'

import LibService from './libService';
import { Link } from 'react-router-dom';

class ListBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                books: []
        }
        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(id){
        LibService.deleteBook(id).then(res => {
            this.setState({books: this.state.books.filter(book=> book.id !== id)});
        });
    }
    viewBook(id){
        this.props.history.push("/view-book/${id}");
    }
    editBook(id){
        this.props.history.push("/add-book/${id}");
    }

    componentDidMount(){
        LibService.getBook().then((res) => {
            this.setState({ books: res.data});
        });
    }

    addBook(){
        this.props.history.push("/add_book");
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Books List</h2>
                 <div className = "row">
                    <Link to="/add_book"> Add Book</Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered" >

                            <thead>
                                <tr>
                                    <th>   Book Title</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Number of Pages</th>
                                    <th>Publisher</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.books.map(
                                        book => 
                                        <tr key = {book.id}>
                                             <td> {book.bookTitle} </td>   
                                             <td> {book.authorName}</td>
                                             <td> {book.category}</td>
                            
                                             <td>{book.noOfPages}</td>
                                             <td>{book.publisher}</td>
                                             <td>
                                                
                                                <button> <Link to="/update_book">Update</Link></button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBook(book.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
            
        )    
    }
}

export default ListBookComponent


// import React, { Component } from 'react'
// import CartService from '../CartService'

// class ViewProduct extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 products: []
//         }
//         this.addProduct = this.addProduct.bind(this);
//         this.editProduct = this.editProduct.bind(this);
//         this.deleteProduct = this.deleteProduct.bind(this);
//     }

//     deleteProduct(productId){
//         CartService.deleteProduct(productId).then( res => {
//             this.setState({products: this.state.products.filter(product => product.productId !== productId)});
//         });
//     }
//     viewProduct(productId){
//         this.props.history.push("/view-product/${productId}");
//     }
//     editProduct(productId){
//         this.props.history.push("/add-product/${productId}");
//     }

//     componentDidMount(){
//         CartService.getProducts().then((res) => {
//             this.setState({ products: res.data});
//         });
//     }

//     addProduct(){
//         this.props.history.push('/add-product/_add');
//     }

//     render() {
//         return (
//             // <div>
//             //      <h2 className="text-center">Products List</h2>
//             //      <div className = "row">
//             //         <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
//             //      </div>
//             //      <br></br>
//             //      <div className = "row">
//             //             <table className = "table table-striped table-bordered">

//             //                 <thead>
//             //                     <tr>
//             //                         <th> Product Id</th>
//             //                         <th> Product Name</th>
//             //                         <th> Category</th>
//             //                         <th> Brand</th>
//             //                         <th> Quantity</th>
//             //                         <th> Price</th>
//             //                         <th> Actions</th>
//             //                     </tr>
//             //                 </thead>
//             //                 <tbody>
//             //                     {
//             //                         this.state.products.map(
//             //                             product => 
//             //                             <tr key = {product.productId}>
//             //                                  <td> { product.productName} </td>   
//             //                                  <td> {product.category}</td>
//             //                                  <td> {product.brand}</td>
//             //                                  <td> {product.quantity}</td>
//             //                                  <td> {product.price}</td>
//             //                                  <td>
//             //                                      <button onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button>
//             //                                      <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
//             //                                      <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info">View </button>
//             //                                  </td>
//             //                             </tr>
//             //                         )
//             //                     }
//             //                 </tbody>
//             //             </table>

//             //      </div>

//             // </div>

//             <div><h2>Hiii</h2></div>
           
//         )
//     }
// }

// export default ViewProduct