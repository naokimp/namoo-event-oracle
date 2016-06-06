<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@include file="/WEB-INF/views/common/head.jsp"%>
<script type="text/javascript">
$(document).ready(function() {
	function submit() {
		var date = $('#date').val();
		var time = $('#time').val();
		//alert(time);
		var datetime = new Date();
		datetime.setFullYear(Number(date.substr(0, 4)));
		//alert(datetime.getFullYear());
		datetime.setMonth(Number(date.substr(5, 2)) - 1);
		//alert(datetime.getMonth());
		datetime.setDate(Number(date.substr(8, 2)));
		//alert(datetime.getDate());
		datetime.setHours(Number(time.substr(0, 2)), Number(time.substr(3, 2)), 0, 0);		
		//alert(datetime.getTime());
		$('#datetime').val(datetime.getTime());
		//alert(datetime);
		//alert(datetime.getTime());
		$('#registerForm').submit();
	}
	
	window.submit = submit;
});
</script>
<title>NamooEvent</title>
</head>
<body>

	<div class="container">

		<h1>모임등록</h1>
		<div class="event-item">
			<form action="${ctx}/register" method="post" enctype="multipart/form-data" id="registerForm">
				<table class="table table-resposive">
					<tr>
						<td style="width: 100px">모임명</td>
						<td><input class="form-control" type="text" name="name" /></td>
					</tr>
					<tr>
						<td>일자</td>
						<td><input class="form-control" type="date" id="date"/><input class="form-control" type="time" id="time"/>
						<input type="hidden" name="datetime" id="datetime" /></td>
					</tr>
					<tr>
						<td>소개</td>
						<td><textarea class="form-control" name="subject"></textarea></td>
					</tr>
					<tr>
						<td>작은이미지</td>
						<td><input class="form-control" type="file" name="smallImageFile" /></td>
					</tr>
					<tr>
						<td>큰이미지</td>
						<td><input class="form-control" type="file" name="largeImageFile" /></td>
					</tr>
					<tr>
						<td>상세설명</td>
						<td><textarea class="form-control" name="description"></textarea></td>
					</tr>
				</table>
			</form>
			<input class="btn btn-default" type="button" value="등록" onclick="submit()"/>
		</div>

		<hr>

		<footer>
			<p>&copy; Kim Kyoung-won 2014</p>
		</footer>

	</div>
	<!--/.container-->

</body>
</html>