describe( 'index.js', () => {
  describe( 'Header class', () => {
    let header
    before( () => {
      header = new Header( 'test' )
    } )

    it( 'has a render() method that adds an h1 element to the DOM', () => {
      expect( document.querySelectorAll( 'h1' ).length ).to.eql( 0 );
      header.render()
      expect( document.querySelectorAll( 'h1' ).length ).to.eql( 1 );
    } )


  } )

  describe( 'Paragraph class', () => {
    let paragraph
    before( () => {
      paragraph = new Paragraph( 'test2' )

    } )

    it( 'has a render() method that returns an h1 element', () => {
      expect( document.querySelectorAll( 'p' ).length ).to.eql( 0 );
      paragraph.render()
      expect( document.querySelectorAll( 'p' ).length ).to.eql( 1 );
    } )
  } )

  describe( 'Image class', () => {
    let image

    before( () => {
      image = new Image( 'source', 'alt text' )

    } )

    it( 'has a render() method that returns an h1 element', () => {
      expect( document.querySelectorAll( 'img' ).length ).to.eql( 0 );
      image.render()
      expect( document.querySelectorAll( 'img' ).length ).to.eql( 1 );
    } )
  } )

  after( () => {
    document.body.innerHTML = ''
  } )

} )

describe( "index.html", () => {
  let event
  before( () => {
    event = document.createEvent( 'Event' );
    event.initEvent( 'DOMContentLoaded', true, true );
    document.dispatchEvent( event );
  } )


  it( "includes an `h1` tag with 'Static Views Lab' included in the text", () => {
    expect( document.querySelector( 'h1' ).innerText ).to.include( 'Static Views Lab' )
  } )

  it( "includes a `p` tag with 'Hello' as the text", () => {

    expect( [ ...document.querySelectorAll( 'p' ) ].map( p => p.innerText ) ).to.include( 'Hello' )
  } )

  it( "includes a `p` tag with 'World' as the text", () => {
    expect( [ ...document.querySelectorAll( 'p' ) ].map( p => p.innerText ) ).to.include( 'World' )
  } )

  it( "includes an `img` tag with the correct Dog image source and alt text", () => {
    expect( document.querySelectorAll( 'img' )[ 0 ].src ).to.eql( 'https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-oo-mvc-content/hellodog.png' )
    expect( document.querySelectorAll( 'img' )[ 0 ].alt ).to.eql( 'Dog picture' )
  } )

  it( "includes an `img` tag with the correct Cat image source and alt text", () => {
    expect( document.querySelectorAll( 'img' )[ 1 ].src ).to.eql( 'https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-oo-mvc-content/hellocat.png' )
    expect( document.querySelectorAll( 'img' )[ 1 ].alt ).to.eql( 'Cat picture' )
  } )
} )