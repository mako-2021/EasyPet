const initialState = []

export default function (state = initialState, action) {
  const { id, event } = action

  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, { id, event }]
    default:
      return state
  }
}
