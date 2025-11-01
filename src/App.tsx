
import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import WelcomeScreen from './components/WelcomeScreen'
import Storage from './components/Storage/Storage';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeAnimationEnd = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onAnimationEnd={handleWelcomeAnimationEnd} />
      ) : (
         <Storage />
         // <BrowserRouter>
         //    <Routes>
         //       <Route path="/quiz">
         //          <Quiz />
         //       </Route>
         //       <Route path="/my-storage">
         //          <Storage />
         //       </Route>
         //       <Route path="/">
         //          <HomePage />
         //       </Route>
         //    </Routes>
         // </BrowserRouter>
      )}
    </>
  )
}

export default App
