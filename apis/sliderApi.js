import axios from 'axios';
import { apiUrl } from '~~/config/url';

export const sliderApi = {
    
    fetchSliders: async () => {

        var res = {};

	    const response = await axios.get(apiUrl.fetchSliders);

        if(response.status == 200) {
        // IF RESPONSE API IS CORRECT

            res = response.data;

        
        }else{
            // ERROR IN API

            
            res = {
                status: false,
                message: 'Error in slider',
                sliders: null
            }

        }

        return res; 

    }

}