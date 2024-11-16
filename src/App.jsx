import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/loader/Loader';
import Header from './components/header/Header';
import Work from './components/header/work/Work';
import CV from './components/header/cv/CV';
import Contact from './components/header/contact/Contact';
import './assets/style.css';
import './assets/media.css';

const App = () => {
  const [go, setGo] = useState(false);

  return (
      <Router>
        {!go ? (
          <Loader setGo={setGo} go={go}/>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Navigate to="/header" />} />
              <Route path="/header" element={<Header />}/>
              <Route path="/work" element={<Work />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </Router>
  );
};

export default App;
