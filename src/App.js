import GlobalStyle from './assets/styles/GlobalStyles'
import clientInfo from './Components/clientInfo/clientInfo'
import ShelterInfo from './Components/shelterInfo/shelterInfo'
import ResultPage from './Components/resultPage/resultPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={ShelterInfo} />
          <Route path="/clientInfo" component={clientInfo} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
