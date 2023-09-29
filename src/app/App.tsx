import { memo, Suspense } from 'react'
import { AppRouter } from './providers/router'

const App = memo(() => {
  return (
    <div className='app'>
      <Suspense fallback=''>
        <AppRouter />
      </Suspense>
    </div>
  )
})
export default App
