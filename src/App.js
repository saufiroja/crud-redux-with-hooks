import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateComp, UpdateComp, ReadComp } from './Components';

import { Home } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/create" element={<CreateComp />} />
        <Route exact path="/update" element={<UpdateComp />} />
        <Route exact path="/read" element={<ReadComp />} />
      </Routes>
    </Router>
  );
};

export default App;
