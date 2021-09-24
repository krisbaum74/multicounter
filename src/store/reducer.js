const initialState = {
  loading: true
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "setLoading":
      return { ...state, loading: action.payload }
    default:
      return state;
  }
}