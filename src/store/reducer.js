const initialState = {
  counters: {
    "Pills taken": {
      title: "Pills taken",
      count: 0
    },
    "Books read this year": {
      title: "Books read this year",
      count: 10
    },
    "Retype Mary's Excel Spreadsheet again": {
      title: "Retype Mary's Excel Spreadsheet again",
      count: 100
    }
  },
  counterOrder: ["Pills taken", "Books read this year", "Retype Mary's Excel Spreadsheet again"],
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