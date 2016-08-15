'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';

import App from 'containers/app/app';

render(<App items={[1,2,3]} />, document.getElementById('js-main'));
