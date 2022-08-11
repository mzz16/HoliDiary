<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<c:if test="${curPage != 1 }">
		<a href="search.page.change?p=${curPage - 1 }&search=${search}" id="snsL">&lt;</a>
	</c:if>
	<c:if test="${curPage != pageCount }">
		<a href="search.page.change?p=${curPage + 1 }&search=${search}" id="snsR">&gt;</a>
	</c:if> 
	
	<c:forEach var="c" items="${contents }">
		<div style="background-color: salmon; width: 200px; height: 200px;">
			<p>작성자: ${c.postwriter }</p>
			<p>내용: ${c.posttxt }</p>
			<span>카테고리: ${c.postcategory }</span><br>
			<span>국가: ${c.postcountry }</span><br>
			<span>추천수: ${c.postrecommend }</span><br>
			<span>이미지: ${c.postimg }</span><br>
			<span>날씨: ${c.postweather }</span>
		</div>
		
	</c:forEach>
</body>
</html>