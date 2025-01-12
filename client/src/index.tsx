/**
 *
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
//import { render } from 'react-dom';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
//render(<App />, document.getElementById('app'));
