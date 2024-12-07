import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";

export const HomePage = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/join">Join Room</Link> |{" "}
          <Link to="/create">Create Room</Link>
        </nav>
        <Routes>
          <Route path="/" element={<p>Home Page</p>} />
          <Route path="/join" element={<JoinRoomPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
};
