export const fetchNews = async (topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=&sortBy=publishedAt&apiKey=ef47ac5575ae4a2388ca82771be016c2`)
    const data = await response.json()
    return data.articles;

}
