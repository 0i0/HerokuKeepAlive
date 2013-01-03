module.exports = function Config(debug) {
  var config =
    { dev :
      { debug : true
      , orign : 'http://0.0.0.0:2222'
      , port : 2222
      , sessionSecret : '50m35ecr3t'
      }
    , prod :
      { debug : false
      , orign : 'http://SOMEAPP.herokuapp.com'
      , port : process.env.PORT
      , sessionSecret : '50m35ecr3t'
      }
    }
  return config[(debug)?'dev':'prod']
}