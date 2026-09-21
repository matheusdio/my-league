// Basic TypeScript contracts for My League frontend
// These are presentation-layer contracts, not domain models

export interface Sport {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  color: string; // HEX color for sport representation
}

export interface Team {
  id: string;
  name: string;
  city?: string;
  logo?: string; // URL or identifier for team logo
  sportId: string;
}

export interface Player {
  id: string;
  name: string;
  number?: number;
  position?: string;
  teamId: string;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore?: number;
  awayScore?: number;
  date: string; // ISO date string
  status: 'scheduled' | 'live' | 'finished' | 'postponed';
  sportId: string;
}

export interface Competition {
  id: string;
  name: string;
  sportId: string;
  startDate: string; // ISO date string
  endDate?: string; // ISO date string
  format: string; // e.g., 'league', 'tournament', 'knockout'
  status: 'upcoming' | 'ongoing' | 'finished';
}

export interface Standing {
  teamId: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}
