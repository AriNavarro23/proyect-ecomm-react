import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { categories } from "./asyncmock";

function App() {

  return (
    <BrowserRouter className="App">
        <NavBar categories={categories}/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
