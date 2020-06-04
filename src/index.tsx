import bootstrap from '@/packages/bootstrap'
import injectConfigs from './injectConfig'

const app = bootstrap(injectConfigs)
app.start()