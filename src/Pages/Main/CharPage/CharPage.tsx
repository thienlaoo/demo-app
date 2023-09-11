import React from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { CharCard } from "../../../components/CharCard/CharCard";
import { More } from "../../../components/More/More";

export const CharPage = () => {
    return (
        <>
        <Header/>
        <div className="main_container">
            <CharCard/>
            <More/>
        </div>
        <Footer/>
        </>
        
    )
}