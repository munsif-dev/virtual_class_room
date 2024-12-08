import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";

export const HomePage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<p>Home Page</p>} />
          <Route path="/join" element={<JoinRoomPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
};
