import Footer from './Components/footer/Footer'
import GlobalStyle from './assets/styles/GlobalStyles'
import clientInfo from './Components/clientInfo/clientInfo'
import ShelterInfo from './Components/shelterInfo/shelterInfo'
import ResultPage from './Components/resultPage/resultPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import allShelters from './Redux/operations/operations'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BackGround from './Components/backGround/backGround'

function App() {
  const dispatch = useDispatch('')
  // dispatch(allShelters())
  useEffect(() => {
    dispatch(allShelters())
  }, [])

  return (
    <>
      <GlobalStyle />
      <BackGround />
      <Router>
        <Switch>
          <Route exact path="/" component={ShelterInfo} />
          <Route exact path="/clientInfo" component={clientInfo} />
          <Route exact path="/result" component={ResultPage} />
        </Switch>
        {/* <ClientInfo /> */}
        {/* <HelpInfo /> */}
        {/* <ResultPage /> */}
      </Router>

      {/* <Footer /> */}
    </>
  )
}

export default App
