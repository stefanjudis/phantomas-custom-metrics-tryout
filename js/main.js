if ( typeof window.__phantomas !== 'undefined' ) {
  ( function( phantomas ) {
    var foo = 2222;

    if ( foo > 1234 ) {
      phantomas.addOffender( 'foo', 'Value higher than expected in ' + foo );
    }
  } )( window.__phantomas );
}
