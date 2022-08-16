import { useContext } from "react"
import { MainContext } from "../context/MainContext"
function Header() {
  const { tituloGaleria } = useContext(MainContext)
  return (
    <>
      <header className="bg-blue-800 text-center py-3 lg:px-3 mb-4" >
        <div
          className="p-2 bg-red-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-blue-800 uppercase px-2 py-1 text-xs font-bold mr-3">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              width="50px"
              alt=""
            />
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            {tituloGaleria}
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
             viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </header>
    </>
  )
}

export default Header
