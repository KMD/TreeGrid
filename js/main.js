$(document).ready(function(){
    $('#treeGrid').treeGrid({
	data : data,
	headers : ["name","id","parentId","email"]
    });
});
