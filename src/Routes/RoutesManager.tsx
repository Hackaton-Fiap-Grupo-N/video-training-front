import { QueryClient, QueryClientProvider } from 'react-query';
import HomeController from '../Screens/Home/Home';
import { Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

const RoutesManager = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="detail">
          <Route path=":infoID" element={<HomeController />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default RoutesManager;
