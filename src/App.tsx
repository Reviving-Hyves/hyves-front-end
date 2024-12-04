import React from "react";
import * as Sentry from "@sentry/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default Sentry.withProfiler(App);
