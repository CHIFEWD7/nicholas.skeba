$(function(){
  $('TweetAuthor').css('display', 'none !important');
});

$(function(){
    $('a.fixedchat').click(function(e) {
        e.preventDefault();
        $(this).next('.fixedchatpopup').css('display','block'); 
    });
});

$(function(){
    $('a.xchatclose').click(function(e) {
        e.preventDefault();
        $(this).parent('.fixedchatpopup').css('display','none'); 
    });
});


$(function(){
    $('a.navbarclose').click(function(e) {
        e.preventDefault();
        $(this).next('.navbarpopup').css('display','block'); 
    });
});

$(function(){
    $('a.navbarpopupbottom').click(function(e) {
        e.preventDefault();
        $(this).parent('.navbarpopup').css('display','none'); 
    });
});
