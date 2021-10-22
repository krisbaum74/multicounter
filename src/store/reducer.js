const initialState = {
  counters: {},
  counterOrder: [],
  showAlert: false,
  alertType: "Text", // "Text"|"Input"
  alertContent: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addCounter":
      const newCounterTitle = action.payload
      return {
        ...state,
        counters: {
          ...state.counters, [newCounterTitle]: {title: newCounterTitle, count: 0}
        },
        counterOrder: [newCounterTitle, ...state.counterOrder]
      };
    case "removeCounter":
      const counterTitle = action.payload
      return {
        ...state,
        counters: {
          ...state.counters, [counterTitle]: undefined
        },
        counterOrder: state.counterOrder.filter(item => item !== counterTitle)
      };
    case "setCounter":
      const { title: counterToSet, count: newCounterValue } = action.payload;
      return {
        ...state,
        counters: {
          ...state.counters, [counterToSet]: {...state.counters[counterToSet], count: newCounterValue}
        }
      };
    case "showAlert":
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.type,
        alertContent: action.payload.data
      }
    case "hideAlert":
      return {
        ...state,
        showAlert: false,
        alertContent: {}
      }
    default:
      return state;
  }
}