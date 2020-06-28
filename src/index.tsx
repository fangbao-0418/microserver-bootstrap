import React from 'react'
import bootstrap from '@xt-micro-service/bootstrap'
import injectConfigs from './injectConfig'
import(
  /* webpackChunkName: "expose" */
  './expose'
)

const app = bootstrap(injectConfigs)
app.start()
