import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store.js'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routers/routes.jsx'

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
     <RouterProvider router={routes}/>
    </Provider>,
)
