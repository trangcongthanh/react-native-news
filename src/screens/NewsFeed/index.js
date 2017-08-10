import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getArticlesByFollowingSource,
  bookmarkArticle,
  unbookmarkArticle,
  refreshArticles,
} from '../../actions/news'
import NewsFeed from './components/NewsFeed'

const mapStateToProps = ({ news }) => ({ news })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      bookmarkArticle,
      unbookmarkArticle,
      refreshArticles,
      getArticles: getArticlesByFollowingSource,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
