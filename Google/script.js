async function search(engine) {
    
    const searchInput = document.getElementById("searchInput").value;

    
    let searchResults;

    
    if (engine === 'google') {
        searchResults = await searchGoogle(searchInput);
    } else if (engine === 'gemini') {
        
        searchResults = await searchGemini(searchInput, 'YOUR_GEMINI_API_KEY');
    } else if (engine === 'wikipedia') {
        searchResults = await searchWikipedia(searchInput);
    }


    handleSearchResults(searchResults, engine);
}


async function searchGoogle(query) {
    const apiKey = 'AIzaSyD5gjS-XTGN5d1s63LloC1qRurI2W-LJqk';
    const cx = 'YOUR_CUSTOM_SEARCH_ENGINE_ID'; 
    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data.items; 
    } catch (error) {
        console.error('Error fetching data from Google:', error);
        return null;
    }
}


searchGoogle('OpenAI')
    .then(results => {
        console.log(results);
        
    })
    .catch(error => {
        console.error('Error:', error);
    });


async function searchGemini(query, apiKey) {
}


function handleSearchResults(results, engine) {
    if (!results) {
        console.error('No search results found.');
        return;
    }

    console.log(`Search results from ${engine}:`, results);
}