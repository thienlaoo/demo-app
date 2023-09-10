import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharPage } from './components/Helpers/fetchHelper';
import { setChars } from "./components/Redux/charactersSlice";
import { RootState } from "./components/types/CharData";
import { CharData } from "./components/types/CharData";
import { Main } from './Pages/Main/Main';
import { CharPage } from './Pages/Main/CharPage/CharPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {

    return (
        <Router>
            <Routes>
            <Route path="/" element={
                <>
                    <Main />
                </>
            } />
            <Route path="/characters/:id" element={<CharPage/>} />
            </Routes>

        </Router>

    );
}

export default App;
