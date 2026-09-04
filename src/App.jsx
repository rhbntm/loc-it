/**
 * App.jsx — Root application component
 *
 * Provides official LOCTITE brand chrome:
 * - Navbar with official logo and navigation links
 * - Routing: Home (/), Guide (/guide), Recommendation (/recommendation), Where to Buy (/where-to-buy)
 * - Floating LOCTITE.AI (beta) assistant widget
 * - Pinned vertical "Feedback" tab
 * - Official Henkel / LOCTITE footer
 */

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Guide } from "./pages/Guide.jsx";
import { Recommendation } from "./pages/Recommendation.jsx";
import { WhereToBuy } from "./pages/WhereToBuy.jsx";

import { Navbar } from "./components/common/Navbar.jsx";
import { Footer } from "./components/common/Footer.jsx";
import { LoctiteAIWidget } from "./components/common/LoctiteAIWidget.jsx";
import { FeedbackTab } from "./components/common/FeedbackTab.jsx";

const INITIAL_REPAIR_REQUEST = {
  category: null,
  material: null,
  repairType: null,
};

function App() {
  const [repairRequest, setRepairRequest] = useState(INITIAL_REPAIR_REQUEST);

  /** Called when the user starts the guide (landing CTA) */
  function handleStart() {
    // Keep existing answers if user navigates back-and-forth
  }

  /** Called when user selects an answer for a question */
  function handleAnswer(key, value) {
    setRepairRequest((prev) => ({ ...prev, [key]: value }));
  }

  /** Called when the user finishes all 3 questions */
  function handleComplete() {
    // repairRequest is already updated via handleAnswer
  }

  /** Reset — clears the complete repair request */
  function handleReset() {
    setRepairRequest(INITIAL_REPAIR_REQUEST);
  }

  return (
    <BrowserRouter>
      {/* Official LOCTITE Header */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home onStart={handleStart} />}
        />
        <Route
          path="/guide"
          element={
            <Guide
              repairRequest={repairRequest}
              onAnswer={handleAnswer}
              onComplete={handleComplete}
              onReset={handleReset}
            />
          }
        />
        <Route
          path="/recommendation"
          element={
            <Recommendation
              repairRequest={repairRequest}
              onReset={handleReset}
            />
          }
        />
        <Route
          path="/where-to-buy"
          element={<WhereToBuy />}
        />
        {/* Catch-all → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Floating LOCTITE.AI (beta) Assistant */}
      <LoctiteAIWidget />

      {/* Pinned Feedback Tab */}
      <FeedbackTab />

      {/* Official Henkel / LOCTITE Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
