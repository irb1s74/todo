import { memo, Suspense, useCallback } from 'react'
import { PageLoader } from 'widget/PageLoader'
import { Route, type RouteProps, Routes } from 'react-router-dom'
import { routeConfig } from 'app/providers/router/config/routeConfig'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
})
