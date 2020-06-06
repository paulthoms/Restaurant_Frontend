import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};

const valueGlobal = (state = 0, action) => {
    console.log(action);
    switch (action.type) {
        case "CHANGE_VALUE":
            return action.value;
        default:
            return state;
    }
}

const actionBar = (state = window.location.pathname, action) => {
    console.log(action.link);
    switch (action.type) {
        case "CHANGE_ACTION_BAR":
            return action.link;
        default:
            return state;
    }
}

export default combineReducers({
    todos,
    visibilityFilter,
    valueGlobal,
    actionBar
});
