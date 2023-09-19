// importing fependencies
import './index.css';
import { BrowserRouter ,Routes , Route} from 'react-router-dom';


// calling component
import Login from "./Component/Pages/Login Page/Login.jsx"
import SignUp from './Component/Pages/Login Page/SignUp';


function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route exact path='/' element={ <Login/>}/>
           <Route  exact path='/signUp' element={ <SignUp/>}/>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
