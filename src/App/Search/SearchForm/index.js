import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchQuotesIfNeeded } from '../actions'
import './SearchForm.css'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus()
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { searchTerm } = this.state
    const { searchQuotesIfNeeded } = this.props
    searchQuotesIfNeeded(searchTerm)
  }

  render() {
    const { searchTerm } = this.state
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          value={searchTerm}
          onChange={this.handleChange}
          ref={(node) => { this.input = node }}
        />
        <button className="search-form__button" type="submit">Search</button>
      </form>
    )
  }
}

SearchForm.propTypes = {
  searchQuotesIfNeeded: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({})

export default connect(
  mapStateToProps,
  { searchQuotesIfNeeded }
)(SearchForm)
