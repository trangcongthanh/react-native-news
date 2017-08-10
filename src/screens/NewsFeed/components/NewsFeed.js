import React from 'react'
import { View, Image, AppState, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styles from './style'
import Header from '../../../components/Header'
import List from '../../../components/List'
import TabBarIcon from '../../../components/TabBarIcon'
import Loading from '../../../components/Loading'
import iconActive from '../../../assets/newsfeed.png'
import iconInactive from '../../../assets/newsfeed-inactive.png'
import iconInfo from '../../../assets/info.png'

const propTypes = {
  news: PropTypes.object,
  getArticles: PropTypes.func.isRequired,
  bookmarkArticle: PropTypes.func.isRequired,
  unbookmarkArticle: PropTypes.func.isRequired,
  refreshArticles: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

const defaultProps = {
  news: {},
}

const navigationOptions = {
  title: 'News Feed',
  tabBarIcon: (props) => <TabBarIcon {...props} active={iconActive} inactive={iconInactive} />,
}

const SHOW = 5

class NewsFeed extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      reachedLastItem: false,
      page: 1,
      totalPage: 1,
      show: SHOW,
      appState: 'active',
      articles: [],
      refreshing: false,
    }
    this.onBookmark = this.onBookmark.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.onResume = this.onResume.bind(this)
    this.isBookmark = this.isBookmark.bind(this)
    this.renderList = this.renderList.bind(this)
  }

  componentWillMount() {
    const { onResume } = this
    const { getArticles } = this.props
    getArticles()
    AppState.addEventListener('change', onResume)
  }

  componentWillReceiveProps(nextProps) {
    const { news: { articles } } = nextProps
    const totalPage = Math.ceil(articles.length / SHOW)
    const { page } = this.state
    const offset = page * SHOW
    this.setState({
      reachedLastItem: false,
      totalPage,
      articles: articles.slice(0, offset),
    })
  }

  componentWillUnmount() {
    const { onResume } = this
    AppState.removeListener('change', onResume)
  }

  onBookmark = (value) => {
    const { unbookmarkArticle, bookmarkArticle } = this.props
    const { isBookmark } = this
    if (isBookmark(value)) {
      unbookmarkArticle(value)
    } else {
      bookmarkArticle(value)
    }
  }

  onLoadMore = () => {
    const { page, reachedLastItem, totalPage, show } = this.state
    const { news: { articles } } = this.props
    if (!reachedLastItem) {
      const nextPage = page + 1
      const offset = nextPage * show
      const isLastPage = totalPage < nextPage
      this.setState({
        page: nextPage,
        articles: articles.slice(0, offset),
        reachedLastItem: isLastPage,
      })
    }
  }

  onRefresh = () => {
    const { articles } = this.state
    const { refreshArticles } = this.props
    if (articles.length > 0) {
      this.setState(
        {
          refreshing: true,
        },
        () => {
          refreshArticles(() => {
            this.setState({
              refreshing: false,
            })
          })
        },
      )
    }
  }

  onResume = (state) => {
    const { appState } = this.state
    const { getArticles } = this.props
    if (appState.match(/inactive/) && state === 'active') {
      getArticles()
    }
    this.setState({
      appState: state,
    })
  }

  isBookmark = (article) => {
    const { news: { bookmark } } = this.props
    return _.some(bookmark, article)
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
    const { onBookmark, onLoadMore, onRefresh, isBookmark } = this
    const { articles, refreshing } = this.state
    return (
      <List
        data={articles}
        onBookmarkArticle={onBookmark}
        isBookmark={isBookmark}
        keyExtractor={(item, index) => `${item.publishedAt}-${index}`}
        onEndReached={onLoadMore}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.7}
      />
    )
  }

  render() {
    const { news: { inProgress } } = this.props
    const { renderList, renderHeaderRight } = this
    return (
      <View style={styles.container}>
        <Header
          title="Today"
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

NewsFeed.propTypes = propTypes

NewsFeed.defaultProps = defaultProps

NewsFeed.navigationOptions = navigationOptions

export default NewsFeed
