import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/Routes'
import { DefaultLayout } from './components/GlobalStyle/Layout';
import { Fragment } from 'react/jsx-runtime';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       {publicRoutes.map((route, index)=>{
        let layout = DefaultLayout;
        if( layout === null )
        {
          layout = Fragment
        }else {
          layout = route.layout;
        }
        const Page = route.Component;
         return <Route key={index} path={route.path} element= {<Page />} />
        
       })}
    
       
      </Routes>
    </div>
    </Router>
  );
}

export default App;
