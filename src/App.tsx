import React from 'react';
import {Route, Routes} from 'react-router-dom'
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
                <Route path="*" element={<div>404 Not Found</div>}/>
            </Routes>
        </div>

    );
}

export default App;
