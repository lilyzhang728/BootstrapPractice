$(document).ready(function() {
	$('#carousel-example-generic').carousel({
		interval: 4000
	});
	$('#navBar a').click(function(){
		var keith=$(this);
		var href=keith.attr('href');
		$('#tab-list a[href="'+href+'"]').tab('show');
	})
});