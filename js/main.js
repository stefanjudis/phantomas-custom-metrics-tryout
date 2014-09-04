if ( typeof window.__phantomas !== 'undefined' ) {
  ( function( phantomas ) {
    var foo = 2222;

    phantomas.setMetric('loooooooopTime');

    if ( foo > 1234 ) {
      phantomas.addOffender( 'loooooooopTime', 'Value higher than expected in ' + foo );
      phantomas.addOffender( 'loooooooopTime', 'Value higher than expected in ' + foo );
      phantomas.addOffender( 'loooooooopTime', 'Value higher than expected in ' + foo );
    }


    var start = Date.now();

    setTimeout( function() {
      phantomas.setMetric( 'loooooooopTime', Date.now() - start );
    }, 500 );

  } )( window.__phantomas );
}
