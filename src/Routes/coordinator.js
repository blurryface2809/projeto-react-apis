export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const goToDetailsPage = (navigate, namePokemon) => {
    navigate (`/details/${namePokemon}`)
}