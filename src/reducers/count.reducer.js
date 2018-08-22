const countReducerDefaultState = { count: 0 };

const countReducer = (state = countReducerDefaultState, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
};

export default countReducer;