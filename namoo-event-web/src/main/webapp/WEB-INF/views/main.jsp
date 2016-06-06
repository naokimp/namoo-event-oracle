<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@include file="/WEB-INF/views/common/head.jsp"%>
<title>NamooEvent</title>
</head>
<body>

	<div class="container">
		<div id="loadingIcon">
			<img src="${ctx}/resources/img/ajax-loader.gif" />
		</div>

		<h1>모임 목록</h1>
		<button class="btn btn-default" onclick="location.href='${ctx}/register'">모임 등록</button>
		<br />
		<br />
		<c:forEach var="event" items="${eventList}" >
		<div class="event-item">
			<table class="table table-resposive">
				<tr>
					<td rowspan="3" style="width: 105px"><img
						src="${ctx}/image/${event.id}/1" class="img-responsive" style="border-radius:5px;"></img></td>
					<td style="width: 100px">모임명</td>
					<td>${event.name}</td>
				</tr>
				<tr>
					<fmt:formatDate value="${event.regDate}" var="eventDate" pattern="yyyy일 MM월 dd일 a hh시 mm분 (E)" />
					<td>일시</td>
					<td>${eventDate}</td>
				</tr>
				<tr>
					<td>소개</td>
					<td>${event.subject}</td>
				</tr>
				<tr>
					<td colspan="3">
						<button class="btn btn-default" name="show_btn" data-id="${event.id}">펼치기</button>
						<button class="btn btn-default" name="hide_btn" style="display: none;">접기</button>
						<div id="detail-area"></div>
					</td>
				</tr>
			</table>
		</div>
		<br/><br/>
		</c:forEach>

		<hr>

		<footer>
			<p>&copy; Kim Kyoung-won 2014</p>
		</footer>

	</div>
	<!--/.container-->

</body>
</html>