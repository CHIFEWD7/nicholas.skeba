// Customize twitter feed
var hideTwitterAttempts = 0;
function hideTwitterBoxElements() {
    setTimeout( function() {
        if ( $('[id*=twitter]').length ) {
        $('[id*=twitter]').each( function(){
            if ( $(this).width() == 220 ) {
                $(this).width( 198 ); //override min-width of 220px
            }
            var ibody = $(this).contents().find( 'body' );
            ibody.width( $(this).width() + 20 ); //remove scrollbar by adding width

            if ( ibody.find( '.timeline .stream .h-feed li.tweet' ).length ) {
            ibody.find( '.timeline' ).css( 'border', 0 );
            ibody.find( '.timeline .stream' ).css( 'overflow-x', 'hidden' );
            ibody.find( '.timeline .stream' ).css( 'overflow-y', 'scroll' );
            ibody.find( '.timeline-header').hide();
            ibody.find( '.timeline-footer').hide();
            }
            else {
                $(this).hide();
            }
        });
        }
        hideTwitterAttempts++;
        if ( hideTwitterAttempts < 3 ) {
            hideTwitterBoxElements();
        }
    }, 1500);
}