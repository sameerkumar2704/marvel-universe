import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import LandingPage from "./pages/ladingPage"



function App() {
  const query  = new QueryClient()

  return (
    <QueryClientProvider client={query}>


    <LandingPage/>
    </QueryClientProvider>
  )
}

export default App
