import axios from 'axios';
import {CharData} from "../types/CharData";

export async function fetchOneChar(characterId: number): Promise<CharData[]> {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        return response.data.results as CharData[];
    } catch (error) {
        throw error;
    }
}

export async function fetchCharPage(page: number): Promise<CharData[]> {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return response.data.results as CharData[];
    } catch (error) {
        throw error;
    }
}