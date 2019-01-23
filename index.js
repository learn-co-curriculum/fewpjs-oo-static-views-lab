document.addEventListener( "DOMContentLoaded", () => {
  let components = [
    new Header( "Static Views Lab" ),
    new Paragraph( "Hello" ),
    new Paragraph( "World" ),
    new Image( "https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-oo-mvc-content/hellodog.png", "Dog picture" ),
    new Image( "https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-oo-mvc-content/hellocat.png", "Cat picture" )
  ]

  components.forEach( component => component.render() )
} )

class Header {
  constructor( text ) {
    this._text = text
  }

  get text() {
    return this._text
  }

  render() {
    let h1 = document.createElement( 'h1' );
    h1.innerText = this.text;
    document.body.appendChild( h1 )
  }
}

class Paragraph {
  constructor( text ) {
    this._text = text
  }

  get text() {
    return this._text
  }

  render() {
    let p = document.createElement( 'p' );
    p.innerText = this.text;
    document.body.appendChild( p )
  }
}

class Image {
  constructor( src, alt ) {
    this._src = src
    this._alt = alt
  }

  get src() {
    return this._src
  }

  get alt() {
    return this._alt
  }

  render() {
    let img = document.createElement( 'img' );
    img.src = this.src;
    img.alt = this.alt;
    document.body.appendChild( img )
  }
}