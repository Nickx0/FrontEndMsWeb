export default async function apiCall({
    url,
    method = 'GET',
    body,
    headers,
}){
    try {
        const res = await fetch(url, {method, body, headers});
        console.log(res)
        return res.json();
    } catch (error) {
        Promise.reject(error);
    }
    
}