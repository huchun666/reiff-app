export interface State {
  count: number;
}

type Action = { type: 'reset', count: number } | { type: 'ADD_COUNT', count: number } | { type: 'REDUCE_COUNT', count: number };

function count(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_COUNT':
      return { count: action.count };
    case 'REDUCE_COUNT':
      return { count: action.count};
    case 'reset':
      return { count: 0 };
    default:
      // throw new Error();
      return { count: 0 };
  }
}

export default count