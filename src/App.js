import { Routes, Route, Link} from 'react-router'
import { Main } from './components/main.js' 
import { Category } from './components/category.js' 
import { Login } from './components/sign.js' 
import './assets/css/bootstrap-5.3.3/dist/css/bootstrap.css';
import './assets/css/all.css';


export default function App() {
  return (<>
    <Routes>
		<Route index path="/" element={<Main />}/>
		<Route path="/categories" element={<Category />}/>
		<Route path="/login" element={<Login />}/>
	
	{/*	<Route path="/register" element={<Register />}/>
		<Route path="/basket" element={<Basket />}/>
		<Route path="/buy" element={<Buy />}/>
		<Route path="/contact" element={<Contact />}/>
		<Route path="/about" element={<About_us />}/>
		<Route path="/product/:id" element={<Product_us />}/> */}
    </Routes>
  </>);
}


