import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import { Suspense } from "react";


function App() {
  
  return (
    <div className="container d-flex body">
      <BrowserRouter>
      <Suspense fallback="Loading .........."></Suspense>
      <Routes>
        <Route index element={<QuestionsPage />} />
        <Route path="/quizResults" element="hhhhhhh" />
      </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
