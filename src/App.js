import './App.css';
import logo from './logo.svg';
import ListBookComponent from './listBookComponent';
import CreateBookComponent from './addbook';
import ViewBookComponent from './view';
import UpdateBookComponent from './updatebook';
import {Routes,Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
                          <Route path = "/" element = {<ListBookComponent/>}></Route>
                          <Route path = "/add_book" element = {<CreateBookComponent/>}></Route>
                          <Route path = "/view-book/:id" element = {<ViewBookComponent/>}></Route>
                          <Route path = "/update_book" element = {<UpdateBookComponent/>}></Route> 
      
        </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
