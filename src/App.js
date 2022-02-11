import './App.css';
import {Input, Results, Filter, ViewType, Pagination, ResultsPerPage} from '@sajari/react-search-ui'
import CustomResults from './components/CustomResults'

function App() {

  return (
    <div className="App">
      <div className="search-bar">
        <Input />
      </div>
      {/* <ViewType/> */}
      <ResultsPerPage options={[5, 10, 15]} />
      <div className="container">
        {/* <div className="filters">
          <Filter type="list" name="category" title="Category" />
        </div> */}
        {/* <div className="results">
          <Results />
        </div> */}
        <CustomResults />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
