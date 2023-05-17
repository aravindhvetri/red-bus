import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstPage from './FirstPage'
import Secondpage from './Secondpage'
import Point from './Point'
import { initialState, stateReducer } from './Reducer'
import { StateContext } from './StateContext'
import Report from './Report'

const Routing = () => {
 const [state, dispatch] = useReducer(stateReducer, initialState)
  return (
    <StateContext.Provider value = {{state,dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />}></Route>
          <Route path='/home/:id1/:id2/:id3' element={<Secondpage/>}></Route>
          <Route path='/point' element={<Point />}></Route>
          <Route path='/report' element={<Report/>}></Route>
        </Routes>
      </BrowserRouter>
      </StateContext.Provider>
  )
}

export default Routing