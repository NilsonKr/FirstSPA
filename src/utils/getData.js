const API = 'https://rickandmortyapi.com/api/character'

const getData = async(id)=> {
    const URL = id ? `${API}/${id}` : API
    try {
        const request = await fetch(URL)
        const data = await request.json()
        return data
    } catch (error) {
        console.log(error)
    }

}

export default getData