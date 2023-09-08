import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "../src/components/Footer/Footer";
import {Card} from "./components/Card/Card";
import './App.scss';

function App() {
    return (
        <>
            <Header/>
            <Card/>
            <Footer/>
        </>
    )
}

export default App;
