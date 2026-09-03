/**
 * App.jsx — Root application component
 *
 * Owns the single repairRequest state object and router.
 * Architecture:
 *   UI (pages)
 *    ↓
 *   repairRequest state  (here)
 *    ↓
 *   recommendProduct()
 *    ↓
 *   Recommendation result (Recommendation page)
 */

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Guide } from "./pages/Guide.jsx";
import { Recommendation } from "./pages/Recommendation.jsx";

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
    // repairRequest is already updated via handleAnswer — nothing extra needed
  }

  /** Reset — clears the complete repair request */
  function handleReset() {
    setRepairRequest(INITIAL_REPAIR_REQUEST);
  }

  return (
    <BrowserRouter>
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
        {/* Catch-all → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
