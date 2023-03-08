import React from 'react';
import LibService from './libService';
import { Component } from 'react';
class ViewBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        LibService.getBookById(this.state.id).then( res => {
            this.setState({book: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Book Title: </label>
                            <div> { this.state.book.bookTitle}</div>
                        </div>
                        <div className = "row">
                            <label> Author Name: </label>
                            <div> { this.state.book.authorName }</div>
                        </div>
                        <div className = "row">
                            <label> Category: </label>
                            <div> { this.state.book.category }</div>
                        </div>
                        <div className = "row">
                            <label> Available: </label>
                            <div> { this.state.book.available }</div>
                        </div>
                        <div className = "row">
                            <label> Number of Pages: </label>
                            <div> { this.state.book.noOfPages }</div>
                        </div>
                        <div className = "row">
                            <label> Publisher: </label>
                            <div> { this.state.book.publisher }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBookComponent