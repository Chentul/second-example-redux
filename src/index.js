import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.component';
import configureStore from './store/configure.store';
import { incrementCount, decrementCount, resetCount } from './actions/count.actions';

const store = configureStore();

const handleIncrementBy = () => {
	store.dispatch(incrementCount({ incrementBy: 1 }));
	render();
};

const handleDecrementBy = () => {
	store.dispatch(decrementCount({ decrementBy: 1}));
	render();
};

const handleResetCount = () => {
	store.dispatch(resetCount());
	render();
};

const render = () => {
	ReactDOM.render(
		<App 
			incrementCount={handleIncrementBy}
			decrementCount={handleDecrementBy}
			resetCount={handleResetCount}
			store={store} />,
		document.getElementById('root')
	);
};

render();