import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { categories } from "./asyncmock";
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <BrowserRouter className="App">
      <NavBar categories={categories} />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
