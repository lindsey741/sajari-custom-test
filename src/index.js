import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchProvider } from '@sajari/react-search-ui'
import CustomSearch from './components/CustomSearch';
import config from './config';

console.log(config);
const {pipeline, fields, categoryFilter} = config;

ReactDOM.render(
  <SearchProvider
    search={{
      pipeline,
      // fields,
      // filters: [categoryFilter]
    }}
    //searchOnLoad
  >
    <React.StrictMode>
      {/* <App /> */}
      <CustomSearch/>
    </React.StrictMode>
  </SearchProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
