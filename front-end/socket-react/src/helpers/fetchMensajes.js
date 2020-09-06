
export const getMensaje = async( ) => {

    const resp = await fetch('https://localhost:3000/api');
    const { data } = await resp.json();

    
    return data;

}