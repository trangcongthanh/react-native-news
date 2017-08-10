import request from 'superagent'
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
  API_URL,
  API_KEY,
} from '../constants/news'

const startRequest = () => ({ type: START_REQUEST })
const endRequest = () => ({ type: END_REQUEST })
const onError = (error) => ({ type: ON_ERROR, payload: error })
const getSources = (sources) => ({ type: GET_SOURCES, payload: sources })
const getArticles = (articles) => ({ type: GET_ARTICLES, payload: articles })

export const followSource = (id) => (dispatch) => dispatch({ type: FOLLOW, payload: id })
export const unfollowSource = (id) => (dispatch) => dispatch({ type: UNFOLLOW, payload: id })
export const bookmarkArticle = (article) => (dispatch) => dispatch({ type: BOOKMARK, payload: article })
export const unbookmarkArticle = (article) => (dispatch) => dispatch({ type: UNBOOKMARK, payload: article })

export const getAllSource = () =>
  async (dispatch) => {
    dispatch(startRequest())
    try {
      const sources = await request.get(`${API_URL}/sources`)
      dispatch(getSources(sources.body.sources))
    } catch (e) {
      dispatch(onError('Something wrong!'))
    }
    dispatch(endRequest())
  }

const getArticlesBySourceId = async (sourceId) => {
  const data = await request.get(`${API_URL}/articles?source=${sourceId}&apiKey=${API_KEY}`)
  return data.body
}

const sortByPublishedAt = (v1, v2) => {
  const s1 = v1.publishedAt
  const s2 = v2.publishedAt
  if (s1 > s2) {
    return -1
  } else if (s2 > s1) {
    return 1
  }
  return 0
}

const getArticlesBySources = async (sources) => {
  const raw = await Promise.all(
    sources.map(async (source) => {
      const articlesBySources = await getArticlesBySourceId(source)
      return articlesBySources
    }),
  )
  let articles = []
  raw.forEach((item) => {
    if (item.status === 'ok') {
      articles = [
        ...articles,
        ...item.articles.map((article) => ({ ...article, source: item.source })),
      ]
    }
  })
  return articles.sort(sortByPublishedAt)
}

export const getArticlesByFollowingSource = () =>
  async (dispatch, getState) => {
    const sources = getState().news.following
    if (sources.length > 0) {
      dispatch(startRequest())
      try {
        const articles = await getArticlesBySources(sources)
        dispatch(getArticles(articles))
      } catch (e) {
        dispatch(onError('Something wrong!'))
      }
      dispatch(endRequest())
    }
  }

export const refreshArticles = (callback) =>
  async (dispatch, getState) => {
    const sources = getState().news.following
    try {
      const articles = await getArticlesBySources(sources)
      dispatch(getArticles(articles))
      return callback()
    } catch (e) {
      return callback()
    }
  }
