import React from 'react';

import css from './App.module.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={css.app}>
      <Suspense fallback={null}>
        <Routes>
          <Route></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
