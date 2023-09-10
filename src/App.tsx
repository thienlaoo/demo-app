import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cardlist } from './components/CardList/Cardlist';
import { MainContent } from './components/MainContent/MainContent';
import { fetchCharPage } from './components/Helpers/fetchHelper';
import {setChars} from "./components/Redux/charactersSlice";
import {RootState} from "./components/types/CharData";
import './App.scss';

function App() {
    const dispatch = useDispatch();
    const chars = useSelector((state: RootState) => state.characters.chars);

    useEffect(() => {
        if (!chars) {
            fetchCharPage()
                .then((data) => {
                    if (data) {
                        dispatch(setChars(data));
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [dispatch, chars]);

    return (
        <>
            <Header />
            <MainContent />
            <Cardlist chars={chars || []} />
            <Footer />
        </>
    );
}

export default App;
