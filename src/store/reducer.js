const initialState = {
  counters: {},
  counterOrder: [],
  showAlert: false,
  alertType: 'Text', // 'Text'|'Warning'|'Input'
  alertContent: {},
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'addCounter':
      return {
        ...state,
        counters: {
          ...state.counters, [payload]: { title: payload, count: 0 },
        },
        counterOrder: [payload, ...state.counterOrder],
      };
    case 'removeCounter':
      return {
        ...state,
        counters: {
          ...state.counters, [payload]: undefined,
        },
        counterOrder: state.counterOrder.filter((item) => item !== payload),
      };
    case 'setCounter':
      return {
        ...state,
        counters: {
          ...state.counters,
          [payload.title]: {
            ...state.counters[payload.title],
            count: payload.count,
          },
        },
      };
    case 'showAlert':
      return {
        ...state,
        showAlert: true,
        alertType: payload.type,
        alertContent: payload.data,
      };
    case 'hideAlert':
      return {
        ...state,
        showAlert: false,
        alertContent: {},
      };
    default:
      return state;
  }
}
