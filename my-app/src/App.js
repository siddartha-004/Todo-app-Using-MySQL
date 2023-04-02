
import './App.css';
import RootLayout from './components/RootLayout.js/RootLayout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contents from './components/contents/Contents';
import AddTodo from './components/AddTodo/AddTodo';
import High from './components/High/High';
import Low from './components/Low/Low';
import Medium from './components/Medium/Medium';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Contents/>
        },{
          path:"/all",
          element:<AddTodo/>
        },{
          path:"/high",
          element:<High/>
        },{
          path:"/low",
          element:<Low/>
        },{
          path:"/medium",
          element:<Medium/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
   
    
  );
}

export default App;
