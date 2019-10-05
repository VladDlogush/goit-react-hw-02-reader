import React from 'react';
import publications from '../../publications.json';
import Reader from '../Reader/Reader';

const App = () => (
  <div>
    <Reader items={publications} />
  </div>
);

export default App;
