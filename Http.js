import Axios from 'axios';
import {useMemo} from 'react';

// Custom hook to wrap our http request using axios and return promise of that request in case of success
// Rest  parameter is for other axios configuration
// https://github.com/axios/axios#request-config   #Request Config

const useHttp= ( url,method, data=null,headers=null,params=null ,restConfig={}) => {
    const httpWrapper = useMemo(
        ()=>
        {
        const methodUpperCase= method? method.toString().toUpperCase():'';

        //validating the parameters
        if(!url || !method){
            return ({
                sendRequest: null,
                isError: true,
                errorMessage: 'Url or Method is invalid'
            })
        }
        else if(methodUpperCase!== "GET" && methodUpperCase!=="POST" && methodUpperCase!=="PUT" && methodUpperCase!=="DELETE"){
            return ({
                sendRequest: null,
                isError: true,
                errorMessage: 'Specified method is not correct'
            })
        }

        try {
            const config = {
                method: method,
                headers: headers,
                data: data,
                url,
                params:params,
                ...restConfig
              };
    
             return {  sendRequest: Axios(config),
             isError: false,
             errorMessage: ""
            }
        }
        catch(ex){
            return {  sendRequest: null,
                isError: true,
                errorMessage: ex.message
               }
        }
    },
    [url, method, data, headers, params ,restConfig]);

    return httpWrapper;
}

export default useHttp;