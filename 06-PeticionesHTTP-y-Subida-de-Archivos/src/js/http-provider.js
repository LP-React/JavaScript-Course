const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users?page=2'

const getJoke = async () => {

    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se pudo realizar la peticion';
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value }
    } catch (err) {
        throw err;
    }


}

const obtenerUsuarios = async() => {
    const resp = await fetch(usersUrl);
    const {data} = await resp.json();

    return data;
} 

export { getJoke, obtenerUsuarios }