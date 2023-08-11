export default async function doNetworkCall(){
    const URL = 'https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json';
    try{
        // const promise = fetch(URL);
        // promise.then(response=>{
        //     const promise2 = response.json();
        //     promise2.then(json=>console.log(json))
        //     .catch(e=>console.log('JSON error ', e))
        // }).catch(e=>console.log(e));
    const response = await fetch(URL);
    const object = await response.json();//Deserialization
    console.log(object);
    return object;//wrap object in promise
    }
    catch(err){
        throw err;
    }
    // const promise = fetch(URL);
    // console.log('Promise is ', promise);
    // promise.then(function(response){
    //     console.log(response);
    //     return response;
    // }).catch(function(err){
    //     console.log('Error ', err);
    // });
    // console.log('Good Bye ');

}