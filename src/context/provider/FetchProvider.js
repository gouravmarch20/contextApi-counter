import { useReducer } from 'react'
import FetchContext from '../contexts/FetchContext'
import FetchReducer from '../reducers/FetchReducer'
let initialState = {
  loading: true,
  error: '',
  post: {}
}
const FetchProvider = props => {
  const [data, dispatch] = useReducer(FetchReducer, initialState)
  return (
    <FetchContext.Provider value={{ data, dispatch }}>
      {props.children}
    </FetchContext.Provider>
  )
}
export default FetchProvider
