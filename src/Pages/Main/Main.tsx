import React, {useState, useEffect} from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Cardlist } from "../../components/CardList/Cardlist";
import { CharData } from "../../components/types/CharData";
import { RootState } from "../../components/types/CharData";
import { fetchFilteredData } from "../../components/Helpers/fetchHelper";
import { fetchCharPage } from "../../components/Helpers/fetchHelper";
import { setChars } from "../../components/Redux/charactersSlice";
import { useDispatch, useSelector } from "react-redux";

export const Main = () => {

    const dispatch = useDispatch();
    const chars = useSelector((state: RootState) => state.characters.chars);
    const formData = useSelector((state: { formData: FormData }) => state.formData);
    const [filtered, setFiltered] = useState<CharData | null>(null);


        const filteredData = Object.fromEntries(
            Object.entries(formData).filter(([key, value]) => value !== undefined && value !== '')
          );
          
          console.log(filteredData);


    

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
        <Cardlist chars={chars} />
        <Footer />
    </>
    )
}