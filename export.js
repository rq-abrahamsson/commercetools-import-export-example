require('dotenv').config()
const ProductTypeExport = require('sphere-product-type-export').default
console.log(ProductTypeExport)

const config = {
  sphereClientConfig: {
    config: {
      project_key: 'test-importing-products-31',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    }
  },
  config: {
    outputFolder: 'output',
    delimiter: ',', // default: ,
    compressOutput: 'false', // default: false
    exportFormat: 'csv', // default: csv
    encoding: 'utf8', // default: utf8
    where: '', // default: ''
  }
}
const productTypeExport = new ProductTypeExport(config)

productTypeExport.run()
  .then(() => {
    // done exporting the productType
    // look at the summary to see errors
    console.log(productTypeExport.summary)
    // the summary hast the following structure
    // {
    //   errors: [],
    //   exported: [<some-name>],
    //   successfulExports: 1
    // }
  })