import React from 'react';
import LibService from './libService';
import { Component } from 'react';
import axios from 'axios';

class CreateBookComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            //id: this.props.match.params.id,
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
        this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
    }

        


        componentDidMount(){

            if(this.state.id === '_add'){
                return
            }else{
                LibService.getBookById(this.state.id).then( (res) =>{
                    let book = res.data;
                    this.setState({
                        bookTitle: book.bookTitle,
                        authorName: book.authorName,
                        category: book.category,
                        noOfPages: book.noOfPages,
                        publisher: book.publisher
                    });
                });
            }        
        }
        saveOrUpdateBook = (b) => {
            b.preventDefault();
            let book = {bookTitle: this.state.bookTitle, authorName: this.state.authorName, category: this.state.category,noOfPages: this.state.noOfPages, publisher: this.state.publisher};
            console.log('book => ' + JSON.stringify(book));
            axios.post('http://127.0.0.1:8080/api/anime', book);
            alert("Added");

            if(this.state.id === '_add'){
                LibService.createBook(book).then(res =>{
                    this.props.history.push('/book');
                });
            }else{
                LibService.updateBook(book, this.state.id).then( res => {
                    this.props.history.push('/book');
                });
            }
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

            getTitle() {
                if(this.state.id === '_add'){
                    return <h3 className="text-center">Add Book</h3>
                }else{
                    return <h3 className="text-center">Update Book</h3>
                }
            }

            render() {
                return (
                    <div>
                        <br></br>
                           <div className = "container">
                                <div className = "row">
                                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                                        {
                                            this.getTitle()
                                        }
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
                                                <br></br><br></br>
                                                <button className="btn btn-success" onClick={this.saveOrUpdateBook}>Save</button>
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
export default CreateBookComponent