import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import DrawPage from './pages/Draw';
import Layout from './components/layout/Layout';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/meetups/' element={<AllMeetupsPage />} />
          <Route path='/meetups/new-meetup' element={<NewMeetupPage />} />
          <Route path='/meetups/favorites' element={<FavoritesPage />} />
          <Route path='/meetups/draw' element={<DrawPage />} />
          <Route path='/' element={<Welcome />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
