"use strict";var nConsumables={_dummy_:null};nConsumables.price_min=function(){return Number($('#price-min').val())};nConsumables.price_max=function(){return Number($('#price-max').val())};nConsumables.req_price_min=function(){return Number($('#req_price-min').val())};nConsumables.req_price_max=function(){return Number($('#req_price-max').val())};nConsumables.filter_price_init=function(){var v_step=Number($("#units-filter-price-min").attr('step')); $("#units-filter-price-min").attr('min',nConsumables.price_min()); $("#units-filter-price-min").attr('max',nConsumables.price_max()); $("#units-filter-price-min").val(nConsumables.req_price_min()); $("#units-filter-price-max").attr('min',nConsumables.price_min()); $("#units-filter-price-max").attr('max',nConsumables.price_max()); $("#units-filter-price-max").val(nConsumables.req_price_max()); $("#units-filter-price-slider").slider({animate:true,values:[nConsumables.req_price_min(),nConsumables.req_price_max()],range:true,min:nConsumables.price_min(),max:nConsumables.price_max(),step:v_step,slide:function(event,ui){ $("#units-filter-price-min").val(ui.values[0]); $("#units-filter-price-max").val(ui.values[1])},change:function(event,ui){ $("#units-filter-price-min").val(ui.values[0]); $("#units-filter-price-max").val(ui.values[1])}}); $('#units-filter-price-min').change(function(e){ $('#units-filter-price-slider').slider("values",0, $(this).val())}); $('#units-filter-price-max').change(function(e){ $('#units-filter-price-slider').slider("values",1, $(this).val())})};nConsumables.filter_price_reset=function(){ $("#units-filter-price-min").attr('min',nConsumables.price_min()); $("#units-filter-price-min").attr('max',nConsumables.price_max()); $("#units-filter-price-min").val(nConsumables.price_min); $("#units-filter-price-max").attr('min',nConsumables.price_min()); $("#units-filter-price-max").attr('max',nConsumables.price_max()); $("#units-filter-price-max").val(nConsumables.price_min()); $('#units-filter-price-slider').slider("values",0,nConsumables.price_min()); $('#units-filter-price-slider').slider("values",1,nConsumables.price_max())};nConsumables.filter_init=function(){nConsumables.filter_price_init()};nConsumables.filter_reset=function(){nConsumables.filter_price_reset(); $('#units-filter-manufacturer input[type=checkbox]').each(function(){if(!$(this).is(':checked')){ $(this).prop('checked',true); $(this).trigger('change')}})};nConsumables.get_list_manufactures_on=function(){var v_manufactures={}; $('#units-filter-manufacturer input[name=filter-manufacturer]:checked').each(function(){v_manufactures[this.value]=true});return v_manufactures};nConsumables.get_list_utypes_on=function(){var v_utypes={}; $('#units-filter-btype input[name=filter-utype]:checked').each(function(){v_utypes[this.value]=true});return v_utypes};nConsumables.get_array_manufactures_on=function(){var v_manufactures=[]; $('#units-filter-manufacturer input[name=filter-manufacturer]:checked').each(function(){v_manufactures.push(this.value)});return v_manufactures};nConsumables.get_array_utypes_on=function(){var v_utypes=[]; $('#units-filter-utype input[name=filter-utype]:checked').each(function(){v_utypes.push(this.value)});return v_utypes};nConsumables.filter_use=function(){var v_manufacturers=nConsumables.get_array_manufactures_on();var v_utypes=nConsumables.get_array_utypes_on();var v_vars=$.getUrlVars();v_vars.m=v_manufacturers.join(',');v_vars.ut=v_utypes.join(',');v_vars.price_min=$("#units-filter-price-min").val();v_vars.price_max=$("#units-filter-price-max").val();var v_search=$.buildParams(v_vars);var v_url=window.location.origin+window.location.pathname+v_search;window.history.pushState(null,null,v_url); $.ajax({url:v_url+'&q=1',async:true,success:function(p_data){ $('#units-list').html(p_data);nConsumables.tollbar_counts_set(Number($("#units-count-show").val()),Number($("#units-count-all").val()))}})};nConsumables.tollbar_counts_get=function(){return{show:parseInt($('#units-toolbar-count-show').text().trim(),10),all:parseInt($('#units-toolbar-count-all').text().trim(),10)}};nConsumables.tollbar_counts_set=function(p_show,p_all){ $('#units-toolbar-count-show').text(p_show.toString()); $('#units-toolbar-count-all').text(p_all.toString())};nConsumables.toolbar_show_table=function(){ $('#units-toolbar-show-table').css({color:'#000000'}); $('#units-toolbar-show-tile').css({color:'#bbbbbb'})};nConsumables.toolbar_show_tile=function(){ $('#units-toolbar-show-table').css({color:'#bbbbbb'}); $('#units-toolbar-show-tile').css({color:'#000000'})}; $(document).ready(function(){nPOPUPMENU.init('#units-toolbar-sort');nPOPUPMENU.init('#units-toolbar-psize');if($('#req-format').val()==='table'){nConsumables.toolbar_show_table()}else{nConsumables.toolbar_show_tile()}nPOPUPMENU.set('#units-toolbar-sort', $('#req-sort').val());nPOPUPMENU.set('#units-toolbar-psize',Number($('#req-pgsize').val()));nPOPUPMENU.change('#units-toolbar-sort',function(){var v_args=$.getUrlVars();v_args.sort=$('#units-toolbar-sort').data('value');var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params});nPOPUPMENU.change('#units-toolbar-psize',function(){var v_args=$.getUrlVars();v_args.psz=$('#units-toolbar-psize').data('value');var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params}); $('#units-toolbar-show-tile').click(function(p_event){p_event.preventDefault();var v_args=$.getUrlVars();v_args.f='tile';var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params}); $('#units-toolbar-show-table').click(function(p_event){p_event.preventDefault();var v_args=$.getUrlVars();v_args.f='table';var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params}); $('#units-filter-manufacturer-pop').click(function(){}); $('#units-filter-manufacturer-all').click(function(){}); $("#units-list").on('click','.units-item-buy',nBASKET.buy); $('#units-filter-manufacturer').on('change','input[type=checkbox]',function(){nConsumables.filter_use();return});nConsumables.filter_init(); $('#units-filter-use').click(nConsumables.filter_use); $('#units-filter-clear').click(function(){nConsumables.filter_reset();nConsumables.filter_use()});nUSER.init();nSHAVE.init();nFIND.init();nHEADER.init();var v_params=$.getUrlVars();var v_vars=$.getUrlVars();v_vars.f='tile'; $('#units-toolbar-show-tile').attr('href','?'+ $.buildParams(v_vars));v_vars.f='table'; $('#units-toolbar-show-table').attr('href','?'+ $.buildParams(v_vars));v_vars=$.getUrlVars(); $('#units-toolbar-refresh').attr('href', $.buildParams(v_vars)); $('#units-toolbar-refresh').click(function(){nConsumables.filter_use();return});if(0&&v_params.m){var v_m=v_params.m.split(',');var v_manufacturers={};for(var v_i=0;v_i<v_m.length;v_i++){v_manufacturers[unescape(v_m[v_i])]=true} $('#units-filter-manufacturer input[name=filter-manufacturer]').each(function(){ $(this).prop('checked',(v_manufacturers[this.value]?true:false))});if(v_params.pmin){ $("#units-filter-price-min").val(v_params.pmin); $("#units-filter-price-min").change()}if(v_params.pmax){ $("#units-filter-price-max").val(v_params.pmax); $("#units-filter-price-max").change()}nConsumables.filter_use()}});