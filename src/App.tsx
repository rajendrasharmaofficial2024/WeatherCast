import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import { ThemeProvider } from "./components/ui/theme-provider"
import Dashboard from "./pages/dashboard"
import City from "./pages/city"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/city/:city" element={<City/>} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
