import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import NewsFeed from '../screens/NewsFeed'
import Bookmark from '../screens/Bookmark'
import Source from '../screens/Source'
import About from '../components/About'

const TabNav = TabNavigator({
  NewsFeed: { screen: NewsFeed },
  Bookmark: { screen: Bookmark },
  Source: { screen: Source },
}, {
  initialRouteName: 'NewsFeed',
  swipeEnabled: true,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  lazyLoad: true,
})

export default StackNavigator({
  TabNav: { screen: TabNav },
  About: { screen: About },
}, {
  initialRouteName: 'TabNav',
  headerMode: 'none',
})
