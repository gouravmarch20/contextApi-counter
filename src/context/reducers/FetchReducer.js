import { FETCH_SUCESS, FETCH_ERROR } from '../types/FetchTypes'

const FetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: ''
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        post: {},
        error: 'Something went wrong'
      }

    default:
      return {
        state
      }
  }
}

export default FetchReducer
