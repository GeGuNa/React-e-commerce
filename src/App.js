import './App.css';
import { Kmain, Kmain2 } from './components/main.js' 
import { Routes, Route, Link} from 'react-router';


function App() {
  return (<>
    <Routes>
		<Route index path="/" element={<Kmain />}/>
		<Route index path="/ind2" element={<Kmain2 />}/>
    </Routes>
  </>);
}

export default App;
