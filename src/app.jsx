import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import App from 'containers/App'
import 'react-select/dist/react-select.css';
import configureStore from './configureStore';

const initialState = {};
const history = createHistory();

const store = configureStore(initialState, history);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

render(<Root />, document.getElementById('app-root'));