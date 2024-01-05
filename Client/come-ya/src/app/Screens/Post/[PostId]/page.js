const axios = require('axios');

async function GetRestaurant () {
    const options = {
        method: 'GET',
        url: 'https://fast-food-restaurants-usa-top-50-chains.p.rapidapi.com/restaurants-top/kfc/location/1',
        headers: {
          'X-RapidAPI-Key': 'a2a5a6c202mshb0c1a5ef787573cp1c8ff1jsn348dea63a933',
          'X-RapidAPI-Host': 'fast-food-restaurants-usa-top-50-chains.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data
      } catch (error) {
          console.error(error);
          return 0;
      }
}


async function loadPost (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    console.log(data)
    return data
}

export default async function postId({params}) {
    
    const post = await loadPost(params.PostId)
    const response = await GetRestaurant();
    return(
        <div>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>

        </div>

    )
    
}