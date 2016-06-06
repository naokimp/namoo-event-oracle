/**
 * 
 */
$(document).ready(function() {

	$("#confirm_msg_ok").hide();
	$("#confirm_msg_false").hide();
	$("#submitBtn").prop("disabled", true);

	$("input[name=userId]").keyup(function(e) {
		
		var userId = $(this).val();

		$.ajax({
			url : nsjs.ctx + "/user/idConfirm",
			type : "get",
			data : {
				"userId" : userId
			},
			dataType : "json",
			success : function(data) {
				if (data == false) {
					$("#confirm_msg_ok").hide();
					$("#confirm_msg_false").show();
					$("#submitBtn").prop("disabled", true);
				} else if (userId == '') {
					$("#confirm_msg_ok").hide();
					$("#confirm_msg_false").hide();
					$("#submitBtn").prop("disabled", true);
				} else if (data == true) {
					$("#confirm_msg_false").hide();
					$("#confirm_msg_ok").show();
					$("#submitBtn").prop("disabled", false);
				}
			}
		});
	});
});