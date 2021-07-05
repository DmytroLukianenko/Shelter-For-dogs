import Footer from './Components/footer/Footer'
import GlobalStyle from './assets/styles/GlobalStyles'
import HelpInfo from './Components/helpInfo/clientInfo'
import ClientInfo from './Components/clientInfo/shelterInfo'
import ResultPage from './Components/resultPage/resultPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import allShelters from './Redux/operations/operations'

function App() {
  const dispatch = useDispatch('')
  // dispatch(allShelters())
  useEffect(() => {
    dispatch(allShelters())
  }, [])

  return (
    <>
      <GlobalStyle />
      <ClientInfo />
      <HelpInfo />
      {/* <ResultPage /> */}

      {/* <Footer /> */}
    </>
  )
}

export default App
