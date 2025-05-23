import { Candidate } from '../interfaces/Candidate.interface';

const STORAGE_KEY = 'savedCandidates';

export function getSavedCandidates(): Candidate[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCandidate(candidate: Candidate) {
  const current = getSavedCandidates();
  // Prevent duplicates
  if (!current.some(c => c.login === candidate.login)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, candidate]));
  }
}

export function removeCandidate(login: string) {
  const current = getSavedCandidates();
  const updated = current.filter(c => c.login !== login);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}