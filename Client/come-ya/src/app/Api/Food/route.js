import axios from 'axios';
import { NextResponse } from 'next/server';


async function axiosFood() {
    const options = {
        method: 'GET',
        url: 'https://fast-food-restaurants-usa-top-50-chains.p.rapidapi.com/restaurants-top/kfc/location/0',
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'fast-food-restaurants-usa-top-50-chains.p.rapidapi.com'
        }
    };
      
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data; // Usar directamente response.data
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function GET(request) {
    const food = await axiosFood();
    return NextResponse.json(food);
}

