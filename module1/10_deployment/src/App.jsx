import React, { Suspense, lazy } from 'react';
import Header from './components/Header';

const Home = lazy(() => import('./components/Home'));
const Services = lazy(() => import('./components/Services'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center text-white mt-10">Loading...</div>}>
        <main>
          <Home />
          <Services />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </main>
      </Suspense>
    </>
  );
}

export default App;