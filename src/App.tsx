import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { ViewContextProvider } from './components/context/getviewContext';
import Home from './components/Home';

function App() {
  return (
    <ViewContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ViewContextProvider>
  );
}

export default App;
