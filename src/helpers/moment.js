import moment from 'moment'

export const fromNow = (date) => {
  const start = moment(date)
  const end = moment()
  if (end.diff(start, 'days') > 0) {
    return start.format('MMMM DD, YYYY')
  }
  return start.fromNow()
}

export const now = () => moment().format('dddd DD MMMM')
