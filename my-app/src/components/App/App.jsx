import React from 'react';
import publications from '../../publications.json';
import Reader from '../Reader/Reader';

const App = () => <Reader items={publications} />;

export default App;
