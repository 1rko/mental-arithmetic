import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import './App.css';
import {Japaneese} from "./Components/Japaneese";
import {FeedbackForm} from "./Components/FeedbackForm";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (

        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/japaneese/*" element={<Japaneese/>}/>
                <Route path="/feedbackForm/*" element={<FeedbackForm/>}/>
                <Route path="*" element={<Navigate to="/japaneese"/>}/>
            </Routes>
        </div>

    );
}

export default App;
