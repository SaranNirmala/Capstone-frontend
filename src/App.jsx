import './App.css';
import Login from './Components/LoginPage/Login';
import Register from './Components/LoginPage/Register';
import {UserInput} from './Components/UserInput/UserInput';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import TemplateDesign from './Components/TemplateDesign/TemplateDesign';
import ProtectedRoute from './Protected';
import ForgotPassword from './Components/LoginPage/ForgotPassword';
import ResetPassword from './Components/LoginPage/ResetPassword';

function App() {

  return (
    <div>
{/* Routes imported using react-router-dom */}
      <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path='/forgotPassword' element={<ForgotPassword/>}/>
         <Route path='/resetPassword' element={<ResetPassword />}/>
         <Route path="/" element={<HomeComponent/>}/>
         <Route path="/template" element={<ProtectedRoute element={<TemplateDesign/>}/>}/>        
         <Route path="/input/*" element={<ProtectedRoute element={<UserInput/>}/>}/>   
      </Routes>
    </BrowserRouter>

  
    
    </div>
  )
}

export default App


