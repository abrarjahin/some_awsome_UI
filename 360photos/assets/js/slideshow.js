$(function(){$.fn.superbgimage.options={id:'superbgimage',z_index:0,inlineMode:0,showimage:1,vertical_center:1,transition:6,transitionout:1,randomtransition:0,showtitle:0,slideshow:0,slide_interval:5000,randomimage:0,speed:'slow',preload:1,onShow:superbgimage_show,onClick:superbgimage_click,onHide:superbgimage_hide,onMousemove:superbgimage_mousemove};$('#thumbs1').superbgimage();});function superbgimage_hide(img){$('#showtitle').hide();}
function superbgimage_show(img){$('#superbgimage').css('background','none');$('#superbgimage').append($('#showtitle'));$('#showtitle p.imagecount').html('image '+img+' of '+$.superbg_imgIndex);if($('#thumbs1').css('display')=='block'){$('#showtitle p.title').html($('#thumbs1 a'+"[rel='"+img+"']").attr('title'));}else{$('#showtitle p.title').html($('#thumbs2 a'+"[rel='"+img+"']").attr('title'));}
$('#showtitle').fadeIn('fast');}
function superbgimage_click(img){$('#thumbs').nextSlide();}
my_slideshowActive=false;function superbgimage_mousemove(img,e){if(my_slideshowActive&&($('#pause').length>0)){$("#pause").css("top",(e.pageY+20)+"px").css("left",(e.pageX+20)+"px").show();}}
$(function(){function update_superbgOptions(){var newspeed='slow';var newinterval=4000;var newtransitionout=0;var newrandomtransition=0;var newrandomimage=0;}
$("#thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20").hide().addClass('hidden');$('a.prev').click(function(){return $('#thumbs').prevSlide();});$('a.next').click(function(){return $('#thumbs').nextSlide();});$('a.start').click(function(){update_superbgOptions();return $('#thumbs').startSlideShow();});$('a.stop').click(function(){my_slideshowActive=false;return $('#thumbs').stopSlideShow();});$('a.loadset1').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs1').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset2').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs2').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset3').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs3').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset4').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs4').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset5').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs5').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset6').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs6').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset7').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs7').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset8').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs8').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset9').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs9').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset10').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs10').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset11').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs11').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset12').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs12').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset13').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs13').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset14').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs14').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset15').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs15').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset16').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs16').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs17, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset17').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs17').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs18, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset18').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs18').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs19, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset19').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs19').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs20').hide().addClass('hidden');return false;});$('a.loadset20').click(function(){$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19, #thumbs20').stopSlideShow();my_slideshowActive=false;$('#showtitle').hide();$('#thumbs20').superbgimage({reload:true}).show().removeClass('hidden');$('#thumbs1, #thumbs2, #thumbs3, #thumbs4, #thumbs5, #thumbs6, #thumbs7, #thumbs8, #thumbs9, #thumbs10, #thumbs11, #thumbs12, #thumbs13, #thumbs14, #thumbs15, #thumbs16, #thumbs17, #thumbs18, #thumbs19').hide().addClass('hidden');return false;});$("h1 a").click(function(){$(this).blur();if($("#overlay").hasClass('hidden')){$("#overlay").css('height','auto').removeClass('hidden').children().show();if($('#thumbs1').hasClass('hidden')){$('#thumbs1').hide();}
if($('#thumbs2').hasClass('hidden')){$('#thumbs2').hide();}
if($('#thumbs3').hasClass('hidden')){$('#thumbs3').hide();}
if($('#thumbs4').hasClass('hidden')){$('#thumbs4').hide();}
if($('#thumbs5').hasClass('hidden')){$('#thumbs5').hide();}
if($('#thumbs6').hasClass('hidden')){$('#thumbs6').hide();}
if($('#thumbs7').hasClass('hidden')){$('#thumbs7').hide();}
if($('#thumbs8').hasClass('hidden')){$('#thumbs8').hide();}
if($('#thumbs9').hasClass('hidden')){$('#thumbs9').hide();}
if($('#thumbs10').hasClass('hidden')){$('#thumbs10').hide();}
if($('#thumbs11').hasClass('hidden')){$('#thumbs11').hide();}
if($('#thumbs12').hasClass('hidden')){$('#thumbs12').hide();}
if($('#thumbs13').hasClass('hidden')){$('#thumbs13').hide();}
if($('#thumbs14').hasClass('hidden')){$('#thumbs14').hide();}
if($('#thumbs15').hasClass('hidden')){$('#thumbs15').hide();}
if($('#thumbs16').hasClass('hidden')){$('#thumbs16').hide();}
if($('#thumbs17').hasClass('hidden')){$('#thumbs17').hide();}
if($('#thumbs18').hasClass('hidden')){$('#thumbs18').hide();}
if($('#thumbs19').hasClass('hidden')){$('#thumbs19').hide();}
if($('#thumbs20').hasClass('hidden')){$('#thumbs20').hide();}}else{$("#overlay").css('height','100px').addClass('hidden').children().hide();$("h1").show();}
return false;});});


