// components/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// Sinov uchun klinikalar ro'yxati
const clinics = [
  { id: 1, name: 'GMT Clinic Moscow', location: 'Moscow, Russia', description: 'Specialized in medical treatments.' },
  { id: 2, name: 'GMT Clinic Saint Petersburg', location: 'Saint Petersburg, Russia', description: 'Offering a range of healthcare services.' },
  { id: 3, name: 'GMT Clinic Novosibirsk', location: 'Novosibirsk, Russia', description: 'Known for its advanced medical facilities.' },
];

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get("q").toLowerCase();

  const filteredClinics = clinics.filter(clinic => 
    clinic.name.toLowerCase().includes(searchQuery) || 
    clinic.location.toLowerCase().includes(searchQuery) ||
    clinic.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <h1>Search Results for: {searchQuery}</h1>
      {filteredClinics.length > 0 ? (
        <ul>
          {filteredClinics.map(clinic => (
            <li key={clinic.id}>
              <h2>{clinic.name}</h2>
              <p>{clinic.location}</p>
              <p>{clinic.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default SearchResults;
