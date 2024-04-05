"use strict";var nVUNITS={_dummy_:null};nVUNITS.price_min=function(){return Number($('#price-min').val())};nVUNITS.price_max=function(){return Number($('#price-max').val())};nVUNITS.service_area_min=function(){return Number($('#service_area-min').val())};nVUNITS.service_area_max=function(){return Number($('#service_area-max').val())};nVUNITS.noise_level_min=function(){return Number($('#noise_level-min').val())};nVUNITS.noise_level_max=function(){return Number($('#noise_level-max').val())};nVUNITS.power_min=function(){return Number($('#power_-min').val())};nVUNITS.power_max=function(){return Number($('#power_-max').val())};nVUNITS.filter_price_init=function(){var v_step=Number($("#vunits-filter-price-min").attr('step')); $("#vunits-filter-price-min").attr('min',nVUNITS.price_min()); $("#vunits-filter-price-min").attr('max',nVUNITS.price_max()); $("#vunits-filter-price-min").val(nVUNITS.price_min); $("#vunits-filter-price-max").attr('min',nVUNITS.price_min()); $("#vunits-filter-price-max").attr('max',nVUNITS.price_max()); $("#vunits-filter-price-max").val(nVUNITS.price_min());var v_units_filter_price_min=parseInt($("#vunits-filter-price-min").attr('min').trim(),10);var v_units_filter_price_max=parseInt($("#vunits-filter-price-max").attr('max').trim(),10); $("#vunits-filter-price-slider").slider({animate:true,values:[v_units_filter_price_min,v_units_filter_price_max],range:true,min:v_units_filter_price_min,max:v_units_filter_price_max,step:v_step,slide:function(event,ui){ $("#vunits-filter-price-min").val(ui.values[0]); $("#vunits-filter-price-max").val(ui.values[1])},change:function(event,ui){ $("#vunits-filter-price-min").val(ui.values[0]); $("#vunits-filter-price-max").val(ui.values[1])}}); $('#vunits-filter-price-min').change(function(e){ $('#vunits-filter-price-slider').slider("values",0, $(this).val())}); $('#vunits-filter-price-max').change(function(e){ $('#vunits-filter-price-slider').slider("values",1, $(this).val())}); $('#vunits-filter-price-min').change(); $('#vunits-filter-price-max').change()};nVUNITS.filter_service_area_init=function(){var v_step=Number($("#vunits-filter-service_area-min").attr('step')); $("#vunits-filter-service_area-min").attr('min',nVUNITS.service_area_min()); $("#vunits-filter-service_area-max").attr('max',nVUNITS.service_area_max());var v_units_filter_service_area_min=parseInt($("#vunits-filter-service_area-min").attr('min').trim(),10);var v_units_filter_service_area_max=parseInt($("#vunits-filter-service_area-max").attr('max').trim(),10); $("#vunits-filter-service_area-slider").slider({animate:true,values:[v_units_filter_service_area_min,v_units_filter_service_area_max],range:true,min:v_units_filter_service_area_min,max:v_units_filter_service_area_max,step:v_step,slide:function(event,ui){ $("#vunits-filter-service_area-min").val(ui.values[0]); $("#vunits-filter-service_area-max").val(ui.values[1])},change:function(event,ui){ $("#vunits-filter-service_area-min").val(ui.values[0]); $("#vunits-filter-service_area-max").val(ui.values[1])}}); $('#vunits-filter-service_area-min').change(function(e){ $('#vunits-filter-service_area-slider').slider("values",0, $(this).val())}); $('#vunits-filter-service_area-max').change(function(e){ $('#vunits-filter-service_area-slider').slider("values",1, $(this).val())}); $('#vunits-filter-service_area-min').change(); $('#vunits-filter-service_area-max').change()};nVUNITS.filter_noise_level_init=function(){var v_step=Number($("#vunits-filter-noise_level-min1").attr('step')); $("#vunits-filter-noise_level-min1").attr('min',nVUNITS.noise_level_min()); $("#vunits-filter-noise_level-min2").attr('max',nVUNITS.noise_level_min()); $("#vunits-filter-noise_level-min1").attr('value',nVUNITS.noise_level_min()); $("#vunits-filter-noise_level-min2").attr('value',nVUNITS.noise_level_min()); $("#vunits-filter-noise_level-max1").attr('min',nVUNITS.noise_level_max()); $("#vunits-filter-noise_level-max2").attr('max',nVUNITS.noise_level_max()); $("#vunits-filter-noise_level-max1").attr('value',nVUNITS.noise_level_max()); $("#vunits-filter-noise_level-max2").attr('value',nVUNITS.noise_level_max());var v_units_filter_noise_level_min1=parseInt($("#vunits-filter-noise_level-min1").attr('min').trim(),10);var v_units_filter_noise_level_min2=parseInt($("#vunits-filter-noise_level-min2").attr('max').trim(),10); $("#vunits-filter-noise_level-min-slider").slider({animate:true,values:[v_units_filter_noise_level_min1,v_units_filter_noise_level_min2],range:true,min:v_units_filter_noise_level_min1,max:v_units_filter_noise_level_min2,step:v_step,slide:function(event,ui){ $("#vunits-filter-noise_level-min1").val(ui.values[0]); $("#vunits-filter-noise_level-min2").val(ui.values[1])},change:function(event,ui){ $("#vunits-filter-noise_level-min1").val(ui.values[0]); $("#vunits-filter-noise_level-min2").val(ui.values[1])}}); $('#vunits-filter-noise_level-min1').change(function(e){ $('#vunits-filter-noise_level-slider').slider("values",0, $(this).val())}); $('#vunits-filter-noise_level-min2').change(function(e){ $('#vunits-filter-noise_level-slider').slider("values",1, $(this).val())});var v_units_filter_noise_level_max1=parseInt($("#vunits-filter-noise_level-max1").attr('min').trim(),10);var v_units_filter_noise_level_max2=parseInt($("#vunits-filter-noise_level-max2").attr('max').trim(),10); $("#vunits-filter-noise_level-max-slider").slider({animate:true,values:[v_units_filter_noise_level_max1,v_units_filter_noise_level_max2],range:true,min:v_units_filter_noise_level_max1,max:v_units_filter_noise_level_max2,step:1,slide:function(event,ui){ $("#vunits-filter-noise_level-max1").val(ui.values[0]); $("#vunits-filter-noise_level-max2").val(ui.values[1])},change:function(event,ui){ $("#vunits-filter-noise_level-max1").val(ui.values[0]); $("#vunits-filter-noise_level-max2").val(ui.values[1])}}); $('#vunits-filter-noise_level-max1').change(function(e){ $('#vunits-filter-noise_level-slider').slider("values",0, $(this).val())}); $('#vunits-filter-noise_level-max2').change(function(e){ $('#vunits-filter-noise_level-slider').slider("values",1, $(this).val())}); $('#vunits-filter-noise_level-min1').change(); $('#vunits-filter-noise_level-min2').change(); $('#vunits-filter-noise_level-max1').change(); $('#vunits-filter-noise_level-max2').change()};nVUNITS.filter_power_init=function(){var v_step=Number($("#vunits-filter-power_-min").attr('step')); $("#vunits-filter-power_-min").attr('min',nVUNITS.power_min()); $("#vunits-filter-power_-min").attr('max',nVUNITS.power_max()); $("#vunits-filter-power_-min").val(nVUNITS.power_min()); $("#vunits-filter-power_-max").attr('min',nVUNITS.power_min()); $("#vunits-filter-power_-max").attr('max',nVUNITS.power_max()); $("#vunits-filter-power_-max").val(nVUNITS.power_max());var v_units_filter_power_min=$("#vunits-filter-power_-min").attr('min')*1;var v_units_filter_power_max=$("#vunits-filter-power_-max").attr('max')*1; $("#vunits-filter-power_-slider").slider({animate:true,values:[v_units_filter_power_min,v_units_filter_power_max],range:true,min:v_units_filter_power_min,max:v_units_filter_power_max,step:v_step,slide:function(event,ui){ $("#vunits-filter-power_-min").val(ui.values[0]); $("#vunits-filter-power_-max").val(ui.values[1])},change:function(event,ui){ $("#vunits-filter-power_-min").val(ui.values[0]); $("#vunits-filter-power_-max").val(ui.values[1])}}); $('#vunits-filter-power_-min').change(function(e){ $('#vunits-filter-power_-slider').slider("values",0, $(this).val())}); $('#vunits-filter-power_-max').change(function(e){ $('#vunits-filter-power_-slider').slider("values",1, $(this).val())}); $('#vunits-filter-power_-min').change(); $('#vunits-filter-power_-max').change()};nVUNITS.filter_reset=function(){nVUNITS.filter_price_init(); $('#vunits-filter-manufacturer input[type=checkbox]').each(function(){if(!$(this).is(':checked')){ $(this).prop('checked',true); $(this).trigger('change')}}); $('#vunits-filter-work_mode input[type=checkbox]').each(function(){if(!$(this).is(':checked')){ $(this).prop('checked',true); $(this).trigger('change')}})};nVUNITS.get_manufactures_on=function(){var v_manufactures={}; $('#vunits-filter-manufacturer input[name=filter-manufacturer]:checked').each(function(){v_manufactures[this.value]=true});return v_manufactures};nVUNITS.filter_use=function(){var v_filter={};v_filter.price_min=Number($("#vunits-filter-price-min").val());v_filter.price_max=Number($("#vunits-filter-price-max").val());v_filter.noise_level_min1=Number($("#vunits-filter-noise_level-min1").val().trim());v_filter.noise_level_min2=Number($("#vunits-filter-noise_level-min2").val().trim());v_filter.noise_level_max1=Number($("#vunits-filter-noise_level-max1").val().trim());v_filter.noise_level_max2=Number($("#vunits-filter-noise_level-max2").val().trim());v_filter.power_min=Number($('#vunits-filter-power_-min').val().trim())*1000;v_filter.power_max=Number($('#vunits-filter-power_-max').val().trim())*1000; $('#vunits-list .units-item').each(function(){var v_self=$(this);var v_unit=v_self.find('.unit-item-buy');var v_manufacturer=nVUNITS.get_manufactures_on();if(v_unit){var v_data=v_unit.data();if(!v_manufacturer[v_data.manufacturer]){v_self.hide();return}if((Number(v_data.rub)<v_filter.price_min)||(Number(v_data.rub)>v_filter.price_max)){v_self.hide();return}if((Number(v_data.hpower)<v_filter.power_min)||(Number(v_data.hpower)>v_filter.power_max)){v_self.hide();return}v_self.show()}})}; $(document).ready(function(){ $('#vunits-filter-manufacturer-pop').click(function(){}); $('#vunits-filter-manufacturer-all').click(function(){}); $("#vunits-list").on('click','.unit-item-buy',function(p_event){p_event.stopPropagation();var v_data=$(this).data();nBASKET.add(v_data)}); $('#vunits-filter-manufacturer').on('change','input[type=checkbox]',function(){nVUNITS.filter_use();return}); $('#units-toolbar-image').click(function(p_event){p_event.preventDefault()});nVUNITS.filter_reset(); $('#vunits-filter-use').click(nVUNITS.filter_use); $('#vunits-filter-clear').click(function(){nVUNITS.filter_reset();nVUNITS.filter_use()});nUSER.init();var v_params=$.getUrlVars();if(v_params.m){var v_m=v_params.m.split(',');var v_manufacturers={};for(var v_i=0;v_i<v_m.length;v_i++){v_manufacturers[unescape(v_m[v_i])]=true} $('input[name=filter-manufacturer]').each(function(){ $(this).prop('checked',(v_manufacturers[this.value]?true:false))})}});