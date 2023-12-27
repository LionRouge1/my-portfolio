import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { ViewContextProvider } from './components/context/getviewContext';
import Home from './components/Home';
import Articles from './components/Articles';
import NotFound from './components/NotFound';

function App() {
  return (
    <ViewContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </ViewContextProvider>
  );
}

export default App;
