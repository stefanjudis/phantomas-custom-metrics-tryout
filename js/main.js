if ( typeof window.__phantomas !== 'undefined' ) {
  ( function( phantomas ) {
    var foo = 2222;

    phantomas.setMetric( 'loooooooopTime' );
    phantomas.setMetric( 'functionCall' );

    if ( foo > 1234 ) {
      phantomas.addOffender( 'loooooooopTime', 'Value higher than expected in ' + foo );
      ++foo;
      phantomas.addOffender( 'loooooooopTime', 'Value higher than expected in ' + foo );
      ++foo;
      phantomas.addOffender( 'loooooooopTime', 'Value higher than expected in ' + foo );
    }


    var start = Date.now();

    setTimeout( function() {
      phantomas.setMetric( 'loooooooopTime', Date.now() - start );
    }, 500 );

    var a = {
      foo : function() {}
    }

    phantomas.spy( a, 'foo', function() {
      phantomas.incrMetric( 'functionCall' );
    } );

    a.foo();
    a.foo();
    a.foo();
    a.foo();

  } )( window.__phantomas );
}
