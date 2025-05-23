import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CandidateSearch />} />
      <Route path="/saved" element={<SavedCandidates />} />
    </Routes>
  </Router>
);

export default App;