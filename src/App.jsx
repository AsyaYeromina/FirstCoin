
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import WelcomeScreen from './components/WelcomeScreen' // Import the WelcomeScreen component

function App() {
  const [showWelcome, setShowWelcome] = useState(true); // State to control welcome screen visibility

  const handleWelcomeAnimationEnd = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onAnimationEnd={handleWelcomeAnimationEnd} />
      ) : (
         <BrowserRouter>
            <Routes>
               <Route path="/quiz">
                  <Quiz />
               </Route>
               <Route path="/my-storage">
                  <Storage />
               </Route>
               <Route path="/">
                  <HomePage />
               </Route>
            </Routes>
         </BrowserRouter>
      )}
    </>
  )
}

export default App
