var nMLINKS={_assign:false};nMLINKS.init=function(p_dest){var v_manufacturers=[];for(var v_k in nCUNITS.list){v_manufacturers.push(v_k)}v_manufacturers=v_manufacturers.sort();var v_dest=$(p_dest).empty();for(var v_i=0;v_i<v_manufacturers.length;v_i++){var v_item=$('<a/>',{href:"#p/units/C1/"+encodeURI(v_manufacturers[v_i]),Class:'mlinks',text:v_manufacturers[v_i]});v_dest.append(v_item)}if(nMLINKS._assign){return}nMLINKS._assign=true; $(p_dest).on('click','a',function(p_event){p_event.preventDefault();var v_name=$(this).text();var v_href=$(this).attr('href');nCUNITS.filter_clear();nUNITS.manufacture_filter_set('#cunits-filter-manufacturer .check',v_name);nCUNITS.show_units();nCOMMON.to_ref(v_href)})};