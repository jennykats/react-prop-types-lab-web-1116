const React = require('react');


class Product extends React.Component {
  render () {
    return (
      <div className="product">
          <p>{this.props.name}</p>
          <p>{this.props.producer}</p>
          <p>{this.props.hasWatermark ? true : false}</p>
          <p>{this.props.color}</p>
          <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    const checkWeight = props[propName]
     if (checkWeight < 80 || checkWeight > 300) {
       return new Error("Weight must be between 80 - 300")
     }  if (checkWeight == undefined) {
       return new Error("Weight is undefined")
     }  if (isNaN(checkWeight)) {
      return new Error ("Weight is not a number")
      }
  }


}


module.exports = Product;
