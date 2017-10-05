import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './default.less';
//redux
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {checkIfUser} from "./actions/userActions";

const store = configureStore();
store.dispatch(checkIfUser());


const WithRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

const WithStore = () =>(<Provider store={store}><WithRouter/></Provider>);

ReactDOM.render(<WithStore />, document.getElementById('root'));
registerServiceWorker();
