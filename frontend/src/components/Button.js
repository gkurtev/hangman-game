import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    const { type, text, url, classes, action } = this.props;

    return type === 'link' && url ? (
      <Link className={`btn${classes ? ' ' + classes : ''}`} to={url}>
        {text}
      </Link>
    ) : (
      <button type={type} onClick={action} className={`btn${classes ? ' ' + classes : ''}`}>
        {text}
      </button>
    );
  }
}

export default Button;
