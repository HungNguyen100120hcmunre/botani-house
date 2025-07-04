import { Route, Routes } from 'react-router-dom';
import Home from './pages/users/HomePage'; // đường dẫn đúng đến Home
import Profile from './pages/users/ProfilePage';
import MasterLayout from './pages/users/theme/masterLayout';
import { ROUTERS } from './utils/router';

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Home />
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <Profile />
    },
  ]

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
}

export default RouterCustom;