import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface Props {
  candidate: Candidate;
  actions?: React.ReactNode;
}

const CandidateCard: React.FC<Props> = ({ candidate, actions }) => (
  <div className="candidate-card">
    <img src={candidate.avatar_url} alt={candidate.login} width={80} />
    <div>
      <h3>{candidate.name || candidate.login}</h3>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
      <p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </p>
      {actions}
    </div>
  </div>
);

export default CandidateCard;