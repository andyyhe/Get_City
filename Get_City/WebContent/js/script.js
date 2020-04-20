$(document).ready(function() {

	console.log("Loaded jQuery!");
	
	$("#btn").click(function() {
		console.log("Inside button click...");
		var lon = $("#longitude").val();
		var lat = $("#latitude").val();
		console.log(lon + "====>" + lat);
	
		$.ajax({
		
			url: "https://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + lon + "&cnt=10&appid=a7a1343fabe02c7276cfd4d13e277ed0"
			
		}).then(function(data) {
			console.log(data);
			var divTag = document.getElementById("content");
			//divTag.innerHTML = "<ul>";
			var names = "";
			$.each(data.list, function(idx) {
				var temp = data.list[idx].name;
				console.log(temp);
				names += "<li>" + temp + "</li>";
			});
			console.log(names);
			divTag.innerHTML = "<ul>" + names;
			
		})
	})
	
})