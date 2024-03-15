import React from 'react'
import { Provider } from 'react-redux'
import store from './store/rootReducer'
import { CardBlock, Footer, Header, Info } from './components'

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Info/>
      <CardBlock/>
      <Footer />
    </Provider>
  )
}

export default App
