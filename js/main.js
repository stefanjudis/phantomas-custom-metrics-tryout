// check if phantomas is available
// -> this means page is visited by phantomas
if ( typeof window.__phantomas !== 'undefined' ) {
  ( function( phantomas ) {

    // add offenders for 'ourReadyMetric'
    phantomas.addOffender( 'ourReadyMetric', 'Something happened related to ourReadyMetric : someValue foo' );
    phantomas.addOffender( 'ourReadyMetric', 'Something happened related to ourReadyMetric : someValue bar' );
    phantomas.addOffender( 'ourReadyMetric', 'Something happened related to ourReadyMetric : someValue baz' );

    // set up start value
    // to calculate a time difference
    var start = Date.now();

    // set up our listener for DOMready
    // to wait for something
    document.addEventListener( 'DOMContentLoaded', function() {
      phantomas.setMetric( 'ourReadyMetric', Date.now() - start );
    }, false );


    /**
     * Define metric for counting function call of a.foo
     */
    phantomas.setMetric( 'functionCalls' );

    /**
     * Dummy object we want to spy
     * @type {Object}
     */
    var a = {
      /**
       * Function we want to spy
       */
      foo : function() {}
    }

    // set up spy for a.foo
    phantomas.spy( a, 'foo', function() {
      // increment value for metric 'functionCalls'
      phantomas.incrMetric( 'functionCalls' );
    } );

    // execute a.foo 4 times
    a.foo();
    a.foo();
    a.foo();
    a.foo();

  } )( window.__phantomas );
}
