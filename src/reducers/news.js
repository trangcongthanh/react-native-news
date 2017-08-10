import _ from 'lodash'
import {
  START_REQUEST,
  END_REQUEST,
  ON_ERROR,
  GET_SOURCES,
  GET_ARTICLES,
  FOLLOW,
  UNFOLLOW,
  BOOKMARK,
  UNBOOKMARK,
} from '../constants/news'

const initState = {
  inProgress: false,
  sources: [],
  articles: [],
  error: undefined,
  following: ['bbc-news'],
  bookmark: [],
}

const news = (state = initState, action) => {
  switch (action.type) {
    case START_REQUEST:
      return Object.assign({}, state, {
        inProgress: true,
      })
    case END_REQUEST:
      return Object.assign({}, state, {
        inProgress: false,
      })
    case ON_ERROR:
      return Object.assign({}, state, {
        inProgress: false,
        error: action.payload,
      })
    case GET_SOURCES:
      return Object.assign({}, state, {
        sources: action.payload,
      })
    case GET_ARTICLES:
      return Object.assign({}, state, {
        articles: action.payload,
      })
    case FOLLOW:
      return Object.assign({}, state, {
        following: [
          action.payload,
          ...state.following,
        ],
      })
    case UNFOLLOW:
      return Object.assign({}, state, {
        following: state.following.filter((item) => item !== action.payload),
      })
    case BOOKMARK:
      return Object.assign({}, state, {
        bookmark: [
          action.payload,
          ...state.bookmark.filter((article) => !_.isEqual(article, action.payload)),
        ],
      })
    case UNBOOKMARK:
      return Object.assign({}, state, {
        bookmark: state.bookmark.filter((article) => !_.isEqual(article, action.payload)),
      })
    default:
      return state
  }
}

export default news
