export interface State {
  count: number;
}

type Action = { type: 'reset' } | { type: 'ADD_COUNT' } | { type: 'REDUCE_COUNT' };

function count(state: State, action: Action): State {
  console.log("functioncount -> state", state)
  switch (action.type) {
    case 'ADD_COUNT':
      return { count: state.count };
    case 'REDUCE_COUNT':
      return { count: state.count};
    case 'reset':
      return { count: 0 };
    default:
      // throw new Error();
      return { count: 0 };
  }
}

export default count