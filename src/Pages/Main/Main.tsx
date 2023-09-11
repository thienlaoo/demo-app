import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Cardlist } from "../../components/CardList/Cardlist";
import { CharData } from "../../components/types/CharData";
import { RootState } from "../../components/types/CharData";
import { fetchFilteredData } from "../../components/Helpers/fetchHelper";
import { setChars } from "../../components/Redux/charactersSlice";
import { useDispatch, useSelector } from "react-redux";

export const Main = () => {
    const dispatch = useDispatch();
    const chars = useSelector((state: RootState) => state.characters.chars);
    const formData = useSelector((state: { formData: any }) => state.formData);
    const [filtered, setFiltered] = useState<CharData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (Object.keys(formData).length === 0) {
                    return;
                }
                const filteredData = await fetchFilteredData(formData);
                setFiltered(filteredData);
            } catch (error) {
                console.error('Error', error);
            }
        };

        fetchData();
    }, [formData]);

    return (
        <>
            <Header />
            <Cardlist chars={filtered || chars} />
            <Footer />
        </>
    );
}
