import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateRoomPage = () => {
  const [votesToSkip, setVotesToSkip] = useState(3); // State to manage votes_to_skip

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create A Room
        </h1>

        {/* Guest Control Section */}
        <div className="mb-6">
          <h2 className="text-lg text-gray-700 font-medium mb-2 text-center">
            Guest Control of Playback State
          </h2>
          <div className="flex justify-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="guest-control"
                value="true"
                defaultChecked
                className="form-radio text-blue-500"
              />
              <span className="text-gray-600">Play/Pause</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="guest-control"
                value="false"
                className="form-radio text-red-500"
              />
              <span className="text-gray-600">No Control</span>
            </label>
          </div>
        </div>

        {/* Votes to Skip Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Votes to Skip
          </label>
          <input
            type="number"
            min="1"
            value={votesToSkip}
            onChange={(e) => setVotesToSkip(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Set the number of votes required to skip a song.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition">
            Create Room
          </button>
          <Link
            to="/"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomPage;
