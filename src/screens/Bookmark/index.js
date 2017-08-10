import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Bookmark from './components/Bookmark'
import { unbookmarkArticle } from '../../actions/news'

const mapStateToProps = ({ news }) => ({ news })

const mapDispatchToProps = (dispatch) => bindActionCreators({ unbookmarkArticle }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark)
