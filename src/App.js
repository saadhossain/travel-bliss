import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routers/Routes';

function App() {
  const router = routes;
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
