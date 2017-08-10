import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import Header from '../../../components/Header'
import TabBarIcon from '../../../components/TabBarIcon'
import Loading from '../../../components/Loading'
import iconInfo from '../../../assets/info.png'
import iconActive from '../../../assets/source.png'
import iconInactive from '../../../assets/source-inactive.png'
import Filter from './Filter'
import SourceList from './SourceList'

const propTypes = {
  news: PropTypes.object.isRequired,
  getAllSource: PropTypes.func.isRequired,
  followSource: PropTypes.func.isRequired,
  unfollowSource: PropTypes.func.isRequired,
  refreshArticles: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

const defaultProps = {}

const navigationOptions = {
  title: 'Source',
  tabBarIcon: (props) => <TabBarIcon {...props} active={iconActive} inactive={iconInactive} />,
}

class Source extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      filter: undefined,
      sources: [],
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.onFollow = this.onFollow.bind(this)
    this.isFollowing = this.isFollowing.bind(this)
    this.renderList = this.renderList.bind(this)
  }

  componentWillMount() {
    const { getAllSource } = this.props
    getAllSource()
  }

  componentWillReceiveProps(nextProps) {
    const { news: { sources, following } } = nextProps
    const { filter } = this.state
    let sourcesWithState = sources.map((item) => ({ ...item, isFollowing: following.includes(item.id) }))
    if (filter) {
      sourcesWithState = sourcesWithState.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    }
    this.setState({ sources: sourcesWithState })
  }

  onChangeText = (value) => {
    const { news: { sources } } = this.props
    const { isFollowing } = this
    const filter = sources
    .map((item) => ({ ...item, isFollowing: isFollowing(item.id) }))
    .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      filter: value,
      sources: filter,
    })
  }

  onFollow = (id) => {
    const { followSource, unfollowSource, refreshArticles } = this.props
    const { isFollowing } = this
    if (isFollowing(id)) {
      unfollowSource(id)
    } else {
      followSource(id)
    }
    refreshArticles()
  }

  isFollowing = (id) => {
    const { news: { following } } = this.props
    return following.includes(id)
  }

  renderHeaderRight = () => {
    const { navigation: { navigate } } = this.props
    return (
      <TouchableOpacity
        onPress={() => navigate('About')}
        activeOpacity={0.7}
        hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
      >
        <Image source={iconInfo} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>
    )
  }

  renderList = () => {
    const { sources, filter } = this.state
    const { onChangeText, onFollow } = this
    return (
      <SourceList
        data={sources}
        onFollow={onFollow}
        ListHeaderComponent={<Filter onChangeText={onChangeText} value={filter} />}
      />
    )
  }

  render() {
    const { news: { inProgress } } = this.props
    const { renderList, renderHeaderRight } = this
    return (
      <View style={styles.container}>
        <Header
          subTitle="OUR"
          title="Sources"
          right={renderHeaderRight}
        />
        {inProgress
          ? <Loading />
          : renderList()
        }
      </View>
    )
  }
}

Source.propTypes = propTypes

Source.defaultProps = defaultProps

Source.navigationOptions = navigationOptions

export default Source
