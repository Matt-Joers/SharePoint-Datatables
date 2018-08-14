<script src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js" type="text/javascript"></script>
<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/jQuery/jquery-3.2.1.min.js" ></script> 
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/datatables.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/DataTables/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="../SiteAssets/jQuery%20Datatables/jquery.mark.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/datatables.mark.js@2.0.1/dist/datatables.mark.min.js"></script>
<link type="text/css" rel="stylesheet" href="../SiteAssets/jQuery%20Datatables/datatables.min.css"/>
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/datatables.mark.js@2.0.1/dist/datatables.mark.css"/>

<style>	
h3 {
	font-weight: bold;
	color: #35414f;
}

thead {
	background-color: #35414f;
	color: white;
	padding-top: 5px;
}

tfoot {
	background-color: #35414f;
	color: white;
	padding-bottom: 5px;
}

.imgTable {
	-webkit-filter: brightness(80%);
	height: 30px;
	box-shadow: 1px 1px 1px grey;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    -ms-transition: all 1s ease-in-out;
	transition: all 1s ease-in-out;
}

.imgTable:hover {
    -webkit-filter: brightness(100%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
	transition: all 1s ease;
	height: 100px;
	box-shadow: 1px 1px 1px grey;
}

tr {
	-webkit-filter: brightness(98%);
}

tr:hover {
		-webkit-filter: brightness(100%);
		-webkit-transition: all 1s ease;
		-moz-transition: all 1s ease;
		-o-transition: all 1s ease;
		-ms-transition: all 1s ease;
		transition: all 1s ease;
}
.dataTables_filter {
	padding: 10px;
}

mark{
    background:orange;
    color: black;
   }
   
</style>

<html>
<br/>
<h3 id="contactTitle">CONTACT SEARCH</h3>
<hr>
<p>Below are contacts</p>
<hr>
<div container="ContactContainer">
	<table width="100%" id="StaffTable" class="hover">
		<thead id="tableheader">
			<tr>
			<th>PHOTO</th>
            <th>CONTACT NAME</th>
			<th>JOB TITLE</th>
            <th>WORK #</th>
			<th>WORK EMAIL</th>
            <th>MOBILE #</th>
            <th>PAGER #</th>
            <th>DEPT.</th>
			<th>MANAGER</th>
			<th>CONTACT PREF.</th>
			<th>MORE INFO</th>
			</tr>
			<tbody></tbody>
		</thead>
		<tfoot>
			<tr>
			<th>PHOTO</th>
            <th>CONTACT NAME</th>
			<th>JOB TITLE</th>
            <th>WORK #</th>
			<th>WORK EMAIL</th>
            <th>MOBILE #</th>
            <th>PAGER #</th>
            <th>DEPT.</th>
			<th>MANAGER</th>
			<th>CONTACT PREF.</th>
			<th>MORE INFO</th>
			</tr>
		</tfoot>
	</table>
	<div id="ContactControls"></div>
</div>
</html>

<script>

// on the page loading retrieve all the list/library items by performing an AJAX call using the "fullUrl" REST call and formatting the data in JSON (javascript object notation)

$(document).ready(function retrieveListItems(){

    // the FullUrl variable is produced by using the following elements: 
        // Base URL: https://[sharepoint site name]/
        // API to get specific list info & Items: '_api/web/lists/getbytitle('LIST NAME')/items?'
        // Define the fields we want to pull: '$select=Title,FullName,JobTitle,Description,PrimaryNumber,EMail,CellPhone,PagerNumber,Office,Location,ol_Department,EncodedAbsThumbnailUrl,StaffMemberManager/Title,PreferredContactMethod,ID'
        // Expand nested REST XML / JSON fields such as People Pickers:  '&$expand=StaffMemberManager/Id'

	var fullUrl = "[site url]/_api/web/lists/getbytitle('[List Name]')/items?$select=Title,FullName,JobTitle,Description,PrimaryNumber,EMail,CellPhone,PagerNumber,Office,Location,ol_Department,EncodedAbsThumbnailUrl,StaffMemberManager/Title,PreferredContactMethod,ID&$expand=StaffMemberManager/Id";
	var call = $.ajax({
				url: fullUrl,
				type: "GET",
				dataType: "json",
				headers: {
					"accept" : "application/json;odata=verbose",
				}

				});

// If the call finishes successfully, then we populate the "StaffTable" with the following mapped fields AND rendering info:

call.done(function (data, textStatus, jqXHR) {
	$("#StaffTable").DataTable({
	"bDestroy": true,
	"bProcessing": true,

    // aaData provides the resulting JSON data we're going to populate the table with

	"aaData": data.d.results,
	"mark": true,
    
    // Use this area to map your fields from SharePoint in the same order as the HTML table listed above - note, when you map the fields, make sure to use the "internal" SharePoint field name, not the display name

	"aoColumns": [
		{"mData":"EncodedAbsThumbnailUrl",
			"mRender":function (data, type, row) {
				return "<img class='imgTable' src='"+data+"'>" 
			} 
		},
		{"mData":"FullName"},
		{"mData":"JobTitle" },
        {"mData":"PrimaryNumber" },

        // mRender function allows us to "inject" or customize the look of the returned html in the table or add additional elements, in the case below, I made the email address clickable

        {"mData":"EMail",
            "mRender":function (data, type, row) {
                return "<a href='mailto:"+data+"'>"+data+"</a>"}
            },
        {"mData":"CellPhone"},
        {"mData":"PagerNumber"},
		{"mData":"ol_Department"},
		{"mData":"StaffMemberManager.Title"},

        // Render also allows us to inject or modify the look of the cell in the table - in this case, based on the best contact method, I replace the text with an emoji character

		{"mData":"PreferredContactMethod",
			"render": function (data, type, row) {
				if (data == null || data == undefined)
					{return "<p style='text-align:center;'>N/A</p>";}
				if (data.match(/Mobile Phone/g))
					{return "<p style='text-align:center;'>📱</p>";}
				if (data.match(/Work Email/g))
					{return "<p style='text-align:center;'>📧</p>";}
				if (data.match(/Pager/g))
					{return "<p style='text-align:center;'>📟</p>";}
				if (data.match(/Work Phone/g))
					{return "<p style='text-align:center;'>☎️</p>";}
				}
			},

        // this MRender function producdes a clickable link to the record to see additional details (if needed)

		{"mData":"ID",
			"mRender": function (data, type, row) {
				return "<a href='[site url]/[Library Name]/Forms/DispForm.aspx?ID="+data+"&source=[site url]'>View Info</a>";
			}
	}
        ]
    });

	$("#StaffTable").show();
})

// If the jquery promise / call fails, then present an error alert:

call.fail(function (jqXHR, textStatus, errorThrown) {
	alert('Errors!' + jqXHR.responseText);
	})
});

</script>
