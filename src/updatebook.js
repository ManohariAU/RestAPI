import React from 'react';
import LibService from './libService';
import { Component } from 'react';
import axios from 'axios';


class UpdateBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           // id: this.props.match.params.id,
            bookTitle: '',
            authorName: '',
            category: '',
            noOfPages: '',
            publisher: ''
        }
        this.changeBookTitleHandler = this.changeBookTitleHandler.bind(this);
        this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
    
        this.changeNoOfPagesHandler = this.changeNoOfPagesHandler.bind(this);
        this.changePublisherHandler = this.changePublisherHandler.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    componentDidMount(){
        LibService.getBookById(this.state.id).then( (res) =>{
            let book = res.data;
            this.setState({bookTitle: book.bookTitle,
                authorName: book.authorName,
                category: book.category,
                noOfPages: book.noOfPages,
                publisher: book.publisher
            });
        });
    }

    updateBook = (b) => {
        b.preventDefault();
        let book = {id:5,bookTitle: this.state.bookTitle, authorName: this.state.authorName, category: this.state.category, noOfPages: this.state.noOfPages, publisher: this.state.publisher};
        console.log('book => ' + JSON.stringify(book));
        console.log('id => ' + JSON.stringify(this.state.id));
        LibService.updateBook(book, this.state.id).then( res => {
            this.props.history.push('/books');
        });
        axios.put('http://127.0.0.1:8080/book', book);
        alert("Value");
    }

   

    changeBookTitleHandler= (event) => {
        this.setState({bookTitle: event.target.value});
    }
    changeAuthorNameHandler= (event) => {
        this.setState({authorName: event.target.value});
    }
    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
    
    changeNoOfPagesHandler= (event) => {
        this.setState({noOfPages: event.target.value});
    }
    changePublisherHandler= (event) => {
        this.setState({publisher: event.target.value});
    }

    cancel(){
        this.props.history.push('/books');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Books</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                    <label> Book Title: </label>
                                    <input placeholder="Book Title" name="bookTitle" className="form-control" 
                                        value={this.state.bookTitle} onChange={this.changeBookTitleHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Author name: </label>
                                    <input placeholder="Author Name" name="authorName" className="form-control" 
                                        value={this.state.authorName} onChange={this.changeAuthorNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Category: </label>
                                    <input placeholder="Category" name="category" className="form-control" 
                                        value={this.state.category} onChange={this.changeCategoryHandler}/>
                                </div>
                                
                                <div className = "form-group">
                                    <label> Number of Pages: </label>
                                    <input placeholder="pages" name="noOfPages" className="form-control" 
                                        value={this.state.noOfPages} onChange={this.changeNoOfPagesHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Publisher: </label>
                                    <input placeholder="publisher" name="publisher" className="form-control" 
                                        value={this.state.publisher} onChange={this.changePublisherHandler}/>
                                </div>


                                        <button className="btn btn-success" onClick={this.updateBook}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateBookComponent