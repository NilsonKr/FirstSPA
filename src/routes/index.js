import home from '../pages/home.js';
import character from '../pages/character.js';
import error404 from '../pages/error404';
import header from '../templates/header.js';
import getHash from '../utils/getHash.js'; 
import validateRoutes from '../utils/validate.js'

const routes = {
    '/':home,
    '/:id': character,
    '/contact': 'Contact',
}

const router = async () => {
    const Header = document.getElementById('header') || null
    const main = document.getElementById('content') || null

    Header.innerHTML = await header()

   let hash = getHash()
    let route =  validateRoutes(hash)
    let render = routes[route] ? routes[route] : error404

    main.innerHTML = await render() 
}


export default router