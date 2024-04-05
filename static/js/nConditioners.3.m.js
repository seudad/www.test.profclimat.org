"use strict";var nCUNITS={_dummy_:null};nCUNITS.price_min=function(){return Number($('#price-min').val())};nCUNITS.price_max=function(){return Number($('#price-max').val())};nCUNITS.service_area_min=function(){return Number($('#service_area-min').val())};nCUNITS.service_area_max=function(){return Number($('#service_area-max').val())};nCUNITS.noise_level_min=function(){return Number($('#noise_level-min').val())};nCUNITS.noise_level_max=function(){return Number($('#noise_level-max').val())};nCUNITS.power_cooling_min=function(){return Number($('#power_cooling-min').val())};nCUNITS.power_cooling_max=function(){return Number($('#power_cooling-max').val())};nCUNITS.power_heating_min=function(){return Number($('#power_heating-min').val())};nCUNITS.power_heating_max=function(){return Number($('#power_heating-max').val())};nCUNITS.req_price_min=function(){return Number($('#req_price-min').val())};nCUNITS.req_price_max=function(){return Number($('#req_price-max').val())};nCUNITS.req_service_area_min=function(){return Number($('#req_service_area-min').val())};nCUNITS.req_service_area_max=function(){return Number($('#req_service_area-max').val())};nCUNITS.req_noise_level_min=function(){return Number($('#req_noise_level-min').val())};nCUNITS.req_noise_level_max=function(){return Number($('#req_noise_level-max').val())};nCUNITS.req_power_cooling_min=function(){return Number($('#req_power_cooling-min').val())};nCUNITS.req_power_cooling_max=function(){return Number($('#req_power_cooling-max').val())};nCUNITS.req_power_heating_min=function(){return Number($('#req_power_heating-min').val())};nCUNITS.req_power_heating_max=function(){return Number($('#req_power_heating-max').val())};nCUNITS.filter_price_init=function(){var v_step=Number($("#cunits-filter-price-min").attr('step')); $("#cunits-filter-price-min").attr('min',nCUNITS.price_min()); $("#cunits-filter-price-min").attr('max',nCUNITS.price_max()); $("#cunits-filter-price-min").val(nCUNITS.req_price_min()); $("#cunits-filter-price-max").attr('min',nCUNITS.price_min()); $("#cunits-filter-price-max").attr('max',nCUNITS.price_max()); $("#cunits-filter-price-max").val(nCUNITS.req_price_max()); $("#cunits-filter-price-slider").slider({animate:true,values:[nCUNITS.req_price_min(),nCUNITS.req_price_max()],range:true,min:nCUNITS.price_min(),max:nCUNITS.price_max(),step:v_step,slide:function(event,ui){ $("#cunits-filter-price-min").val(ui.values[0]); $("#cunits-filter-price-max").val(ui.values[1])},change:function(event,ui){ $("#cunits-filter-price-min").val(ui.values[0]); $("#cunits-filter-price-max").val(ui.values[1])}}); $('#cunits-filter-price-min').change(function(e){ $('#cunits-filter-price-slider').slider("values",0, $(this).val())}); $('#cunits-filter-price-max').change(function(e){ $('#cunits-filter-price-slider').slider("values",1, $(this).val())})};nCUNITS.filter_price_reset=function(){ $("#cunits-filter-price-min").attr('min',nCUNITS.price_min()); $("#cunits-filter-price-min").attr('max',nCUNITS.price_max()); $("#cunits-filter-price-min").val(nCUNITS.price_min); $("#cunits-filter-price-max").attr('min',nCUNITS.price_min()); $("#cunits-filter-price-max").attr('max',nCUNITS.price_max()); $("#cunits-filter-price-max").val(nCUNITS.price_min()); $('#cunits-filter-price-slider').slider("values",0,nCUNITS.price_min()); $('#cunits-filter-price-slider').slider("values",1,nCUNITS.price_max())};nCUNITS.filter_service_area_init=function(){var v_step=Number($("#cunits-filter-service_area-min").attr('step')); $("#cunits-filter-service_area-min").attr('min',nCUNITS.service_area_min()); $("#cunits-filter-service_area-max").attr('max',nCUNITS.service_area_max());var v_units_filter_service_area_min=parseInt($("#cunits-filter-service_area-min").attr('min').trim(),10);var v_units_filter_service_area_max=parseInt($("#cunits-filter-service_area-max").attr('max').trim(),10); $("#cunits-filter-service_area-slider").slider({animate:true,values:[v_units_filter_service_area_min,v_units_filter_service_area_max],range:true,min:v_units_filter_service_area_min,max:v_units_filter_service_area_max,step:v_step,slide:function(event,ui){ $("#cunits-filter-service_area-min").val(ui.values[0]); $("#cunits-filter-service_area-max").val(ui.values[1])},change:function(event,ui){ $("#cunits-filter-service_area-min").val(ui.values[0]); $("#cunits-filter-service_area-max").val(ui.values[1])}}); $('#cunits-filter-service_area-min').change(function(e){ $('#cunits-filter-service_area-slider').slider("values",0, $(this).val())}); $('#cunits-filter-service_area-max').change(function(e){ $('#cunits-filter-service_area-slider').slider("values",1, $(this).val())}); $('#cunits-filter-service_area-min').change(); $('#cunits-filter-service_area-max').change()};nCUNITS.filter_service_area_reset=function(){ $("#cunits-filter-service_area-min").attr('min',nCUNITS.service_area_min()); $("#cunits-filter-service_area-max").attr('max',nCUNITS.service_area_max()); $('#cunits-filter-service_area-slider').slider("values",0,CUNITS.service_area_min()); $('#cunits-filter-service_area-slider').slider("values",1,CUNITS.service_area_max()); $('#cunits-filter-service_area-min').change(); $('#cunits-filter-service_area-max').change()};nCUNITS.filter_noise_level_init=function(){var v_step=Number($("#cunits-filter-noise_level-min1").attr('step')); $("#cunits-filter-noise_level-min1").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-min1").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-min2").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-min2").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-min1").val(nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-min2").val(nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-max1").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-max1").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-max2").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-max2").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-max1").val(nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-max2").val(nCUNITS.noise_level_max());var v_units_filter_noise_level_min1=Number($("#cunits-filter-noise_level-min1").attr('min'));var v_units_filter_noise_level_min2=Number($("#cunits-filter-noise_level-min2").attr('max')); $("#cunits-filter-noise_level-min-slider").slider({animate:true,values:[v_units_filter_noise_level_min1,v_units_filter_noise_level_min2],range:true,min:v_units_filter_noise_level_min1,max:v_units_filter_noise_level_min2,step:v_step,slide:function(p_event,p_ui){ $("#cunits-filter-noise_level-min1").val(p_ui.values[0]); $("#cunits-filter-noise_level-min2").val(p_ui.values[1])},change:function(p_event,p_ui){ $("#cunits-filter-noise_level-min1").val(p_ui.values[0]); $("#cunits-filter-noise_level-min2").val(p_ui.values[1])}}); $('#cunits-filter-noise_level-min1').change(function(p_event){ $('#cunits-filter-noise_level-min-slider').slider("values",0, $(this).val())}); $('#cunits-filter-noise_level-min2').change(function(p_event){ $('#cunits-filter-noise_level-min-slider').slider("values",1, $(this).val())});var v_units_filter_noise_level_max1=Number($("#cunits-filter-noise_level-max1").attr('min'));var v_units_filter_noise_level_max2=Number($("#cunits-filter-noise_level-max2").attr('max')); $("#cunits-filter-noise_level-max-slider").slider({animate:true,values:[v_units_filter_noise_level_max1,v_units_filter_noise_level_max2],range:true,min:v_units_filter_noise_level_max1,max:v_units_filter_noise_level_max2,step:1,slide:function(p_event,p_ui){ $("#cunits-filter-noise_level-max1").val(p_ui.values[0]); $("#cunits-filter-noise_level-max2").val(p_ui.values[1])},change:function(p_event,p_ui){ $("#cunits-filter-noise_level-max1").val(p_ui.values[0]); $("#cunits-filter-noise_level-max2").val(p_ui.values[1])}}); $('#cunits-filter-noise_level-max1').change(function(p_e){ $('#cunits-filter-noise_level-max-slider').slider("values",0, $(this).val())}); $('#cunits-filter-noise_level-max2').change(function(p_e){ $('#cunits-filter-noise_level-max-slider').slider("values",1, $(this).val())}); $('#cunits-filter-noise_level-min1').change(); $('#cunits-filter-noise_level-min2').change(); $('#cunits-filter-noise_level-max1').change(); $('#cunits-filter-noise_level-max2').change()};nCUNITS.filter_noise_level_reset=function(){ $("#cunits-filter-noise_level-min1").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-min1").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-min2").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-min2").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-min1").val(nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-min2").val(nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-max1").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-max1").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-max2").attr('min',nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-max2").attr('max',nCUNITS.noise_level_max()); $("#cunits-filter-noise_level-max1").val(nCUNITS.noise_level_min()); $("#cunits-filter-noise_level-max2").val(nCUNITS.noise_level_max()); $('#cunits-filter-noise_level-min-slider').slider("values",0,nCUNITS.noise_level_min()); $('#cunits-filter-noise_level-min-slider').slider("values",1,nCUNITS.noise_level_max()); $('#cunits-filter-noise_level-max-slider').slider("values",0,nCUNITS.noise_level_min()); $('#cunits-filter-noise_level-max-slider').slider("values",1,nCUNITS.noise_level_max()); $('#cunits-filter-noise_level-min1').change(); $('#cunits-filter-noise_level-min2').change(); $('#cunits-filter-noise_level-max1').change(); $('#cunits-filter-noise_level-max2').change()};nCUNITS.filter_power_cooling_init=function(){var v_step=Number($("#cunits-filter-power_cooling-min").attr('step')); $("#cunits-filter-power_cooling-min").attr('min',nCUNITS.power_cooling_min()); $("#cunits-filter-power_cooling-min").attr('max',nCUNITS.power_cooling_max()); $("#cunits-filter-power_cooling-min").val(nCUNITS.req_power_cooling_min()); $("#cunits-filter-power_cooling-max").attr('min',nCUNITS.power_cooling_min()); $("#cunits-filter-power_cooling-max").attr('max',nCUNITS.power_cooling_max()); $("#cunits-filter-power_cooling-max").val(nCUNITS.req_power_cooling_max()); $("#cunits-filter-power_cooling-slider").slider({animate:true,values:[nCUNITS.req_power_cooling_min(),nCUNITS.req_power_cooling_max()],range:true,min:nCUNITS.power_cooling_min(),max:nCUNITS.power_cooling_max(),step:v_step,slide:function(event,ui){ $("#cunits-filter-power_cooling-min").val(ui.values[0]); $("#cunits-filter-power_cooling-max").val(ui.values[1])},change:function(event,ui){ $("#cunits-filter-power_cooling-min").val(ui.values[0]); $("#cunits-filter-power_cooling-max").val(ui.values[1])}}); $('#cunits-filter-power_cooling-min').change(function(e){ $('#cunits-filter-power_cooling-slider').slider("values",0, $(this).val())}); $('#cunits-filter-power_cooling-max').change(function(e){ $('#cunits-filter-power_cooling-slider').slider("values",1, $(this).val())})};nCUNITS.filter_power_cooling_reset=function(){ $("#cunits-filter-power_cooling-min").attr('min',nCUNITS.power_cooling_min()); $("#cunits-filter-power_cooling-min").attr('max',nCUNITS.power_cooling_max()); $("#cunits-filter-power_cooling-min").val(nCUNITS.power_cooling_min()); $("#cunits-filter-power_cooling-max").attr('min',nCUNITS.power_cooling_min()); $("#cunits-filter-power_cooling-max").attr('max',nCUNITS.power_cooling_max()); $("#cunits-filter-power_cooling-max").val(nCUNITS.power_cooling_max()); $('#cunits-filter-power_cooling-slider').slider("values",0,nCUNITS.power_cooling_min()); $('#cunits-filter-power_cooling-slider').slider("values",1,nCUNITS.power_cooling_max())};nCUNITS.filter_power_heating_init=function(){var v_step=Number($("#cunits-filter-power_heating-min").attr('step')); $("#cunits-filter-power_heating-min").attr('min',nCUNITS.power_heating_min()); $("#cunits-filter-power_heating-min").attr('max',nCUNITS.power_heating_max()); $("#cunits-filter-power_heating-min").val(nCUNITS.req_power_heating_min()); $("#cunits-filter-power_heating-max").attr('min',nCUNITS.power_heating_min()); $("#cunits-filter-power_heating-max").attr('max',nCUNITS.power_heating_max()); $("#cunits-filter-power_heating-max").val(nCUNITS.req_power_heating_max()); $("#cunits-filter-power_heating-slider").slider({animate:true,values:[nCUNITS.req_power_heating_min(),nCUNITS.req_power_heating_max()],range:true,min:nCUNITS.power_heating_min(),max:nCUNITS.power_heating_max(),step:v_step,slide:function(event,ui){ $("#cunits-filter-power_heating-min").val(ui.values[0]); $("#cunits-filter-power_heating-max").val(ui.values[1])},change:function(event,ui){ $("#cunits-filter-power_heating-min").val(ui.values[0]); $("#cunits-filter-power_heating-max").val(ui.values[1])}}); $('#cunits-filter-power_heating-min').change(function(e){ $('#cunits-filter-power_heating-slider').slider("values",0, $(this).val())}); $('#cunits-filter-power_heating-max').change(function(e){ $('#cunits-filter-power_heating-slider').slider("values",1, $(this).val())})};nCUNITS.filter_power_heating_reset=function(){ $("#cunits-filter-power_heating-min").attr('min',nCUNITS.power_heating_min()); $("#cunits-filter-power_heating-min").attr('max',nCUNITS.power_heating_max()); $("#cunits-filter-power_heating-min").val(nCUNITS.power_heating_min()); $("#cunits-filter-power_heating-max").attr('min',nCUNITS.power_heating_min()); $("#cunits-filter-power_heating-max").attr('max',nCUNITS.power_heating_max()); $("#cunits-filter-power_heating-max").val(nCUNITS.power_heating_max()); $('#cunits-filter-power_heating-slider').slider("values",0,nCUNITS.power_heating_min()); $('#cunits-filter-power_heating-slider').slider("values",1,nCUNITS.power_heating_max())};nCUNITS.filter_inv_reset=function(){ $("#cunits-filter-inv1").prop('checked',false); $("#cunits-filter-inv2").prop('checked',false); $("#cunits-filter-inv3").prop('checked',true)};nCUNITS.filter_work_mode_reset=function(){ $("#cunits-filter-work_mode1").prop('checked',false); $("#cunits-filter-work_mode2").prop('checked',false); $("#cunits-filter-work_mode3").prop('checked',true)};nCUNITS.filter_init=function(){nCUNITS.filter_price_init();nCUNITS.filter_power_cooling_init();nCUNITS.filter_power_heating_init();nCUNITS.filter_inv_reset()};nCUNITS.filter_reset=function(){nCUNITS.filter_price_reset();nCUNITS.filter_power_cooling_reset();nCUNITS.filter_power_heating_reset();nCUNITS.filter_inv_reset();nCUNITS.filter_work_mode_reset(); $('#cunits-filter-manufacturer input[type=checkbox]').each(function(){ $(this).prop('checked',false)}); $('#cunits-filter-btype input[type=checkbox]').each(function(){ $(this).prop('checked',false)}); $('#cunits-filter-indoor_units_number input[type=checkbox]').each(function(){ $(this).prop('checked',false)})};nCUNITS.get_list_manufactures_on=function(){var v_manufactures={}; $('#cunits-filter-manufacturer input[name=filter-manufacturer]:checked').each(function(){v_manufactures[this.value]=true});return v_manufactures};nCUNITS.get_list_btypes_on=function(){var v_btypes={}; $('#cunits-filter-btype input[name=filter-btype]:checked').each(function(){v_btypes[this.value]=true});return v_btypes};nCUNITS.get_array_manufactures_on=function(){var v_manufactures=[]; $('#cunits-filter-manufacturer input[name=filter-manufacturer]:checked').each(function(){v_manufactures.push(this.value)});return v_manufactures};nCUNITS.get_array_btypes_on=function(){var v_btypes=[]; $('#cunits-filter-btype input[name=filter-btype]:checked').each(function(){v_btypes.push(this.value)});return v_btypes};nCUNITS.get_indoor_units_number=function(){var v_indoor_units_number=[]; $('#cunits-filter-indoor_units_number input:checked').each(function(){v_indoor_units_number.push(this.value)});return v_indoor_units_number};nCUNITS.filter_use=function(){ $('#_running').show();var v_manufacturers=nCUNITS.get_array_manufactures_on();for(let v_i=0;v_i<v_manufacturers.length;v_i++){v_manufacturers[v_i]=encodeURIComponent(v_manufacturers[v_i])}var v_btypes=nCUNITS.get_array_btypes_on();var v_vars=$.getUrlVars();v_vars.m=v_manufacturers.join(',');v_vars.bt=v_btypes.join(',');v_vars.price_min=$("#cunits-filter-price-min").val();v_vars.price_max=$("#cunits-filter-price-max").val();v_vars.pcmin=Number($('#cunits-filter-power_cooling-min').val().trim())*1000;v_vars.pcmax=Number($('#cunits-filter-power_cooling-max').val().trim())*1000;v_vars.phmin=Number($('#cunits-filter-power_heating-min').val().trim())*1000;v_vars.phmax=Number($('#cunits-filter-power_heating-max').val().trim())*1000;if($('#cunits-filter-work_mode1').is(':checked')){v_vars.cold_only=1;v_vars.cold_and_heat=0}else if($('#cunits-filter-work_mode2').is(':checked')){v_vars.cold_only=0;v_vars.cold_and_heat=1}else{v_vars.cold_only=1;v_vars.cold_and_heat=1}if($('#cunits-filter-inv1').is(':checked')){v_vars.inv=1}else if($('#cunits-filter-inv2').is(':checked')){v_vars.inv=2}else{v_vars.inv=3}var v_indoor_units_number=nCUNITS.get_indoor_units_number();if(v_indoor_units_number.length){v_vars.uin=v_indoor_units_number.join(",")}else{delete v_vars.uin}var v_search=$.buildParams(v_vars);var v_url=window.location.origin+window.location.pathname+v_search;window.history.pushState(null,null,v_url); $.ajax({url:v_url+'&q=1',async:true,dataType:'html',error:function(p_XHR,p_textStatus,p_errorThrown){ $('#_running').hide()},success:function(p_data){ $('#cunits-list').html(p_data); $('#_running').hide();nCUNITS.tollbar_counts_set(Number($("#units-count-show").val()),Number($("#units-count-all").val()))}})};nCUNITS.tollbar_counts_get=function(){return{show:parseInt($('#units-toolbar-count-show').text().trim(),10),all:parseInt($('#units-toolbar-count-all').text().trim(),10)}};nCUNITS.tollbar_counts_set=function(p_show,p_all){ $('#units-toolbar-count-show').text(p_show.toString()); $('#units-toolbar-count-all').text(p_all.toString())};nCUNITS.toolbar_show_table=function(){ $('#units-toolbar-show-table').css({color:'#000000'}); $('#units-toolbar-show-tile').css({color:'#bbbbbb'})};nCUNITS.toolbar_show_tile=function(){ $('#units-toolbar-show-table').css({color:'#bbbbbb'}); $('#units-toolbar-show-tile').css({color:'#000000'})}; $(document).ready(function(){nPOPUPMENU.init('#units-toolbar-sort');nPOPUPMENU.init('#units-toolbar-psize');if($('#req-format').val()==='table'){nCUNITS.toolbar_show_table()}else{nCUNITS.toolbar_show_tile()}nPOPUPMENU.set('#units-toolbar-sort', $('#req-sort').val());nPOPUPMENU.set('#units-toolbar-psize',Number($('#req-pgsize').val()));nPOPUPMENU.change('#units-toolbar-sort',function(){var v_args=$.getUrlVars();v_args.sort=$('#units-toolbar-sort').data('value');var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params});nPOPUPMENU.change('#units-toolbar-psize',function(){var v_args=$.getUrlVars();v_args.psz=$('#units-toolbar-psize').data('value');var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params}); $('#units-toolbar-show-tile').click(function(p_event){p_event.preventDefault();var v_args=$.getUrlVars();v_args.f='tile';var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params}); $('#units-toolbar-show-table').click(function(p_event){p_event.preventDefault();var v_args=$.getUrlVars();v_args.f='table';var v_params=$.buildParams(v_args);var v_url=window.location.origin+window.location.pathname;window.location.href=v_url+v_params}); $("#cunits-list").on('click','.units-item-buy',nBASKET.buy); $('#cunits-filter-manufacturer').on('change','input[type=checkbox]',function(){nCUNITS.filter_use();return}); $('#cunits-filter-work_mode').on('change','input[type=checkbox]',function(){nCUNITS.filter_use();return}); $('#cunits-filter-btype').on('change','input[type=checkbox]',function(){nCUNITS.filter_use();return}); $('#cunits-filter-inv').on('change','input[type=radio]',function(){nCUNITS.filter_use();return}); $('#cunits-filter-work_mode').on('change','input[type=radio]',function(){nCUNITS.filter_use();return}); $('#cunits-filter-manufacturer-pop').click(function(){var v_items=$('#cunits-filter-manufacturer label');for(var v_i=0;v_i<v_items.length;v_i++){if($(v_items[v_i]).data('pop')===0){ $(v_items[v_i]).hide()}} $('#cunits-filter-manufacturer-all').removeClass('filter-box-bottom-press'); $('#cunits-filter-manufacturer-pop').addClass('filter-box-bottom-press')}); $('#cunits-filter-manufacturer-all').click(function(){var v_items=$('#cunits-filter-manufacturer label');for(var v_i=0;v_i<v_items.length;v_i++){if($(v_items[v_i]).data('pop')===0){ $(v_items[v_i]).show()}} $('#cunits-filter-manufacturer-pop').removeClass('filter-box-bottom-press'); $('#cunits-filter-manufacturer-all').addClass('filter-box-bottom-press')}); $('#cunits-refs-manufacturer-pop').click(function(){var v_items=$('#cunits-refs-manufacturer a');for(var v_i=0;v_i<v_items.length;v_i++){if($(v_items[v_i]).data('pop')===0){ $(v_items[v_i]).hide()}} $('#cunits-refs-manufacturer-all').removeClass('filter-box-bottom-press'); $('#cunits-refs-manufacturer-pop').addClass('filter-box-bottom-press')}); $('#cunits-refs-manufacturer-all').click(function(){var v_items=$('#cunits-refs-manufacturer a');for(var v_i=0;v_i<v_items.length;v_i++){if($(v_items[v_i]).data('pop')===0){ $(v_items[v_i]).show()}} $('#cunits-refs-manufacturer-pop').removeClass('filter-box-bottom-press'); $('#cunits-refs-manufacturer-all').addClass('filter-box-bottom-press')});nCUNITS.filter_init(); $('#cunits-filter-use').click(nCUNITS.filter_use); $('#cunits-filter-clear').click(function(){nCUNITS.filter_reset();nCUNITS.filter_use()});nUSER.init();nFIND.init();nHEADER.init();var v_params=$.getUrlVars();var v_vars=$.getUrlVars();v_vars.f='tile'; $('#units-toolbar-show-tile').attr('href', $.buildParams(v_vars));v_vars.f='table'; $('#units-toolbar-show-table').attr('href', $.buildParams(v_vars));v_vars=$.getUrlVars(); $('#units-toolbar-refresh').attr('href', $.buildParams(v_vars)); $('#units-toolbar-refresh').click(function(){nCUNITS.filter_use();return});if(v_params.inv==='1'){ $('#cunits-filter-inv1').prop('checked',true); $('#cunits-filter-inv2').prop('checked',false)}else if(v_params.inv==='2'){ $('#cunits-filter-inv1').prop('checked',false); $('#cunits-filter-inv2').prop('checked',true)}if(0&&v_params.m){var v_m=v_params.m.split(',');var v_manufacturers={};for(var v_i=0;v_i<v_m.length;v_i++){v_manufacturers[unescape(v_m[v_i])]=true} $('#cunits-filter-manufacturer input[name=filter-manufacturer]').each(function(){ $(this).prop('checked',(v_manufacturers[this.value]?true:false))});if(v_params.pmin){ $("#cunits-filter-price-min").val(v_params.pmin); $("#cunits-filter-price-min").change()}if(v_params.pmax){ $("#cunits-filter-price-max").val(v_params.pmax); $("#cunits-filter-price-max").change()}if(v_params.cpmin){ $('#cunits-filter-power_cooling-min').val(v_params.cpmin); $('#cunits-filter-power_cooling-min').change()}if(v_params.cpmax){ $('#cunits-filter-power_cooling-max').val(v_params.cpmax); $('#cunits-filter-power_cooling-max').change()}if(v_params.hpmin){ $('#cunits-filter-power_heating-min').val(v_params.hpmin); $('#cunits-filter-power_heating-min').change()}if(v_params.hpmax){ $('#cunits-filter-power_heating-max').val(v_params.hpmax); $('#cunits-filter-power_heating-max').change()}nCUNITS.filter_use()}});