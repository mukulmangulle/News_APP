export const SearchCoin = async (coinName)=>{

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search? query=${coinName}')

    const data = await response.json()
    return data.coins;
    
  } catch (error) {
    console.log(error);
    
  }
};

export const grtCoinDetails = async (coinId)=>{

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/${coinId}');

    const data = await response.json();
    return data.coins;
    
  } catch (error) {
    console.log(error);
    
  }
};