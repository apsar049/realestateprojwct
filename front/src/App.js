import './App.css'
import Login from './components/login'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicInfo from './components/basicinfo'
import Properties from './components/propertydetails'
import GeneralInfo from './components/generalinfo'
import LocationInfo from './components/locationinfo'
import Listing from './components/listings'
function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/basicinfo' element={<BasicInfo />} />
          <Route path='/basicinfo/propertydetails' element={<Properties />} />
          <Route
            path='/basicinfo/propertydetails/generalinfo'
            element={<GeneralInfo />}
          />
          <Route
            path='/basicinfo/propertydetails/generalinfo/locationinfo'
            element={<LocationInfo />}
          />
          <Route
            path='/basicinfo/propertydetails/generalinfo/locationinfo/listings'
            element={<Listing />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
