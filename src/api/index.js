import axios from 'axios';      


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {
    try {
        const {data: { data  } } = await axios.get(URL, {
       
  
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'aa09335b71msh1d3756391ca27a6p1186e1jsn975c7965fc6a'
            }
                 
          });
          return data;
        }catch (error){
        console.log(error);
    }
}





