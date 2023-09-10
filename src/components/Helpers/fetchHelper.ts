import axios from "axios";
import {CharData} from "../types/CharData";
import { FormData } from "../types/FormData";

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

export async function fetchFilteredData(filter: FormData) {
    const baseUrl = 'https://rickandmortyapi.com/api/character/?';
  
    const queryParams = Object.entries(filter)
      .filter(([key, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
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
  }
  