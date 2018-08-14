<head>
<script src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js" type="text/javascript"></script>
<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.js"></script>

<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/jQuery/jquery-3.2.1.min.js" ></script> 
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/jQueryUI/jquery-ui.min.js" ></script> 
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/datatables.min.js"></script>


<script type="text/javascript" src="../SiteAssets/Bootstrap%20Datatables/DataTables/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/DataTables/js/dataTables.jqueryui.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/DataTables/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="../SiteAssets/Bootstrap%20Datatables/DataTables/js/dataTables.bootstrap.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/RowGroup/js/dataTables.rowGroup.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/RowGroup/js/dataTables.rowGroup.js"></script>
<script type="text/javascript" src="../SiteAssets/Datatable%20Addons/jquery.dataTables.rowGrouping.js"></script>


<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/dataTables.buttons.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/buttons.jqueryui.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/buttons.jqueryui.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/buttons.html5.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/buttons.bootstrap.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/buttons.bootstrap.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/JSZip/jszip.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/buttons.flash.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/Buttons/js/buttons.print.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/pdfmake/pdfmake.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/pdfmake/vfs_fonts.js"></script>

<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/jQueryUI/themes/base/jquery-ui.min.css" />
<link type="text/css" rel="stylesheet" href="../SiteAssets/Bootstrap%20Datatables/Bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/DataTables/css/dataTables.jqueryui.min.css" />

<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/Buttons/css/buttons.dataTables.min.css"/>
<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/Buttons/css/buttons.jqueryui.min.css"/>
<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/Buttons/css/buttons.bootstrap.min.css"/>

<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/RowGroup/css/rowGroup.dataTables.min.css"/>
<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/RowGroup/css/rowGroup.jqueryui.min.css"/>

<script type="text/javascript" src="../SiteAssets/Datatable%20Addons/moment.js"></script>
<script type="text/javascript" src="../SiteAssets/percentageBars.js"></script>

</head>

<hr>

<div container="SomeContainer">
	<table width="100%" id="Table">
		<thead id="tableheader">
		<tr>
			<th style="text-align:center;">LABEL</th>
		    <th style="text-align:center;">TITLE</th>
			<th style="text-align:center;">ID</th>
			<th style="text-align:center;">COMBINE 01</th>
			<th style="text-align:center;">COMBINE 02</th>
			<th style="text-align:center;">COMBINE 03</th>
			<th style="text-align:center;">% COMPLETE</th>
			<th style="text-align:center;">LAST UPDATED</th>
			</tr>
		</thead>

	</table>
	<div id="SomeControls"></div>
</div>


<style>

/*Hide Left Nav
#sideNavBox .ms-core-navigation{
 display:none !important;
}
.ms-core-sideNavBox-removeLeftMargin{
 margin-left:20px;
}
#contentBox{
 margin-left:20px;
}

#DeltaPlaceHolderPageTitleInTitleArea{
	display:none;
}
*/
    .expanded-group{
                background: url("../SiteAssets/minus.jpg") no-repeat scroll left center transparent;
                padding-left: 15px !important;
                font-weight:bold;padding:5px;margin:5px;
            }
    .collapsed-group{
                background: url("../SiteAssets/plus.jpg") no-repeat scroll left center transparent;
                padding-left: 15px !important;
                font-weight:bold;padding:5px;margin:5px;
            }

#tableheader {
background-color: #2a6ea0;
color: white;
}

[class^="group "] {
  background-color: #8d8e90;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  }
  
 .btn-group-sm>.btn, .btn-sm {
	margin: 5px;
	float: right;
}



table.dataTable.dtr-inline.collapsed > tbody > tr > td:first-child::before,
table.dataTable.dtr-inline.collapsed > tbody > tr > th:first-child::before {
  top:9px;
  left: 4px;
  height:14px;
  width: 14px;
  display: block;
  position: absolute;
  color: white;
  border: 2px solid white
  border-radius: 14px;
  box-shadow: 0 0 3px #444;
  text-align: left;
  font-family: 'Courier New', Courier, monospace;
  line-height: 14px;
  content: '+';
  background-color: #337ab7;
}

.dataTables_filter {
	padding: 0px;
}

hr {
	border-top: 3px solid #eee;
	margin-top: 20px;
	margin-bottom: 20px;
	}

</style>

<script>
//obtains the sharepoint list information, based on what's populated each list record

jQuery(document).ready(function($) {
	var siteUrl = "[site url]"
	var fullUrl = siteUrl + "_api/lists/getbytitle('[list name]')/Items?$select=Label,Title,ID,Modified,field1,link1,field2,link2,field3,link3,PercentComplete";
	
	
	var call = $.ajax({
				url: fullUrl,
				type: "GET",
				dataType: "json",
				headers: {
					"accept" : "application/json;odata=verbose",
				}
				});

call.done(function (data, textStatus, jqXHR) {
	$("#ProjectTable").dataTable({
	"bDestroy": true,
	"bProcessing": true,
  "aaData": data.d.results,
  
	"aoColumns": [
		{"mData":"Label"},
		{"mData":"Title"},
		{"mData":"ID",
		     "mRender":function (data, type, row) {
			return "<a href='[site url]"+data+"'/>"+data+"</a>"
			}
			},

    {"data":[],
		    "render":function (data, type, row) {
			 return "<div style='margin: 0 auto; text-align:center;'><img src='"+row.link1.Url+"' style='border-radius:5px;'><p style='text-align:center; font-size: smaller;'>"+row.field1+"</p></div>"}},
             
    {"data":[],
             "render":function (data, type, row) {
              return "<div style='margin: 0 auto; text-align:center;'><img src='"+row.link2.Url+"' style='border-radius:5px;'><p style='text-align:center; font-size: smaller;'>"+row.field2+"</p></div>"}},
    
    {"data":[],
              "render":function (data, type, row) {
               return "<div style='margin: 0 auto; text-align:center;'><img src='"+row.link3.Url+"' style='border-radius:5px;'><p style='text-align:center; font-size: smaller;'>"+row.field3+"</p></div>"}},

		{"mData":"PercentComplete", 
			"render": $.fn.dataTable.render.percentBar('round','#FFF', '#269ABC', '#31B0D5', '#286090', 1, 'groove')
			},
		{"mData": "Modified",
            "mRender":function(mData) {  
				var date = new Date(mData);  
				var month = date.getMonth() + 1;  
				var ndate = (month.length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear(); 
				return '<div style="text-align:center;">'+ndate+'</div>'; 
			}
		},
		],
		"iDisplayLength":30,
		"dom":'<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',
		"bLengthChange": false,
		"bProcessing":true,}).rowGrouping({
				fnGroupLabelFormat: function(label) {return "LABEL FOR GROUP: " + label + ""; },
			bExpandableGroup: true
		});
			
    console.log("aaData");

		
	$("#Table").show();

call.fail(function (jqXHR, textStatus, errorThrown) {
	alert('Errors!' + jqXHR.responseText);
	});
});
});

</script>

