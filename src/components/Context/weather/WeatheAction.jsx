
// export const getWeather =async()=>{

//     const response= await fetch("http://api.weatherapi.com/v1/forecast.json?key=%20b4edc73d598c4b4eb0c131953232012&q=Indore&days=10&aqi=no&alerts=no");
//     const data= await response.json();
//     return data;
// };

export const getWeather = async(place)=>{
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e69ada4a89b04a2b8f4145010231108&q=${place}&days=10&aqi=yes&alerts=yes`);
    const data = await response.json()
    return data;
}




