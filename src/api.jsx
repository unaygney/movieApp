import axios from 'axios';


const getData = async (text) => {
    const response = await axios.get(`https://api.collectapi.com/imdb/imdbSearchByName?query=${text}`, {
        headers: {
            "authorization" : "apikey 3fcqo7aRno02fkSQs7sLoa:7souFGhsKdgfbMGbVrPI8C"
        }
    })
    
    return response.data.result
}

export default getData;