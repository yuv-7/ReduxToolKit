import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {UserStore} from './reduxStore/UserStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={UserStore}>
    <App />
  </Provider>
  
)
