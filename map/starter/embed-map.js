
/*
// EMBED MAP
// Generate the script below by pasting index.html into:
// http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
// Final version resides in embed-map.js
*/

var strVar="";
strVar += "<section id=\"data\" class=\"litePanel\">";
strVar += "    <div class=\"content\">";
strVar += "      <div id=\"flexwrapper\">";
strVar += "        <div id=\"hublist\">";
strVar += "";
strVar += "          <h1>Data Driven Decision&nbsp;Making<\/h1>";
strVar += "          <h2 style=\"font-size: 18px; margin-bottom:0px; font-weight: 600\">Smart & Sustainable Movement of <span style=\"white-space: nowrap\">Goods & Services<\/span><\/h2><br>";
strVar += "          ";
strVar += "            <!--";
strVar += "            <input type=\"button\" onclick=\"location.href='..\/..\/samples\/feed';\" ";
strVar += "            value=\"Add your data feeds\" style=\"margin-top:20px; padding:10px\" \/>";
strVar += "            <br><br>";
strVar += "            -->";
strVar += "";
strVar += "          <div id=\"detaillist\"><\/div>";
strVar += "          <div id=\"narrowlist\" style=\"display:none\"><\/div>";
strVar += "        <\/div>";
strVar += "";
strVar += "        <a name=\"gomap\"><\/a>";
strVar += "        <div id=\"mapHolder\">";
strVar += "          <div class=\"mapHolderInner\">";
strVar += "            <div class=\"mapHolderCard card\">";
strVar += "              <div id=\"maptop\">";
strVar += "                <div style=\"position:absolute; left:0; padding:4px 4px 4px 10px\">";
strVar += "                  Connected Communities";
strVar += "                <\/div>";
strVar += "              <\/div>";
strVar += "";
strVar += "              <div style=\"clear:both\">  ";
strVar += "                <div id=\"map2\"><\/div>";
strVar += "              <\/div>";
strVar += "";
strVar += "            <\/div>";
strVar += "          <\/div>";
strVar += "        <\/div>";
strVar += "      ";
strVar += "      <\/div><!-- flexwrapper -->";
strVar += "    <\/div>  ";
strVar += "";
strVar += "  <\/section>";

document.write(strVar);

function consoleLog(text)
{
    console.log(text);
    //alert(text);
    //consoleMash = consoleMash + '\r' + text;
}
function loadScript(url, callback)
{
	if (!document.getElementById(url)) { // Prevents multiple loads.
		var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
		script.id = url; // Prevents multiple loads.
	    // Then bind the event to the callback function. Two events for cross browser compatibility.
	    script.onreadystatechange = callback;
	    script.onload = callback;
        //$(document).ready(function () { // Only needed if appending to body
            var head = document.getElementsByTagName('head')[0];
	       head.appendChild(script);
        //});
        consoleLog("loadScript loaded: " + url);
	} else {
		consoleLog("loadScript script already available: " + url);
	}
}
function includeCSS(url,root) {
    var urlID = url.replace(root,"").replace("https://","").replace(/\//g,"-").replace(/\./g,"-");
    if (urlID.indexOf('?') > 0) {
        urlID = urlID.substring(0,urlID.indexOf('?')); // Remove parameter so ?v=1 is not included in id.
    }
    if (!document.getElementById(urlID)) { // Prevents multiple loads.
        var link  = document.createElement('link');
        link.id   = urlID;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        //$(document).ready(function () { /* Not necessary if appending to head */
            //var body  = document.getElementsByTagName('body')[0];
            //body.appendChild(link);
        //});
        var head  = document.getElementsByTagName('head')[0];
        
        // Not using because css needs to follow site.css.
        //head.insertBefore(link, head.firstChild);
        // Beaware, not all html pages contain a head tag. https://www.stevesouders.com/blog/2010/05/11/appendchild-vs-insertbefore/
        // Also see "postscribe" use in this page.
        head.appendChild(link); // Since site-narrow.css comes after site.css
    }
}
function jsLoaded() {
	let root = "../../";
	let scriptCount = 0;
	loadScript(root + 'js/common/common.js',scriptCount++);

	// Resides AFTER css/leaflet/leaflet.css -->
	loadScript(root + 'js/leaflet/leaflet.js',scriptCount++);
	loadScript(root + 'js/leaflet/leaflet.icon-material.js',scriptCount++);
	loadScript(root + 'js/common/dual-map.js',scriptCount++);

	//alert(scriptCount);
}
function d3Loaded() {
	let root = "../../";
	let scriptCount = 0;

	loadScript(root + 'js/d3/d3-legend.js',scriptCount++);

	//alert(scriptCount);
}
function lazyLoadFiles() {
	let root = "../../";
	
	includeCSS(root + 'css/community.css',root);
	loadScript(root + 'js/jquery/jquery-1.12.4.min.js', function(results) {
		jsLoaded();
	});
	loadScript(root + 'js/d3/d3.v5.min.js', function(results) {
		d3Loaded();
	});
}
var L;
lazyLoadFiles();

/*
loadFromCSV('map2', "/community/tools/map.csv", function(results) {
    // This function gets called by the geocode function on success
    //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());

    layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers      
});
*/





