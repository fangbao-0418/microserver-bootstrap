import React from 'react'
import bootstrap from '@/packages/bootstrap'
import injectConfigs from './injectConfig'
import(
  /* webpackChunkName: "expose" */
  './expose'
)

const app = bootstrap(injectConfigs)
app.start()
