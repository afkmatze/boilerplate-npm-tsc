const cuid = require('cuid')

export class CBMarker {

  static Create():string {
    return cuid.slug()
  }

  constructor () {}


  hello () {
    console.log ( 'hello' , cuid.slug() )
  }

}