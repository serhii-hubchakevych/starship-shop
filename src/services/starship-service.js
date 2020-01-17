class StarshipService {

    async getResource(url) {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}`)
        }
        return await res.json()
    }

    async getAllStarships(){
        const res = await this.getResource('https://swapi.co/api/starships/')
        return res.results.map( (item) => this._transformStarship(item))
    }

    getStrashipsImage(id) {
      const starshipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
      return starshipImageUrl;
    }

    _transformStarship(starship) {
      if (starship.cost_in_credits === 'unknown'){
        starship.cost_in_credits = 0;
      }
        return {
          id: this._extractId(starship),
          name: starship.name,
          model: starship.model,
          costInCredits: starship.cost_in_credits,
          img: this.getStrashipsImage(this._extractId(starship))
        }
      }

      _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      }
}

export {
    StarshipService
}