jQuery.fn.treeGrid = function(options) {
    var defaults = {
        dd : false
    };
    var TreeGridContainer = this;
    TreeGridContainer.addClass("treeGrid");
    (function(){
	var table = $('<table/>');
	var tableHeader = $('<thead>');
	var tableBody = $('<tbody>');
	var row = $('<tr/>');
	$.each(options.headers, function(index,value){
	    $('<th/>').text(value).appendTo(row);    
	});
	tableHeader.append(row);
	$.each(options.data, function(index, value) {
	    var row = $('<tr/>');
	    $.each(options.headers, function(i,v){
		$('<td/>').text(value[v]).appendTo(row);    
	    });
	    tableBody.append(row);
	});
	table.append(tableHeader);
	table.append(tableBody);
	TreeGridContainer.append(table);
    }());
};
