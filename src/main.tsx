import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import store from './app/store.ts'
import { Provider } from 'react-redux'

// attaching to the `root` div in `index.html`
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
