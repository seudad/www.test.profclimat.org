"use strict"; $(document).ready(function(){nSESSION.init(); $('.unit-item-buy').click(nBASKET.buy); $('#basket').click(function(){});var v_header=$('header');var v_main=$('main');var v_h=v_header.outerHeight(); $('header').css({position:'fixed',top:0,left:0,width:'100%'});v_main.css('margin-top',v_h+'px'); $('.unit-item-buy').show();nBASKET.show()});