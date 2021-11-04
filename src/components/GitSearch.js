import React, { useEffect, useContext } from 'react'
import FetchContext from '../context/contexts/FetchContext'
import { FETCH_SUCESS, FETCH_ERROR } from '../context/types/FetchTypes'

const GitSearch = () => {
  const { data, dispatch } = useContext(FetchContext)

  useEffect(() => {
    fetch('https://api.github.com/users/gouravmarch20')
      .then(res => res.json())
      .then(res => {
        dispatch({ type: FETCH_SUCESS, payload: res })
      })
      .catch(dispatch({ type: FETCH_ERROR }))
  }, [])
  console.log('git search ')
  return (
    <div>
      <div>
        <h3>GitSearch</h3>
        {/* {data.loading ? (
          <div>
            <h1>loading</h1>
            <img src='https://www.w3schools.com/css/paris.jpg' alt='Paris' />
          </div>
        ) : (
          displayOutput()
        )} */}
        {data.loading ? <h1>loading</h1> : data.post.login}
        {/* FIXME:  INSTATANT STATE CHANGE */}
        {data.error ? data.error : ''}
      </div>
    </div>
  )
}

export default GitSearch
