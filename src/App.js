import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/meetups/' element={<AllMeetupsPage />} />
          <Route path='/meetups/new-meetup' element={<NewMeetupPage />} />
          <Route path='/meetups/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
