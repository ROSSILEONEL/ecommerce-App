import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import './index.css'
import { Home } from './pages/Home/Home.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import { Checkout } from './pages/Checkout/Checkout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const router = createBrowserRouter([
  {
    path: '/',element:<LayoutMain/>,
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/checkout',
        element:<Checkout/>}
    ]
  }
])

const queryClient = new QueryClient( {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }

})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
      </QueryClientProvider >
  </StrictMode>,
)
     
