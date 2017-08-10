import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getAllSource,
  followSource,
  unfollowSource,
  getArticlesByFollowingSource,
  refreshArticles,
} from '../../actions/news'
import Source from './components/Source'

const mapStateToProps = ({ news }) => ({ news })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllSource,
      followSource,
      unfollowSource,
      refreshArticles,
      getArticles: getArticlesByFollowingSource,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(Source)
