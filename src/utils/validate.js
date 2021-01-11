const validateRoutes = (route) => {
    if(route.length <= 3){
        let validate = route === '/' ? route : '/:id'
        return validate
    }
    return `/${route}`
}

export default validateRoutes