import React from 'react'
import ReactDOM from 'react-dom/client'
import {store, persistor} from "./redux/store.js"
import {Provider} from "react-redux"
import App from './App.jsx'
import './index.css'
import {app} from "./firebase.config"
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}><App /></PersistGate> 
    </Provider>
  </React.StrictMode>,
)
