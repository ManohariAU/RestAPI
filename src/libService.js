import axios from 'axios';

const LIBRARY_API_BASE_URL = "http://localhost:8080/book";

class LibService {

    getBook(){
        return axios.get(LIBRARY_API_BASE_URL);
    }

    createBook(book){
        return axios.post(LIBRARY_API_BASE_URL, book);
    }

    getBookById(id){
        return axios.get(LIBRARY_API_BASE_URL + '/' + id);
    }

    updateBook(book, id){
        return axios.put(LIBRARY_API_BASE_URL + '/' + id, book);
    }

    deleteBook(id){
        return axios.delete(LIBRARY_API_BASE_URL + '/' + id);
    }
}

export default new LibService()