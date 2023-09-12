import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Cardlist } from "../../components/CardList/Cardlist";
import { CharData } from "../../components/types/CharData";
import { RootState } from "../../components/types/CharData";
import { fetchFilteredData } from "../../components/Helpers/fetchHelper";
import { fetchCharPage } from "../../components/Helpers/fetchHelper";
import { setChars } from "../../components/Redux/charactersSlice";
import { MyformData } from "../../components/types/MyformData";
import { useDispatch, useSelector } from "react-redux";
import { R } from "../../components/Helpers/fetchHelper";

export const Main = () => {

    const dispatch = useDispatch();
    const chars = useSelector((state: RootState) => state.characters.chars);
    const updatedData = useSelector((state: { updatedData: MyformData }) => state.updatedData);
    const [filtered, setFiltered] = useState<CharData | null>(null);



    console.log(updatedData);

    useEffect(() => {
        if (updatedData) {
            R(updatedData)
                .then((data) => {
                    if (data) {
                        dispatch(setChars(data));
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
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
    }, [dispatch, updatedData]);


    return (
        <>
            <Header />
            <Cardlist chars={chars} />
            <Footer />
        </>
    )
}