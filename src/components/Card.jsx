import { useContext } from "react"
import { MainContext } from "../context/MainContext"

function Card() {
  const { pokemons } = useContext(MainContext)

  if (pokemons.length === 0) {
    return <h1>No hay pokemones aun</h1>
  }

  return pokemons.map((pokemon) => (
    <div
      key={pokemon.id}
      className="card flex flex-col justify-center align-items-center max-w-sm bg-white rounded-lg border border-gray-500 shadow-2x1 dark:bg-white transform transition duration-500 hover:scale-105 "
    >
      <img
        className="rounded-t-lg mx-auto"
        src={pokemon.imagen}
        width="251px"
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pokemon.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
          {pokemon.description}
        </p>
      </div>
    </div>
  ))
}

export default Card
