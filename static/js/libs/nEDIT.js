"use strict";var nEDIT={data:'<h2>Заголовок 2</h2>\n<p>Тут может быть ваш текст</p>',css:[],codemirror:{id:'n1editor-codemirror',font_size:14,cfg:{lineNumbers:true,lineWrapping:true,matchBrackets:true,mode:"xml",htmlMode:true}},ckeditor:{id:'n1editor-ckeditor',cfg:{language:'ru',uiColor:'#ffffff',resize_enabled:false}}};nEDIT.calc_size=function(p_k){ $('#'+p_k+'-rows').text(nEDIT[p_k].data.split('\n').length); $('#'+p_k+'-chars').text(nEDIT[p_k].data.length)};nEDIT.clean=function(p_data){p_data=p_data.replace(/\s+\n/g,'\n');p_data=p_data.replace(/\x20{2,}/g,' ');p_data=p_data.replace(/&laquo;/g,'«');p_data=p_data.replace(/&raquo;/g,'»');p_data=p_data.replace(/&mdash;/g,'\u2014');p_data=p_data.replace(/&ndash;/g,'\u2013');p_data=p_data.replace(/<br>/g,'<br/>');p_data=p_data.replace(/<hr>/g,'<hr/>');p_data=p_data.replace(/<img\s+([^>]+)>/g,function(p_match,p1){p1=p1.trim();return'<img '+p1+(p1.substring(p1.length-1)!=='/'?+p1+'/>':'>')});return p_data};nEDIT.show_html=function(p_dest){let v_page='<html><head><title></title><meta charset="UTF-8">';v_page+=nEDIT.css.join('\n');v_page+='</head><body>';v_page+=nEDIT.data;v_page+='</body></html>'; $(p_dest).attr('srcdoc',v_page)};nEDIT.show=function(p_elem){ $(p_elem).css({top:'0px',left:'0px',width:'100%'})};nEDIT.hide=function(p_elem){ $(p_elem).css({top:'-5000px',left:'-5000px',width:'100%'})};nEDIT.resize_ckeditor=function(){let v_wh=$(window).height();let v_ch=nEDIT.ckeditor.ref.ctrl.outerHeight();if(v_wh>=420){v_wh-=v_ch+10}v_wh=Math.ceil(v_wh);CKEDITOR.instances[nEDIT.ckeditor.id].resize('100%',v_wh)};nEDIT.open_ckeditor=function(){CKEDITOR.instances[nEDIT.ckeditor.id].setData(nEDIT.data);nEDIT.resize_ckeditor(); $(window).on('resize',nEDIT.resize_ckeditor);nEDIT.show(nEDIT.ckeditor.ref.win)};nEDIT.resize_codemirror=function(){let v_wh=$(window).height();let v_ch=nEDIT.codemirror.ref.ctrl.outerHeight();if(v_wh>=420){v_wh-=v_ch+10}v_wh=Math.ceil(v_wh);nEDIT.codemirror.editor.setSize(null,v_wh)};nEDIT.open_codemirror=function(){nEDIT.codemirror.editor.setValue(nEDIT.data);nEDIT.resize_codemirror(); $(window).on('resize',nEDIT.resize_codemirror);nEDIT.show(nEDIT.codemirror.ref.win)};nEDIT.accept=function(){};nEDIT.close=function(){};nEDIT.get=function(){return nEDIT.data};nEDIT.put=function(p_data){nEDIT.data=p_data};nEDIT.gen_ctrl=function(p_id){let v_ref={win: $('<div/>',{css:{position:'fixed',top:'-5000px',left:'-5000px','background-color':'#fff'}}),textarea: $('<textarea/>',{id:p_id}),ctrl: $('<div/>',{Class:'n1editor-ctrl'}),accept: $('<button/>',{Class:'n1editor-ctrl-accept',title:'Принять изменения',text:'Принять'}),close: $('<button/>',{Class:'n1editor-ctrl-close',title:'Закрыть без сохранения последних изменений',text:'Закрыть'})};v_ref.win.append(v_ref.textarea);v_ref.win.append(v_ref.ctrl);v_ref.ctrl.append(v_ref.accept);v_ref.ctrl.append(v_ref.close);v_ref.ctrl.append($('<div/>',{css:{clear:'both'}})); $('body').append(v_ref.win);return v_ref};nEDIT.init=function(p_args){if(p_args){if(p_args.html){nEDIT.data=p_args.html}if(p_args.css){nEDIT.data=p_args.html}}nEDIT.codemirror.ref=nEDIT.gen_ctrl(nEDIT.codemirror.id);nEDIT.codemirror.editor=CodeMirror.fromTextArea(nEDIT.codemirror.ref.textarea.get(0),nEDIT.codemirror.cfg);nEDIT.codemirror.editor.display.wrapper.style.height="auto";nEDIT.codemirror.editor.display.wrapper.style.fontSize=nEDIT.codemirror.font_size+"pt";nEDIT.codemirror.editor.refresh();nEDIT.codemirror.ref.accept.click(function(){nEDIT.data=nEDIT.clean(nEDIT.codemirror.editor.getValue());nEDIT.accept()});nEDIT.codemirror.ref.close.click(function(){nEDIT.hide(nEDIT.codemirror.ref.win);nEDIT.close(); $(window).off('resize',nEDIT.resize_codemirror)});nEDIT.ckeditor.ref=nEDIT.gen_ctrl(nEDIT.ckeditor.id);CKEDITOR.replace(nEDIT.ckeditor.id,nEDIT.ckeditor.cfg);nEDIT.ckeditor.ref.accept.click(function(){nEDIT.data=nEDIT.clean(CKEDITOR.instances[nEDIT.ckeditor.id].getData());nEDIT.accept()});nEDIT.ckeditor.ref.close.click(function(){nEDIT.hide(nEDIT.ckeditor.ref.win);nEDIT.close(); $(window).off('resize',nEDIT.resize_ckeditor)})};