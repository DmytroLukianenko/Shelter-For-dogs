import GlobalStyle from './assets/styles/GlobalStyles'
import clientInfo from './Components/clientInfo/clientInfo'
import ShelterInfo from './Components/shelterInfo/shelterInfo'
import ResultPage from './Components/resultPage/resultPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import allShelters from './Redux/operations/operations'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const dispatch = useDispatch('')

  useEffect(() => {
    dispatch(allShelters())
  }, [])

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={ShelterInfo} />
          <Route exact path="/clientInfo" component={clientInfo} />
          <Route exact path="/result" component={ResultPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
