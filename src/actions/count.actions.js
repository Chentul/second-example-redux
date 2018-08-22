export const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy: incrementBy
});

export const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy: decrementBy
});

export const resetCount = () => ({
	type: 'RESET'
})