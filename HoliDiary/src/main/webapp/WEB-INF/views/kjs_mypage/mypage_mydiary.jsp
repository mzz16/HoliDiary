<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="content_mypage">
		<div id="mypage_page_box">
			<div class="mypage_index"
				onclick="showMyinfo()">
				<span>My Page</span>
			</div>
			<div  class="mypage_index"
				onclick="showFollowing()">
				<span>My Subscribe</span>
			</div>
			<div style="background-color: #FFDE59;" class="mypage_index"
				onclick="showFollower()">
				<span style="color: #6667AB;">My Diary</span>
			</div>
			<div class="mypage_content_box">
				<div>
					<div class="mypage_mydiary_title">마이 다이어리 현황</div>
				</div>
				<div class="mypage_mydiary_chart">
					차트/ 방문자 수/ 날짜
				</div>
				<div class="mypage_mydiary_follower">
					<div class="mypage_mydiary_follower_title">나를 구독하는 사람</div>
					<c:forEach var="info" items="${infos }">
					<div>
						<div class="mypage_mydiary_follower_img">
							<img src="./resources/kjs_profileImg/${info.userImg}">
						</div>
						<div>
							${info.userNickname}
						</div>
					</div>
					</c:forEach>
				</div>
			</div>
		</div>
	</div>
</body>
</html>