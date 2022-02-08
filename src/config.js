import {Pipeline, FieldDictionary, FilterBuilder} from '@sajari/react-search-ui'

const config = {
    pipeline: new Pipeline({
        account: "1594153711901724220",
        collection: "bestbuy",
        },
        "query"
    ),
      
    fields: new FieldDictionary({
        title: "name",
        subtitle: "brand",
    }),
      
    categoryFilter: new FilterBuilder({
        name: "category",
        field: "level1",
    }),

    //props for results
    resultProps: {
        showImage: false,
        showPrice: true
    }
}

export default config;