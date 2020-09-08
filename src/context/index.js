import React, { useReducer, createContext } from 'react'
import { globalReducer, initialValue as globalInitial } from './reducers/globalReducer'

export const { Context, Provider } = createDataContext()

function createDataContext () {
  const Context = createContext()

  const Provider = ({ children }) => {
    const reducersCombined = [
      { reducerName: 'global', reducer: globalReducer, initialValue: globalInitial }
    ]

    const reducers = reducersCombined.map(({ reducerName, reducer, initialValue }) => {
      const [state, dispatch] = useReducer(reducer, initialValue)
      return { reducerName, state, dispatch }
    })

    const contexts = convertArrayToObject(reducers, 'reducerName')

    return (
      <Context.Provider value={contexts}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}

const convertArrayToObject = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    }
  }, initialValue)
}
