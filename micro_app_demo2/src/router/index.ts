import React, { Suspense } from 'react'
import { Route ,Routes, Navigate, useRoutes} from 'react-router-dom'

import Home from '../views/home'
import About from '../views/about'
import Blog from '../views/blog'


export default function IndexRouter () {
    const element = useRoutes([
      {
        path: '/home',
        element: Home,
      },
      {
        path: '/blog',
        element: Blog
      },
      {
        path: '/about',
        element: About
      },
    ])

    return (element)
}
