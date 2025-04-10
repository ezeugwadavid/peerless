import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/loader";
import ErrorBoundary from "./components/errorboundary/errorBoundary";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={"/dashboard"} element={<Home />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
