# marijuana-verify-server ![WeedLeaf](http://i.imgur.com/s7Bu0yy.gif)
A simple REST service that checks to see whether or not a medical marijuana patient's recommendation ID is valid or not. As I continue to build this, I will be adding more and more recommendation ID providers to the list, for now you can find the list of providers we support below. If there is a provider you want me to build into this, please drop me an email at joshterrill.dev@gmail.com

## Installation
#### NPM
To start the REST server, install the package globally with `npm install -g marijuana-verify-server` then run `marijuana-verify-server`

#### Git
```
git clone https://github.com/joshterrill/marijuana-verify-server.git
cd marijuana-verify/
npm install
npm start
```

#### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://www.heroku.com/deploy/?template=https://github.com/joshterrill/marijuana-verify)

Link to index landing page: http://marijuana-verify.herokuapp.com/

Link to live REST server: http://marijuana-verify.herokuapp.com/api/

## API
#### api.greenLife(recId)
`GET /api/greenLife/:recId`

#### api.patientIdCenter(recId, californiaId)
`GET /api/patientIdCenter/:recId/:californiaId`

## Providers
* GreenLife Medical
* Patient ID Center

## Disclaimer note
This API is not officially supported by any of these providers.

## License
ISC