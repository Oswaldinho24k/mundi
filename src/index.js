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
import store from './store/configureStore';
import {Provider} from 'react-redux';


const WithRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

const WithStore = () =>(<Provider store={store}><WithRouter/></Provider>);

ReactDOM.render(<WithStore />, document.getElementById('root'));
registerServiceWorker();
