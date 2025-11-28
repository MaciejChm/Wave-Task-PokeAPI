import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  return (
    <div className="min-h-screen p-8 bg-[#0f0f0f] text-white flex flex-col items-center justify-start">
      <Header />
      <SearchBar />
    </div>
  )
}

export default App
