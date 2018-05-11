import axios from 'axios'

// strings
const ACTION_TYPE = 'ACTION_TYPE'

// action creator
export const actionCreator = () => {
  return {
    type: ACTION_TYPE,
  }
}

// thunk
export const thunkCreator = () => {
  return function thunk(dispatch) {
  }
}

const boilerReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default boilerReducer
