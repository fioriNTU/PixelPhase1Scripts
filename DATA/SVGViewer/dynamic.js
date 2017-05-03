var PixelTrackerShow = {} ;
PixelTrackerShow.thisFile = "my.js";

var inFocuseStrokeWidth = 0.2;
var outOfFocuseStrokeWidth = 0.1;

var interestingQuantities = ["FEDID", "FEDposition", "FEDchannel"]

PixelTrackerShow.init = function()
{
  showData = PixelTrackerShow.showData;
  
  // var textBox = document.getElementById("currentElementText");
  // textBox.setAttribute("style", "color: #FF0000");
  
  // if ( window.svgDocument == null )
	// {
    // svgDocument = evt.target.ownerDocument;
  // }
  // tooltip = svgDocument.getElementById('tooltip');
  
}

PixelTrackerShow.showData = function (evt) 
{
  var myPoly = evt.currentTarget;
  
  if (evt.type == "mouseover") 
  {
    var myPoly = evt.currentTarget;
    // var myTracker = myPoly.getAttribute("POS");
    var id = myPoly.getAttribute("detId");
    var oid = myPoly.getAttribute("oid");
    var fedChannel = myPoly.getAttribute("FEDchannel");
    // var LVRack = id.substring(0,id.length - 4);  
    // myTracker = "Rack " + LVRack + " " + myTracker;  
    // var myTracker1 = "  value="+myPoly.getAttribute("value");
    // myTracker1 = myTracker1+"  count="+myPoly.getAttribute("count");
    var textfield=document.getElementById("moduleName");
    textfield.firstChild.nodeValue=oid + " (" + id + ")";
    // textfield.setAttribute("style", "font-weight: bold");
    // textfield.firstChild.nodeValue=myTracker;
    // textfield=document.getElementById('line2');
    // textfield.firstChild.nodeValue=myTracker1;
    
    for (var i = 0; i < interestingQuantities.length; ++i)
    {
      var k = interestingQuantities[i];
      var s = myPoly.getAttribute(k);
      
      if (s == null) s = ""; // Id not found in cabling DB
      
      // document.getElementById(k).firstChild.nodeValue = k;
      // alert(k + "_val")
      var nk = k + "_val";
      document.getElementById(nk).innerHTML = s;
    } 
    
  }
  ShowTooltip(evt);
  
  if (evt.type == "mouseout") 
  {  
    HideTooltip();
  }
}

function ShowTooltip(evt)
{
  // var tooltip = document.getElementById('tooltip');
  var tooltip_bg = document.getElementById('tooltip_bg');
  var infoTable = document.getElementById('infoTable');
  
  // tooltip.setAttributeNS(null,"x",evt.pageX+10);
  // tooltip.setAttributeNS(null,"y",evt.pageY+16);
  // tooltip.setAttributeNS(null,"visibility","visible");
  
  length = 400;//document.getElementById('line1').getComputedTextLength();
  tooltip_bg.setAttributeNS(null,"x",evt.pageX+8);
	tooltip_bg.setAttributeNS(null,"y",evt.pageY+0);
	tooltip_bg.setAttributeNS(null,"visibility","visible");
  tooltip_bg.setAttributeNS(null,"width",length+8);
  
  infoTable.setAttributeNS(null,"x",evt.pageX+8);
	infoTable.setAttributeNS(null,"y",evt.pageY+0);
	infoTable.setAttributeNS(null,"visibility","visible");
}
function HideTooltip()
{
  // document.getElementById('tooltip').setAttributeNS(null,"visibility","hidden");
  document.getElementById('tooltip_bg').setAttributeNS(null,"visibility","hidden");
  document.getElementById('infoTable').setAttributeNS(null,"visibility","hidden");
  
}