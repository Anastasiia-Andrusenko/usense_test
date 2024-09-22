import React from 'react';

import css from './App.module.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('../src/pages/Home/Home'));
const CandidatePage = lazy(() => import('./pages/Сandidate/Candidate'));
const ConverterPage = lazy(() =>
  import('../src/pages/Converter/Converter.jsx')
);

function App() {
  return (
    <div className={css.app}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/converter" element={<ConverterPage />} />
          <Route path="/candidate" element={<CandidatePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
