import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import { Suspense } from "react";
import UserResultsPage from "./pages/UserResultsPage";

import "./App.css";

function App() {
  
  return (
    <div className="container d-flex body">
      <BrowserRouter>
      <Suspense fallback="Loading .........."></Suspense>
      <Routes>
        <Route index element={<QuestionsPage />} />
        <Route path="/quizResults" element={<UserResultsPage />} />
      </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
