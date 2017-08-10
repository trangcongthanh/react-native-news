import React from 'react'
import { Provider } from 'react-redux'
import { Text, NetInfo } from 'react-native'
import Reactotron from 'reactotron-react-native'
import './configs/reactotron'
import Router from './components/Router'
import configure from './store'
import Splash from './layouts/Splash'

console.disableYellowBox = true // eslint-disable-line

class nativeNews extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      connection: undefined,
      appState: 'active',
      store: configure(() => this.setState({ isLoading: false })),
    }
    this.onNetInfoChange = this.onNetInfoChange.bind(this)
  }

  componentWillMount() {
    const { onNetInfoChange } = this
    NetInfo.addEventListener('change', onNetInfoChange)
  }

  componentDidMount() {
    if (__DEV__) {
      Reactotron.connect()
    }
  }

  componentWillUnmount() {
    const { onNetInfoChange } = this
    NetInfo.removeEventListener('change', onNetInfoChange)
  }

  onNetInfoChange(connection) {
    this.setState({
      connection: connection.toLowerCase(),
    })
  }

  render() {
    const { isLoading, store, connection } = this.state
    if (!connection || connection === 'none') {
      return <Splash content="Network error!" />
    }
    if (isLoading) {
      return (
        <Splash content="Loading..." />
      )
    }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default nativeNews
