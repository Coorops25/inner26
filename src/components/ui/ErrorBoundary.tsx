import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div 
          className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-cream"
          role="alert"
        >
          <h2 className="text-2xl font-heading text-slate-is mb-4">
            Algo salió mal
          </h2>
          <p className="text-olive mb-6 text-center max-w-md">
            {this.state.error?.message || 'Ha ocurrido un error al cargar este contenido.'}
          </p>
          <button
            onClick={this.handleRetry}
            className="px-6 py-2 bg-slate-is text-white rounded hover:bg-blue-slate transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
