import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/Routes'
import { DefaultLayout } from './components/GlobalStyle/Layout';
import { Fragment } from 'react/jsx-runtime';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       {publicRoutes.map((route, index) => {
         let Layout = DefaultLayout;
         if (route.layout === null) {
           Layout = Fragment;
         } else if (route.layout) {
           Layout = route.layout;
         }
         const Page = route.Component;
         return (
           <Route
             key={index}
             path={route.path}
             element={
               <Layout>
                 <Page />
               </Layout>
             }
           />
         );
       })}
    
       
      </Routes>
    </div>
    </Router>
  );
}

export default App;
