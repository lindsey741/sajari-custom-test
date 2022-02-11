import * as React from "react";
import {useSearch} from '@sajari/react-hooks';
import {Input, Pagination} from '@sajari/react-search-ui'
import config from "../config";

function CustomSearch() {
    const {pipeline, variables, resultProps} = config;

    const renderResult = result => {
        const values = result.values        
        return (
            <div className="card" key={values._id}>
                {resultProps.showImage &&
                    <div className="result-image" >
                        <img src={values.image}  alt={values.name}/>
                    </div>
                }
                <div className="result-description">
                    <div className="result-name">
                        <h4>
                            <a href={values.url}> {values.title} </a>
                        </h4>
                    </div>
                    <div className="result-brand">
                        {values.published_time && 
                            <p>{values.published_time.split('T')[0]}</p>
                        }
                        <a href={values.url} > {values.description} </a>
                    </div>
                </div>
            </div>
        )
    }

    const SearchPlayground = React.memo(() => {
        const { results = [], searching } = useSearch({ variables, pipeline });
        return (
        <div className="flex flex-col space-y-4">
            <div className="search-bar">
                <Input mode="standard"/>
            </div>
            <div>
            {searching && <p>Searching...</p>}
            {!searching && results.length > 0 && (
                <div className="results">
                    {results.map(renderResult)}
                </div>
                // <ul className="list-disc px-5 space-y-2">
                // {results.map(({ values: { title } }) => (
                //     <li key={title}>{title}</li>
                // ))}
                // </ul>
            )}
            </div>
            <Pagination/>
        </div>
        );
    });

  return <SearchPlayground />;
}


export default CustomSearch;