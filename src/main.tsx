import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@/components/theme-provider'
import { store } from './store'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
