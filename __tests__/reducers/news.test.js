import news from '../../src/reducers/news'
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
} from '../../src/constants/news'

const initState = {
  inProgress: false,
  sources: [],
  articles: [],
  error: undefined,
  following: [],
  bookmark: [],
}

const SOURCES = [
  {
    "id": "abc-news-au",
    "name": "ABC News (AU)",
    "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
    "url": "http://www.abc.net.au/news",
    "category": "general",
    "language": "en",
    "country": "au",
    "urlsToLogos": {
      "small": "",
      "medium": "",
      "large": "",
    },
    "sortBysAvailable": [
      "top",
    ],
  },
  {
    "id": "bloomberg",
    "name": "Bloomberg",
    "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
    "url": "http://www.bloomberg.com",
    "category": "business",
    "language": "en",
    "country": "us",
    "urlsToLogos": {
      "small": "",
      "medium": "",
      "large": "",
    },
    "sortBysAvailable": [
      "top",
    ],
  },
]

const ARTICLES = [
  {
    "author": "Mix",
    "title": "Tesla CEO Elon Musk says Zuckerberg’s understanding of AI is ‘limited’",
    "description": "Tesla CEO Elon Musk is not convinced that Facebook's boss Mark Zuckerberg fully comprehends the basic tenets of artificial intelligence (AI).\r\n\r\nChilling in his Palo Alto backyard, ...",
    "url": "https://thenextweb.com/artificial-intelligence/2017/07/25/tesla-elon-musk-ai-mark-zuckerberg/",
    "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/07/pxymtgstbddf251xb80d-copy.jpg",
    "publishedAt": "2017-07-25T10:55:03Z",
  },
  {
    "author": "Abhimanyu Ghoshal",
    "title": "China’s forcing its citizens to install a terrifying Big Brother app on their phones – or go to jail",
    "description": "Governments wanting to spy on the people they're meant to serve is hardly new - but China is taking things to a whole new level by injecting itself into citizens' phones.\r\n\r\nBased on ...",
    "url": "https://thenextweb.com/asia/2017/07/25/chinas-forcing-its-citizens-to-install-a-terrifying-big-brother-app-on-their-phones-or-go-to-jail/",
    "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/06/shutterstock_191085812_China.jpg",
    "publishedAt": "2017-07-25T09:10:24Z",
  },
]

describe('News reducers', () => {

  it('has default state', () => {
    expect(
      news(
        undefined,
        {
          type: 'UNKNOW_ACTION',
        },
      ),
    )
    .toEqual(initState)
  })

  it('start request', () => {
    expect(
      news(
        Object.assign({}, initState, {
          articles: ARTICLES,
        }),
        {
          type: START_REQUEST,
        },
      ),
    )
    .toEqual(Object.assign({}, initState, {
      inProgress: true,
      articles: ARTICLES,
    }))
  })

  it('get sources', () => {
    expect(
      news(
        Object.assign({}, initState, {
          inProgress: true,
        }),
        {
          type: GET_SOURCES,
          payload: SOURCES,
        },
      ),
    )
    .toEqual(
      Object.assign({}, initState, {
        inProgress: true,
        sources: SOURCES,
      }),
    )
  })

  it('get articles', () => {
    expect(
      news(
        Object.assign({}, initState, {
          inProgress: true,
          sources: SOURCES,
        }),
        {
          type: GET_ARTICLES,
          payload: ARTICLES,
        },
      ),
    )
    .toEqual(
      Object.assign({}, initState, {
        inProgress: true,
        sources: SOURCES,
        articles: ARTICLES,
      }),
    )
  })

  it('on Error', () => {
    expect(
      news(
        undefined,
        {
          type: ON_ERROR,
          payload: {
            code: 404,
            message: 'ERROR: 404 not found!',
          },
        },
      ),
    )
    .toEqual(
      Object.assign({}, initState, {
        error: {
          code: 404,
          message: 'ERROR: 404 not found!',
        },
      }),
    )
  })

  it('follow a source', () => {
    expect(
      news(
        Object.assign({}, initState, {
          inProgress: true,
          following: ['the-next-web', 'bbc'],
          sources: SOURCES,
        }),
        {
          type: FOLLOW,
          payload: 'cnn',
        },
      ),
    )
    .toEqual(
      Object.assign({}, initState, {
        inProgress: true,
        following: ['cnn', 'the-next-web', 'bbc'],
        sources: SOURCES,
      }),
    )
  })

  it('unfollow a source', () => {
    expect(
      news(
        Object.assign({}, initState, {
          inProgress: false,
          following: ['cnn', 'the-next-web', 'bbc'],
          sources: SOURCES,
        }),
        {
          type: UNFOLLOW,
          payload: 'the-next-web',
        },
      ),
    )
      , toEqual(
      Object.assign({}, initState, {
        inProgress: false,
        following: ['cnn', 'bbc'],
        sources: SOURCES,
      }),
    )
  })

  it('bookmark an article', () => {
    expect(
      news(
        Object.assign({}, initState, {
          inProgress: true,
          articles: ARTICLES,
        }),
        {
          type: BOOKMARK,
          payload: ARTICLES[0],
        },
      ),
    )
    .toEqual(
      Object.assign({}, initState, {
        inProgress: true,
        articles: ARTICLES,
        bookmark: [ARTICLES[0]],
      }),
    )
  })

  it('unbookmark an article', () => {
    expect(
      Object.assign({}, initState, {
        bookmark: ARTICLES,
      }),
      {
        type: UNBOOKMARK,
        payload: {
          "author": "Abhimanyu Ghoshal",
          "title": "China’s forcing its citizens to install a terrifying Big Brother app on their phones – or go to jail",
          "description": "Governments wanting to spy on the people they're meant to serve is hardly new - but China is taking things to a whole new level by injecting itself into citizens' phones.\r\n\r\nBased on ...",
          "url": "https://thenextweb.com/asia/2017/07/25/chinas-forcing-its-citizens-to-install-a-terrifying-big-brother-app-on-their-phones-or-go-to-jail/",
          "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/06/shutterstock_191085812_China.jpg",
          "publishedAt": "2017-07-25T09:10:24Z",
        },
      },
    )
    .toEqual(
      Object.assign({}, initState, {
        bookmark: [{
          "author": "Mix",
          "title": "Tesla CEO Elon Musk says Zuckerberg’s understanding of AI is ‘limited’",
          "description": "Tesla CEO Elon Musk is not convinced that Facebook's boss Mark Zuckerberg fully comprehends the basic tenets of artificial intelligence (AI).\r\n\r\nChilling in his Palo Alto backyard, ...",
          "url": "https://thenextweb.com/artificial-intelligence/2017/07/25/tesla-elon-musk-ai-mark-zuckerberg/",
          "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/07/pxymtgstbddf251xb80d-copy.jpg",
          "publishedAt": "2017-07-25T10:55:03Z",
        }],
      }),
    )
  })

  it('end request', () => {
    expect(
      news(
        Object.assign({}, initState, {
          inProgress: true,
        }), {
          type: END_REQUEST,
        },
      ),
    ).toEqual(
      initState,
    )
  })

})