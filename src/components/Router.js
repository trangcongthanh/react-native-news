import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Navigator from '../configs/routes'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const defaultProps = {}

const Router = ({ dispatch, nav }) => (
  <Navigator
    navigation={
      addNavigationHelpers({
        dispatch,
        state: nav,
      })
    }
  />
)

Router.propTypes = propTypes

Router.defaultProps = defaultProps

const mapStateToProps = ({ nav }) => ({ nav })

export default connect(mapStateToProps)(Router)
