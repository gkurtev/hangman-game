import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    const { type, text, url, classes, action, children } = this.props;

    return type === 'link' && url ? (
      <Link className={`btn${classes ? ' ' + classes : ''}`} to={url}>
        {text ? text : children}
      </Link>
    ) : (
      <button type={type} onClick={action} className={`btn${classes ? ' ' + classes : ''}`}>
        {text ? text : children}
      </button>
    );
  }
}

export default Button;
