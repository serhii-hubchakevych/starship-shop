const starshipsLoaded = (newStarships) => {
    return {
        type: 'STARSHIPS_LOADED',
        payload: newStarships
    };
};

export { 
    starshipsLoaded 
};