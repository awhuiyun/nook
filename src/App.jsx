import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExplorePage from "./pages/ExplorePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import PublishFormPage from "./pages/PublishFormPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [isNavBarNeeded, setIsNavBarNeeded] = useState(true);
  const [isSearchbarNeeded, setIsSearchbarNeeded] = useState(true);

  // Functions to toggle the search bar
  function setIsSearchbarNeededTrue() {
    setIsSearchbarNeeded(true);
  }

  function setIsSearchbarNeededFalse() {
    setIsSearchbarNeeded(false);
  }

  // Functions to toggle the NavBar
  function setIsNavbarNeededTrue() {
    setIsNavBarNeeded(true);
  }

  function setIsNavbarNeededFalse() {
    setIsNavBarNeeded(false);
  }

  return (
    <div>
      {isNavBarNeeded && <NavBar isSearchbarNeeded={isSearchbarNeeded} />}

      <Routes>
        <Route
          path="/"
          element={
            <ExplorePage
              setIsSearchbarNeededTrue={setIsSearchbarNeededTrue}
              setIsNavbarNeededTrue={setIsNavbarNeededTrue}
            />
          }
        />
        <Route
          path="/:item"
          element={
            <BookDetailsPage
              setIsSearchbarNeededFalse={setIsSearchbarNeededFalse}
              setIsNavbarNeededTrue={setIsNavbarNeededTrue}
            />
          }
        />
        <Route
          path="/publish-form"
          element={
            <PublishFormPage
              setIsSearchbarNeededFalse={setIsSearchbarNeededFalse}
              setIsNavbarNeededTrue={setIsNavbarNeededTrue}
            />
          }
        />
        <Route
          path="/checkout/:item"
          element={
            <CheckoutPage setIsNavbarNeededFalse={setIsNavbarNeededFalse} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
