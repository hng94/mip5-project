import React, { Component } from "react";

interface PropsInterface {}

interface StateInterface {
  hasError: Boolean;
  error?: Error | null;
  info?: object;
}

class ErrorBoundary extends Component<PropsInterface, StateInterface> {
  state = { hasError: false };

  componentDidCatch(error: Error | null, info: object) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return <pre className="text-red-500 text-4xl">Something went wrong.</pre>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
