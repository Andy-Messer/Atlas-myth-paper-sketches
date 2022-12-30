import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Note from "./components/note/Note";
import Notes from "./components/notes-list/NotesList";

import "./fonts/Collection New Style/CollectionNewStyle.ttf"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const baseUrl = "http://127.0.0.1:8000/"

const userContent = [
  {user_id: 0, note_id: 0, note_content: ""},
]

const startUser = {user_id: 0, nickname: "user"}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id/note/:id" element={<Note />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
