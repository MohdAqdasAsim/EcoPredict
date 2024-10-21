import { Dashboard, Header } from '../components'

const Home = () => {
  return (
    <div className="min-h-screen bg-light flex flex-col">
    <Header />
    <main className="flex-grow p-4">
      <Dashboard />
    </main>
  </div>
  )
}

export default Home