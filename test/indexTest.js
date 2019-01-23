describe( 'index.js', () => {
  describe( 'Header class', () => {
    let header
    before( () => {
      header = new Header( 'test' )
    } )

    it( 'has a render() method that returns an h1 element', () => {
      expect( header.render().outerHTML ).to.eql( "<h1></h1>" )
      expect( header.render().innerText ).to.eql( "test" )
    } )


  } )

  describe( 'Paragraph class', () => {
    let paragraph
    before( () => {
      paragraph = new Paragraph( 'test2' )

    } )

    it( 'has a render() method that returns an h1 element', () => {
      expect( paragraph.render().outerHTML ).to.eql( "<p></p>" )
      expect( paragraph.render().innerText ).to.eql( "test2" )
    } )
  } )

  describe( 'Image class', () => {
    let image

    before( () => {
      image = new Image( 'source', 'alt text' )

    } )

    it( 'has a render() method that returns an h1 element', () => {
      expect( image.render().outerHTML ).to.eql( '<img src="source" alt="alt text">' )
    } )
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