import Menu from "./Menu";
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import AboutUs from "./AboutUs";
function App () {
    return ( <>
    <Router>
        <Routes>
            <Route exact path="/" element={<Menu/>}/>
            <Route exact path="/about"element={<AboutUs/>}/>
        </Routes>
    </Router>
    </> );
}

export default App ;