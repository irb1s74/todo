import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from 'app/providers/AppProvider'
import App from './app/App'
import 'app/styles/index.scss'

const container = document.getElementById('root')

if (container == null) {
  throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение')
}

const root = createRoot(container)

root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
)
