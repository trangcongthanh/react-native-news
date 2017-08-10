/* eslint-disable */
import Reactotron, { trackGlobalErrors, openInEditor } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

console.log = Reactotron.log
console.warn = Reactotron.warn
console.error = Reactotron.error

Reactotron
  .configure({
    name: 'React Native News',
  })
  .useReactNative()
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .use(openInEditor())
  .clear()