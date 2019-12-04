// add code snippets from README
// Dispatching an initial action and having a default argument in our educer

// action -> reducer -> new state  = this means that if we pass an action and a previous state to our reducer, the reducer should return the new state.

let state;

    function reducer(state = { count: 0 }, action) {
        switch (action.type) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 };
        default:
            return state;
    }
}

// reducer({ count: 0 }, { type: 'INCREASE_COUNT' });

// we can reassign the state by adding the dispatch function to our reducer.js file. This dispatch function should receive an argument of action. It can access the state because it is declared earlier in the file in global scope.

function dispatch(action) {
    state = reducer(state, action);
    render();                   // tie rendering with the dispatch funct
}

function render () {
    let container = document.getElementById('container');
    container. textContent = state.count;
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button');  // grab the button

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})         // attach event-listener to it which calls on dispatch, which in turn calls on reducer and changes the count and re-renders the view
})