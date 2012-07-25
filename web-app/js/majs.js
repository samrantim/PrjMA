/**
 * Created by IntelliJ IDEA.
 * User: TIM
 * Date: 21/7/2555
 * Time: 14:18 น.
 * To change this template use File | Settings | File Templates.
 */

var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;

function jsddm_open(){
    jsddm_canceltimer();
    jsddm_close();
    ddmenuitem = $(this).find('ul').css('visibility', 'visible');
}

function jsddm_close(){
    if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');
}

function jsddm_timer(){
    closetimer = window.setTimeout(jsddm_close, timeout);
}

function jsddm_canceltimer(){
    if(closetimer){
    window.clearTimeout(closetimer);
    closetimer = null;}
}

$(document).ready(function(){
    $('#jsddm > li').bind('mouseover', jsddm_open)
    $('#jsddm > li').bind('mouseout',  jsddm_timer)
});

document.onclick = jsddm_close;
