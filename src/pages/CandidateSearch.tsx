import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { fetchNextCandidate } from '../api/API';
import { saveCandidate } from '../utils/localStorage';
import CandidateCard from '../components/CandidateCard';
import { Link } from 'react-router-dom';

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [noMore, setNoMore] = useState(false);

  const loadCandidate = async () => {
    setLoading(true);
    const next = await fetchNextCandidate();
    setCandidate(next);
    setNoMore(!next);
    setLoading(false);
  };

  useEffect(() => {
    loadCandidate();
  }, []);

  const handleAccept = () => {
    if (candidate) saveCandidate(candidate);
    loadCandidate();
  };

  const handleReject = () => {
    loadCandidate();
  };

  if (loading) return <div>Loading...</div>;
  if (noMore) return <div>No more candidates available.</div>;

  return (
    <div>
      <h2>Candidate Search</h2>
      {candidate && (
        <CandidateCard
          candidate={candidate}
          actions={
            <div>
              <button onClick={handleAccept}>+</button>
              <button onClick={handleReject}>-</button>
            </div>
          }
        />
      )}
      <Link to="/saved">View Potential Candidates</Link>
    </div>
  );
};

export default CandidateSearch;