import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// page
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Intro from './pages/Intro';
import Information from './pages/Information';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Intro />} />
          <Route path="information" element={<Information />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;