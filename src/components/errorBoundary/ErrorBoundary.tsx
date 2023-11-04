import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  child: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }

    return this.props.child;
  }
}
