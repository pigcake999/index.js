// Credits go to github user pigcake999yt
// do not remove credits

// index.js toolkit provided and created by pigcake999yt in 2016

var obj = {
	"new": function(type,data){
		if(type == "tag"){
			$("body").append(data);
		} else {
			if(type == "meta"){
				$("head").prepend(data);
			}	   
		}
		if(type == "style"){
			$("head").append("style"+data+"</style>");
		}
	},
	
	"set": function(querySelect,replace){
		$(querySelect).val(replace);
	},
	
	"delete": function(querySelect){
		$(querySelect).remove();
	}
}

var indexjs = {
	"install": function(pkg,type,hostedURL){
		if(type == "script"){$("head").append("<script src='"+hostedURL+"'></script> <!-- "+pkg+"-->");}
		else{if(type == "link"){$("head").append("<link rel='"+hostedURL+"'> <!-- "+pkg+"-->");}}
	}
}

var body = {
	"newline": function(){
		$("body").append("<br />");
	},
	
	"reset": function(){
		$("body").empty();
	}
}
