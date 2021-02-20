import createTypography from '@material-ui/core/styles/createTypography';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

export default store
