$(document).ready(function() {
  
  $("#loadingIcon").css('position', 'fixed')
  .css('bottom', ($(document).height()/2) + 'px').css('right', '50%')
  .css('opacity', '0.5').css('text-align', 'center').css('list-style', 'none')
  .css('border', 'none').css('margin', '0').css('padding', '0').css('z-index', '2500');
  
  $("#loadingIcon").hide();
  
  $("button[name=show_btn]").click(function(){
  
	  	var btn = this;
	  	var id = $(this).data("id");
		$.ajax({
			url : nejs.ctx + "/detail"
			,type : "get"
			,data : {"id" : id }
			,dataType : "json"
			,success : function(data) {
				
				var html = '';
				
				html += '<img src="' + nejs.ctx + '/image/' + id  + '/0" class="img-responsive" style="border-radius:5px; margin-top:5px;"></img>';
				html += data.description;
					
				$("#loadingIcon").fadeIn(500).fadeOut(500);
				
				$(btn).hide().next("button[name=hide_btn]").show();
				$(btn).next("button[name=hide_btn]").next("#detail-area").html(html);
			}
		});
	});
  
  $("button[name=hide_btn]").click(function(){
		$(this).hide().prev("button[name=show_btn]").show();
		$(this).next("#detail-area").empty();
	});
	
});