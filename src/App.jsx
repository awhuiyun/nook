import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExplorePage from "./pages/ExplorePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import PublishFormPage from "./pages/PublishFormPage";

function App() {
  const [isSearchbarNeeded, setIsSearchbarNeeded] = useState(false);

  // Functions to toggle the search bar
  function setIsSearchbarNeededTrue() {
    setIsSearchbarNeeded(true);
  }

  function setIsSearchbarNeededFalse() {
    setIsSearchbarNeeded(false);
  }

  return (
    <div>
      <NavBar isSearchbarNeeded={isSearchbarNeeded} />
      <Routes>
        <Route
          path="/"
          element={
            <ExplorePage setIsSearchbarNeededTrue={setIsSearchbarNeededTrue} />
          }
        />
        <Route
          path="/:item"
          element={
            <BookDetailsPage
              setIsSearchbarNeededFalse={setIsSearchbarNeededFalse}
            />
          }
        />
        <Route
          path="/publish-form"
          element={
            <PublishFormPage
              setIsSearchbarNeededFalse={setIsSearchbarNeededFalse}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
