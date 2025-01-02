import { useState } from 'react'
import './App.css'
import Home from './pages/Home/home'
import Navbar from './components/Navbar/navbar'
import Shop from './pages/shopping/shop'
import Checkout from './pages/checkout/checkout'
import usefetch from './fetchHook';
import Wishlist from './pages/wishlist/wishlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {

    const [wishlist, setWishlist] = useState(new Set());
    const [quantities, setQuantities] = useState({});
    const {data:products, loading, error}= usefetch('https://dummyjson.com/products/category/mens-shoes?select=title,price,brand,thumbnail');
    const shopBag = products?.products?.filter((product) => quantities[product.id] > 0) || [];

    const wishBag = products?.products?.filter((product) => wishlist.has(product.id)) || [];

    

    const updateQuantity = (id, quantity) => {
        setQuantities((quantities)=>({ ...quantities, [id]: quantity }));
    }

    const updateWishlist = (productId) => {
        setWishlist((prevWishlist) => new Set(prevWishlist).add(productId));
      };
    

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => {
          const newWishlist = new Set(prevWishlist);
          newWishlist.delete(productId);
          return newWishlist;
        });
      };


      const wishlistCount = wishBag.length;
      const shopbagCount = shopBag.length;

    return(
        <>
        <Router>

        <Navbar wishlistCount={wishlistCount} shopbagCount={shopbagCount}/>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop products={products} loading={loading} error={error} quantities={quantities} updateQuantity={updateQuantity} updateWishlist={updateWishlist} removeFromWishlist={removeFromWishlist} wishlist={wishlist} /> } />  
          <Route path='/wishlist' element={<Wishlist wishBag={wishBag} updateWishlist={updateWishlist} removeFromWishlist={removeFromWishlist} quantities={quantities} updateQuantity={updateQuantity} wishlist={wishlist} />}/>   
          <Route path='/checkout' element={<Checkout shopbag={shopBag}  quantities={quantities} updateQuantity={updateQuantity} /> } />



        </Routes>


        </Router>
        </>
    )
}

export default App
