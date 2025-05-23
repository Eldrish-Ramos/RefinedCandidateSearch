import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { getSavedCandidates, removeCandidate } from '../utils/localStorage';
import CandidateCard from '../components/CandidateCard';
import { Link } from 'react-router-dom';

const SavedCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    setCandidates(getSavedCandidates());
  }, []);

  const handleRemove = (login: string) => {
    removeCandidate(login);
    setCandidates(getSavedCandidates());
  };

  return (
    <div>
      <h2>Potential Candidates</h2>
      {candidates.length === 0 ? (
        <div>No candidates have been accepted.</div>
      ) : (
        candidates.map(candidate => (
          <CandidateCard
            key={candidate.login}
            candidate={candidate}
            actions={
              <button onClick={() => handleRemove(candidate.login)}>
                Remove
              </button>
            }
          />
        ))
      )}
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default SavedCandidates;