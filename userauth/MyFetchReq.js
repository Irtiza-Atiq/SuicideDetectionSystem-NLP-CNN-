


export const MyFetchRequest=async()=>{
    const responce= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const resJson=await responce.json();
    return resJson;
}



export const MyPostRequest=async(data)=>{
    const responce= await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    
    const resJson=await responce.json();
    return resJson;
}




