import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<CandidateSearch />} />
    <Route path="/saved" element={<SavedCandidates />} />
  </Routes>
);

export default App;