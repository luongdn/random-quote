import React from 'react'

export const withError = () => (Component) => ({ error, ...rest }) => {
  return(
    error
    ? <div className="error-message">
        {error}
      </div>
    : <Component { ...rest } />
  )
}
