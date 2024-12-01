import { Routes, Route, Link} from 'react-router'
import { Main } from './components/main.js' 
import { Category } from './components/category.js' 
import { Login } from './components/sign.js' 


export default function App() {
  return (<>
    <Routes>
		<Route index path="/" element={<Main />}/>
		<Route path="/categories" element={<Category />}/>
		<Route path="/login" element={<Login />}/>
    </Routes>
  </>);
}


