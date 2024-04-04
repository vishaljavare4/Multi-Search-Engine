
searchTerms="dog";

async function wikipediaSearch(){
    const url = 'https://wikipedia-definition.p.rapidapi.com/dictionary/%7Blanguage%7D/%7Bword%7D/%7Bmaxsentences%7D/%7Bformat%7D';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e02ff809eemsh20e61b4f4afc4a1p1c29f9jsn4554e45aee3b',
            'X-RapidAPI-Host': 'wikipedia-definition.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

wikipediaSearch();