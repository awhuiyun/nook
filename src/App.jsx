import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExplorePage from "./pages/ExplorePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import PublishFormPage from "./pages/PublishFormPage";
import NotionApi from "./NotionApi";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/:item" element={<BookDetailsPage />} />
        <Route path="/publish-form" element={<PublishFormPage />} />
      </Routes>
      {/* <NotionApi /> */}
    </div>
  );
}

export default App;
