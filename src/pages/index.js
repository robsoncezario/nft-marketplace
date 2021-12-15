import React from 'react'
import { Route } from 'react-router-dom'

import routes from './routes'

export default function Routes() {
  return (
    <>
      {routes.map(r => (
				<Route 
					key={'route-' + r.path[0]}
					path={r.path} 
					component={r.component} 
					exact={true} />
			))}
    </>
  )
}