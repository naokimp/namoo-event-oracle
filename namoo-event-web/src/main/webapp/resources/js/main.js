/**
 * 
 */
$(document).ready(function() {

	$("#loadingIcon").hide();
	$("#timelineRow").hide();

	$("#more").hide();
	
	getMessages();
	
	$(window).scroll(function () { 
		var scrollHeight = $(window).scrollTop() + $(window).height(); 
		var documentHeight = $(document).height(); 
		if (scrollHeight == documentHeight) { 
			getMessages();
		} 
	});

//	// ajax 전역 이벤트 처리
//	$(document).ajaxStart(function() {
//		$("#loadingIcon").fadeIn(1000);
//	}).ajaxStop(function() {
//		$("#loadingIcon").fadeOut(2000);
//	});
	
	function appendMessage(timeline) {
		//
		var html = '';
		for (var i = 0, length = timeline.length; i < length; i++) {
			//
			var message = timeline[i];
			html += '<div class="panel panel-default">';
			html += '<div class="panel-heading">';
			if (message.writer.userId == nsjs.loginId) {
				html += '<a href="' + nsjs.ctx + '/main/' + message.writer.userId + '"><b>' + message.writer.name + '</b></a>';
			} else {
				html += '<a href="' + nsjs.ctx + '/main/' + message.writer.userId + '">' + message.writer.name + '</a>';
			}
			html += '<div style="float: right;">' + $.getDate('Y/m/d H:i:s', message.regDate) +'</div>';
			html += '</div>';
			html += '<div class="panel-body">' + message.contents + '</div>';
			html += '</div>';
			
		}
		$("#timelineRow").fadeIn(1000).append(html);
	}
	
	function getMessages() {
		//
		var currentPage = $("#currentPage").val();
		var countPerPage = $("#countPerPage").val();
		
		$.ajax({
			url : nsjs.ctx + "/message/timeline?currentPage=" + currentPage + "&countPerPage=" + countPerPage
			,type : "get"
			,dataType : "json"
			,beforeSend : function() {
				$("#loadingIcon").fadeIn(function(){
					$("#loadingIcon").fadeOut();
				});
			}
			,success : function(data) {
				appendMessage(data.results);
				if (data.nextPage) {
					$("#currentPage").val(data.currentPage + 1);
				} else {
					$(window).off("scroll");
					$("#more").show();
				}
			}
		});
	}
	
	function follow(userId) {
		//
		$.ajax({
			url : nsjs.ctx + "/user/follow/" + userId
			,type : "get"
			,dataType : "json"
			,success : function(data) {
				if (data == true){
					$("#loadingIcon").fadeIn(function(){
						$("#loadingIcon").fadeOut();
					});
					getRecoMember();
				}
			}
		});
	}
	
	function unfollow(userId) {
		//
		$.ajax({
			url : nsjs.ctx + "/user/unfollow/" + userId
			,type : "get"
			,dataType : "json"
			,success : function(data) {
				if (data == true){
					$("#loadingIcon").fadeIn(function(){
						$("#loadingIcon").fadeOut();
					});
					getRecoMember();
				}
			}
		});
	}
	
	function getRecoMember() {
		//
		
		$.ajax({
			url : nsjs.ctx + "/user/reco"
			,type : "get"
				,dataType : "json"
					,beforeSend : function() {
						$("#loadingIcon").fadeIn(function(){
							$("#loadingIcon").fadeOut();
						});
					}
		,success : function(data) {
			$("#recoList").fadeOut(function(){
				printRecoMember(data);
			});
		}
		});
	}
	function printRecoMember(recoList) {
		//
		var html = '';
		for (var i = 0, length = recoList.length; i < length; i++) {
			//
			var recoMember = recoList[i];
			html += '<div class="" style="text-align: center; width: 30%; float: left; border: 1px solid #cccccc; margin: 10px 10px 20px 5px; padding-top: 10px; padding-bottom: 10px; border-radius: 10px;">';
			html += '<b><a href="' + nsjs.ctx + '/main/' + recoMember.userId + '">' + recoMember.name + '</a></b><br>';
			html += '<b>' + recoMember.email + '</b><br> <img class="img-responsive"';
			html += 'src="' + nsjs.ctx + '/resources/common/img/msg.png"';
			html += 'style="margin: 5px; border-radius: 10px; width: 50%; margin-left: 25%" />';
			html += '<button class="btn btn-default" id="btnm"';
			html +=	'style="color: #444444; font-weight: bold;"';
			html +=	'onclick="follow(\''+ recoMember.userId  +'\')">';
			html +=	'<i class="glyphicon glyphicon-plus" style="color: #55acee;"></i>';
			html +=	'<i class="glyphicon glyphicon-user" style="color: #55acee;"></i> 팔로우</button>';
			html +=	'</div>';
			
		}
		$("#recoList").html(html).fadeIn();
	}
	
	window.getMessages = getMessages;
	window.appendMessage = appendMessage;
	window.getRecoMember = getRecoMember;
	window.printRecoMember = printRecoMember;
	window.follow = follow;
	window.unfollow = unfollow;
});