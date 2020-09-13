
export const Contador = async() => {


    const resp = await fetch('http://localhost:3000/api');
    const  data = await resp.json();
    //console.log(data)

    return data;



}

