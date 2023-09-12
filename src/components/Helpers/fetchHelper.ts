import axios from "axios";
import {CharData} from "../types/CharData";
import { MyformData } from "../types/MyformData";
import { filterEmptyValues } from "./filterEmptyValues";

export async function fetchOneChar(characterId: number): Promise<CharData[]> {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        return response.data.results as CharData[];
    } catch (error) {
        throw error;
    }
}

export async function fetchCharPage(): Promise<CharData[]> {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`);
        return response.data.results as CharData[];
    } catch (error) {
        throw error;
    }
}

export async function fetchFilteredData(filter: MyformData) {
    const baseUrl = 'https://rickandmortyapi.com/api/character/?';

    const [key, value] = Object.entries(filter)[0];

    if (value !== undefined && value !== '') {
        const queryParams = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        const apiUrl = `${baseUrl}${queryParams}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Ошибка при выполнении запроса');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Произошла ошибка:', error);
            throw error;
        }
    } else {
        return null;
    }
}

export async function R(filter: MyformData) {
    const baseUrl = 'https://rickandmortyapi.com/api/character/?';
    
    const staticParams = {
        page: 2, // Статичное значение параметра "page"
        // Другие статичные параметры, если они есть
    };
    
    const { keyword_char_name } = filter; // Извлекаем значение "name" из объекта
    
    if (keyword_char_name !== undefined && keyword_char_name !== '') {
        const queryParams = Object.entries({ ...staticParams, name: keyword_char_name })
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        
        const apiUrl = `${baseUrl}${queryParams}`;
    
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Ошибка при выполнении запроса');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Произошла ошибка:', error);
            throw error;
        }
    } else {
        return null;
    }
}



  