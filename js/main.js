if ( typeof window.__phantomas !== 'undefined' ) {
  ( function( phantomas ) {
    if ( 2222 > 1234 ) {
      phantomas.addOffender( 'foo', 'Value higher than expected in jooo' );
    }
  } )( window.__phantomas );
}
