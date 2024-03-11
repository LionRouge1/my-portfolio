import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { ViewContextProvider } from './components/context/getviewContext';
import Home from './components/Home';
import Articles from './components/Articles';
import NotFound from './components/NotFound';
import Thanks from './components/Thanks';

function App() {
  return (
    <ViewContextProvider>
      <Routes>
        <Route path="/my-portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </ViewContextProvider>
  );
}

export default App;
