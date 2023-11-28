import { FC } from 'react';

import './style.css';

import Parse from 'parse';

Parse.initialize('devist');
Parse.serverURL = 'https://engine.devist.xyz/parse';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
