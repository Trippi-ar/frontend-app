import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Loggin from './components/Loggin';
import Header from './components/commons/Header';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loggin" element={<Loggin />}></Route>
      </Routes>
    </Router>




  );
}

export default App;
