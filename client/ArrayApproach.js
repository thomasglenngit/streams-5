//Sample code!!!
// Array-based approach

import { EDIT_STREAM } from "./src/actions/types";

// const streamReducer = (state=[], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       return state.map(stream => {
//         if (stream.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return stream
//         }
//       })
//     default:
//       return state
//   }
// }

// const streamReducer = (state={}, action) => {
//   switch (action.type)  {
//     case EDIT_STREAM:
//       const newState = { ...state }
//       newState[action.payload.id] = action.payload
//       //[] is the property accessor notation. action payload is the stream.
//       return newState
//     default:
//       return state
//   }
// }


const streamReducer = (state={}, action) => {
  switch (action.type)  {
    case EDIT_STREAM:  
      return { ...state, [action.payload.id]: action.payload }
      // [] = key interpolation. key is a new stream id. 'action payload' is the corresponding stream
    default:
      return state
  }
}