import { Component } from "react";
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Algo salió mal...</h2>
          <details>
            <summary>Click for more details</summary>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            <pre>{this.state.info && this.state.info.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;