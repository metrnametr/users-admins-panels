import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ListServiceProvider } from './components/list-context'
import LocalApi from './local-api'
import store from './store'

const localApi = new LocalApi()

//localApi.setStorage('users',  [{firstName: 'Aleewex', lastName: 'Dostoevski', country: 'UK', id: 1}, {firstName: 'Aleewex', lastName: 'Dostoevski', country: 'UK', id: 1}])

console.log(localApi.getStorage())
ReactDOM.render(
<Provider store={store}>
    <ListServiceProvider value={localApi}>
        <Router>
            <App/>
        </Router>
    </ListServiceProvider>
</Provider>, document.querySelector('#root'))