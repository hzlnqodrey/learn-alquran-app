import axios, { AxiosInstance } from 'axios';
// TODO: configure types, but lets do MVP api first okay with "any?"

// API Configuration
const QURAN_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1'  // from local backend
const QURAN_API_URL_GADING = 'https://api.quran.gading.dev'
const QURAN_API_URL_KEMENAG = 'https://quran.kemenag.go.id'
const QURAN_API_URL_GLOBAL = 'https://alquran.cloud/api' // repo: https://1x.ax by mamluk / @meezan

// TODO: Create Axios instance for API from backend

// TODO: Create Axios instance for API from Public -> Gading
const quranApiGadingClient: AxiosInstance = axios.create({
    baseURL: QURAN_API_URL_GADING,
    timeout: 36000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// TODO: Backend API Management

// Quran Public API Gading Management
// TODO: Create Surah Types
export const quranAPIGading = {
    /**
     * func getSurahs
     */
    async getSurahs(): Promise<Surah[]> {
        try {
            const response = await quranApiGadingClient.get('/surahs');

            // return response.data.data.map
        } catch (error) {
            
        }
    }
}



