import React, { Component } from 'react'
import * as loadingTypes from 'Constants/LoadingTypes'
import LoadingRipple from './LoadingRipple'
import LoadingFacebook from './LoadingFacebook'
import LoadingEllipsis from './LoadingEllipsis'
import LoadingRoller from './LoadingRoller'

export const withLoading = (type) => (Component) => ({ isFetching, ...rest }) => {
  return (
    isFetching
    ? <div>
        {{
          [loadingTypes.ripple]: <LoadingRipple />,
          [loadingTypes.facebook]: <LoadingFacebook />,
          [loadingTypes.ellipsis]: <LoadingEllipsis />,
          [loadingTypes.roller]: <LoadingRoller />
        }[type]}
      </div>
    : <Component { ...rest } />
  )
}
