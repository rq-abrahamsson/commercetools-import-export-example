require('dotenv').config()
const ProductTypeImport = require('sphere-product-type-import').default

const productType = {
  name: 'Test product',
  key: 'test-product',
  description: 'Description test',
  attributes: [{
    name: 'color',
    type: 'text',
    //   attributeConstraint: "None",
    //   isRequired: "false",
    //   isSearchable: "false",
    //   label: {
    //     sv: "Color"
    //   },
    //   inputTip: {
    //     sv: "What is the color"
    //   },
    //   textInputHint: "SingleLine",
    //   displayGroup: "Other"
  }]
}
const config = {
  importerConfig: {
    continueOnProblems: false
  },
  sphereClientConfig: {
    config: {
      project_key: 'test-importing-products-31',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    }
  }
}
const productTypeImport = new ProductTypeImport({}, config)

productTypeImport.importProductType(productType)
  .then(() => {
    // done importing the productType
    // look at the summary to see errors
    console.log(productTypeImport.summary)
    // the summary hast the following structure
    // {
    //   errors: [],
    //   inserted: [<some-name>],
    //   successfulImports: 1
    // }
  })