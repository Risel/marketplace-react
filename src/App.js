import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import CatalogPage from "./pages/CatalogPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import RequireAuth from "./hoc/RequireAuth";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/profile' element={<RequireAuth>
          <ProfilePage/>
        </RequireAuth>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;