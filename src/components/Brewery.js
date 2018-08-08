import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Brewery extends PureComponent {
  render() {
    const { brewery } = this.props
    let bgColor

    switch(brewery.brewery_type) {
      case 'micro':
        bgColor = 'bg-green text-white'
        break
      case 'planning':
        bgColor = 'bg-grey-lightest text-grey-light'
        break
      case 'brewpub':
        bgColor = 'bg-orange text-white'
        break
      default:
        bgColor = 'bg-grey text-grey-dark'
    }

    return (
      <div className={`p-4 mb-2 rounded ${bgColor}`}>
        { (Object.keys(brewery).length !== 0) ?
          <div>
            <span>{brewery.name}, </span>
            { brewery.address !== '' ? <span>{brewery.address}, </span> : '' }
            { brewery.city !== '' ? <span>{brewery.city}, </span> : '' }
            { brewery.state !== '' ? <span>{brewery.state}, </span> : '' }
            { brewery.postal_code !== '' ? <span>{brewery.postal_code}, </span> : '' }
            <span>({brewery.brewery_type})</span>
          </div>
          :
          <span>No brewery selected.</span>
        }
      </div>
    )
  }
}

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery
