import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExplorePage from "./pages/ExplorePage";
import PublishFormPage from "./pages/PublishFormPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/publish-form" element={<PublishFormPage />} />
      </Routes>
    </div>
  );
}

export default App;
