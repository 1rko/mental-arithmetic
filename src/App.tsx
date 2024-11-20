import React from 'react';
import './App.css';
import {Japaneese} from "./Components/Japaneese";
import {FeedbackForm} from "./Components/FeedbackForm";

function App() {
    return (
        <div className="App">
            <Japaneese/>
            <FeedbackForm/>
            {/*<StringToUpperCase/>*/}
        </div>
    );
}

export default App;
