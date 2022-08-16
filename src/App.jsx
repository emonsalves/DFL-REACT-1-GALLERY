import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
    <div className="App min-h-full bg-gray-300 flex flex-col">
      <Header />
      <section className="grid grid-cols-3 justify-items-center">
        <Card />
      </section>
      <Footer />
    </div>
  )
}

export default App
