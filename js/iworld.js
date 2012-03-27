/* Author: Hemant Kumar Singh
*/

(function(){
	var list="";
	    var  template1 = $("#template1").html(),
	    	 template2=$("#template2").html(),
	    	 template3=$("#template3").html(),
	    	 fragment1 = '',fragment2 = '',fragment3 = '';
	
		$.ajax({
			url:"js/records.js",
			type:"post",
			dataType:"json",
			success:function(data){
				len = data.length,fragment = '';
				$.each(data,function(i,obj){

					 fragment1 += template1
					      .replace( /{{name}}/, obj.name )
					      .replace( /{{workgroup}}/, obj.workgroup )
					      .replace( /{{category}}/, obj.category )
					      .replace( /{{region}}/, obj.region )
					      .replace( /{{create_date}}/, obj.create_date )
					      .replace( /{{due_date}}/, obj.due_date )
					      .replace( /{{id}}/, obj.id )
					      .replace( /{{progres}}/, obj.progress )
					      .replace( /{{words}}/, obj.words ) 
					      .replace( /{{status}}/, obj.status )
					      .replace( /{{users}}/, obj.users )
					      .replace( /{{workflow}}/, obj.workflow );

					      if(obj.projects !== undefined){

					      	$.each(obj.projects,function(i,obj){

					 fragment1 += template2
					      .replace( /{{name}}/, obj.name )
					      .replace( /{{workgroup}}/, obj.workgroup )
					      .replace( /{{category}}/, obj.category )
					      .replace( /{{region}}/, obj.region )
					      .replace( /{{create_date}}/, obj.create_date )
					      .replace( /{{due_date}}/, obj.due_date )
					      .replace( /{{id}}/, obj.id )
					      .replace( /{{progres}}/, obj.progress )
					      .replace( /{{wordcount}}/, obj.wordcount ) 
					      .replace( /{{status}}/, obj.status )
					      .replace( /{{users}}/, obj.users )
					      .replace( /{{workflow}}/, obj.workflow );

					       if(obj.tasks !== undefined){
					       	
					       	$.each(obj.tasks,function(i,obj){

					 fragment1 += template3
					      .replace( /{{name}}/, obj.name )
					      .replace( /{{workgroup}}/, obj.workgroup )
					      .replace( /{{category}}/, obj.category )
					      .replace( /{{region}}/, obj.region )
					      .replace( /{{create_date}}/, obj.create_date )
					      .replace( /{{due_date}}/, obj.due_date )
					      .replace( /{{id}}/, obj.id )
					      .replace( /{{progres}}/, obj.progress )
					      .replace( /{{status}}/, obj.status )
					      .replace( /{{users}}/, obj.users )
					      .replace( /{{workflow}}/, obj.workflow )
					      .replace( /{{fileicon}}/, obj.fileicon )
					      .replace( /{{filename}}/, obj.filename )
					      .replace( /{{wordcount}}/, obj.wordcount );

					  });

					       }

					      	});

					      }

				});
				
					
					  $("#projectgroups").append(fragment1);

					  	//toggle projects
					  $(".projects,.tasks").hide();
					  	$("#projectgroups").on("click",".projectgroup",function(e){
					  		var $this=$(this);
					  	$this.nextAll(".projects").end().nextUntil(".projectgroup").filter(".tasks").hide();
						$this.toggleClass("toggle").nextAll(".projects").end().nextUntil(".projectgroup").filter(".projects").toggle();

						});

						$(".projects").on("click",function(){
						    $(this).toggleClass("toggle").nextUntil(".projects,.projectgroup").toggle();
						});

						//$("#projectgroupsheader").splitter();

			},
			error:function(){

				console.log("My Error ");
			}



		});
	






})();





