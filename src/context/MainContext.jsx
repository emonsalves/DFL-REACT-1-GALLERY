import { pokemons as data } from "../data/data"
import { createContext, useEffect, useState } from "react"
export const MainContext = createContext()
export function MainContextProvider(props) {

  const tituloGaleria = "Galeria de Imagenes con React"
  const piePagina = "Bienvenido esta es una pequeña galeria con los Pokemones Emblema de React para este primer Desafio"

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    setPokemons(data)
  }, [])

  return (
    <MainContext.Provider value={{ tituloGaleria, piePagina, pokemons}}>
      {props.children}
    </MainContext.Provider>
  )
}
