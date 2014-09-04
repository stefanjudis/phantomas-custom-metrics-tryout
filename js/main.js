if ( typeof window.__phantomas !== 'undefined' ) {
  ( function( phantomas ) {
    var foo = 2222;

    if ( foo > 1234 ) {
      phantomas.addOffender( 'foo', 'Value higher than expected in ' + foo );
      phantomas.addOffender( 'foo', 'Value higher than expected in ' + foo );
      phantomas.addOffender( 'foo', 'Value higher than expected in ' + foo );
    }


    var start = Date.now();
    for( var i = 0; i < 1000; ++i ) {

    }

    phantomas.setMetric('loooooooopTime', Date.now() - start);
  } )( window.__phantomas );
}
