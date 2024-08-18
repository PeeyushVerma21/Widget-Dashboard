import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import ConfigPage from './pages/configpage/ConfigPage';

function App() {  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/home" replace />,
    },
    {
      path: '/home',
      element: <Navigate to="/dashboard" replace />,
    },
       {
      path: '/dashboard',
      element: (
          <ConfigPage />
      ),
    },
  ]);

  return (
    <>
        <CssBaseline />
        <RouterProvider router={router} />

    </>
  )
}

export default App
