import React from 'react';

const App = (props) => {
	const { 
		incrementCount: handleIncrementBy,
		decrementCount: handleDecrementBy,
		resetCount: handleResetCount,
		store
	} = props;
	return (
		<div>
			<h1>Count: {store.getState().count}</h1>
			<button onClick={handleIncrementBy}>Increment</button>
			<button onClick={handleDecrementBy}>Decrement</button>
			<button onClick={handleResetCount}>Reset</button>
		</div>
	);
};

export default App;