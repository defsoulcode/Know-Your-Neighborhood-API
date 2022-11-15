import axios from "axios";

const API_BASE_URL = "http://localhost:8080/store/allStore";
export const ACCESS_TOKEN = 'accessToken';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })



    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}


export function getStore(){
    return request({url: API_BASE_URL,method: 'GET'});
}

export function searchStore(keyword){
    console.log("http://localhost:8080/store/searchStore" + "/" + keyword);
    return axios.get('http://localhost:8080/store/searchStore' + "/" + keyword , {} , {headers:'Bearer ' + localStorage.getItem(ACCESS_TOKEN)} )
    
}


