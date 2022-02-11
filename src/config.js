import {Pipeline, FieldDictionary, FilterBuilder, Variables} from '@sajari/react-search-ui'

const config = {
    pipeline: new Pipeline({
        account: "equisolvecom",
        collection: "centene-corporation",
        },
        "website"
    ),

    variables: new Variables({
        q: 'api', 
        resultsPerPage: 10,
        fields: ["_id", "title", "url", "description", "published_time"],
    }),
      
    fields: new FieldDictionary({
        title: "title",
        subtitle: "url",
        description: "description",
    }),
    
    //each filter needs its own object creation and option setup - see docs
    typeFilter: new FilterBuilder({
        name: "type",
        field: "level1",
    }),

    //props for results - this is custom so we can change as needed
    resultProps: {
        showImage: false,
        showPrice: false
    }
}

export default config;