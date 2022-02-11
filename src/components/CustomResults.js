import * as React from "react";
import {useSearch} from '@sajari/react-hooks';
import { Button } from '@sajari/react-components';
import config from "../config";

function CustomResults() {
    const {results = []} = useSearch();
    const {resultProps} = config
    console.log(results);
    let nopdf = results.filter(r => {
        let v = r.values
        return !v.url.includes('pdf')
    })
    //console.log(nopdf);
    function renderResult(result) {
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
                        <h3>
                            <a href={values.url}> {values.title} </a>
                        </h3>
                    </div>
                    <div className="result-brand">
                        {values.published_time && 
                            <p>{values.published_time.split('T')[0]}</p>
                        }
                        <a href={values.url} > {values.description} </a>
                    </div>
                </div>
            </div>
            // <div className="card" key={values.id}>
            //     {resultProps.showImage &&
            //         <div className="result-image" >
            //             <img src={values.image}  alt={values.name}/>
            //         </div>
            //     }
            //     <div className="result-description">
            //         <div className="result-name">
            //             <h3>
            //                 {values.title}
            //             </h3>
            //         </div>
            //         <div className="result-brand">{values.description}</div>
            //         <div className="result-price">${values.price}</div>
            //     </div>
            //     <div className="buy-button"><Button appearance="primary">Buy now for ${values.price}</Button></div>
            // </div>
        )
    }

    return (
        <div className="results">
            {results.map(renderResult)}
        </div>
    );
}


export default CustomResults;