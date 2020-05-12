import queryString from 'query-string';

let rootUrl = 'http://xpm.xpmwqhzygy.top';

let myFetch = {
    get(url,queryParams){
        url = rootUrl+url
        if(queryParams){
            url += "?"+queryString.stringify(queryParams);
        }
        
        return fetch(url,{
            method:"GET"})
        .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(body)
        })
        .then(res=>res.json())
    },
    audiopost(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            // headers:{
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // },
            body:body
        })
        .then(res=>res.json())
    }
}

export {myFetch};