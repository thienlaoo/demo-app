import React, { useEffect, useState } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { Cardlist } from "./components/CardList/Cardlist";
import { MainContent } from "./components/MainContent/MainContent";
import { fetchCharPage } from "./components/Helpers/fetchHelper";
import { CharData } from "./components/types/CharData";
import './App.scss';

function App() {
    const [chars, setChars] = useState<CharData[] | null>(null);

    useEffect(() => {
        fetchCharPage()
            .then((data) => {
                if (data) {
                    setChars(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

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
