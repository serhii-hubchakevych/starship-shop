const starshipsLoaded = (newStarships) => {
    return {
        type: 'STARSHIPS_LOADED',
        payload: newStarships
    };
};

const starshipsRequested = () => {
    return {
        type: 'STARSHIPS_REQUESTED',
    };
};

const starshipAddedToCart = (starshipId) => {
    
    return {
        type: 'STARSHIP_ADDED_TO_CART',
        payload: starshipId
    }
}

const increaseStarship = (starshipId) => {
    return {
        type: 'STARSHIP_INCREASED',
        payload: starshipId
    }
}

const decreaseStarship = (starshipId) => {
    return {
        type: 'STARSHIP_DECREASED',
        payload: starshipId
    }
}

const orderCreated = () => {
    return {
        type: 'ORDER_CREATED'
    }
}

export { 
    starshipsLoaded,
    starshipsRequested,
    starshipAddedToCart,
    increaseStarship,
    decreaseStarship,
    orderCreated
};