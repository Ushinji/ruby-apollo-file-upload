import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@/App';

declare global {
  interface Window {
    csrfToken: string;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
