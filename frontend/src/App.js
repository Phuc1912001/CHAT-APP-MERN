import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/chats" element={<ChatPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
