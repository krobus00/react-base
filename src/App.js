import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Kedua from './pages/Kedua'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/kedua' exact component={Kedua} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
