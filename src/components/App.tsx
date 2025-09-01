import { useState } from 'react'
import reactLogo from '../assets/react.svg'
// Use public assets by referencing them in the src attribute
const viteLogo = '/vite.svg';
import './App.css'
import SearchBar from './searchBar';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <h1>GeetHoob Find</h1>
        <SearchBar />

        <p className="read-the-docs">
          Find userss on GitHub and view their repositories.
        </p>
      </QueryClientProvider>
    </>
  )
}

export default App
