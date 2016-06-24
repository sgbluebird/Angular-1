function rowStyle(row, index) {
    /*var classes = ['active', 'success', 'info', 'warning', 'danger'];*/
	var classes = ['success', 'info', 'warning', 'danger'];
    
    /*if (index % 2 === 0 && index / 2 < classes.length) {
        return {
            classes: classes[index / 2]
        };
    }*/
    if(index % 2 ===0){
    	return {
    		classes:classes[index%3]
    	};
    }
    return {};
}

function runningFormatter(value, row, index) {
    return index+1;
}
require([ 'config' ], function() {
	require([ 'bootstrapTable', 'app','common', 'custom'], function(bootstrapTable,
			app,common) {
		//页面自适应

		$(window).resize(function() {
			$('#table').bootstrapTable('resetView');
		});
		
		var data = [
					{
						"name" : "bootstrap-table",
						"stargazers_count" : "526",
						"forks_count" : "122",
						"description" : "An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3) "
					},
					{
						"name" : "multiple-select",
						"stargazers_count" : "288",
						"forks_count" : "150",
						"description" : "A jQuery plugin to select multiple elements with checkboxes :)"
					},
					{
						"name" : "bootstrap-show-password",
						"stargazers_count" : "32",
						"forks_count" : "11",
						"description" : "Show/hide password plugin for twitter bootstrap."
					},
					{
						"name" : "blog",
						"stargazers_count" : "13",
						"forks_count" : "4",
						"description" : "my blog"
					},
					{
						"name" : "scutech-redmine",
						"stargazers_count" : "6",
						"forks_count" : "3",
						"description" : "Redmine notification tools for chrome extension."
					} ];
		$('#table').bootstrapTable({
			data : data
		});
		
		$("#delete").click(function(){
			var frame = $("#frame").remove();
		});
		$("#logout").click(function(){
			common.logout();
		});
	})
})