<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="resources/jquery/jquery.js"></script>
<script type="text/javascript">
$(function(){
	
	$("input[name='themeColor']").change(function(){
		let color = $("input[name='themeColor']:checked").val();
		console.log(color);
			$('body').css('background',color);
			$(".themeColor").removeClass("selected");
		});
	
	
});


</script>
</head>
<body>

<form action="diary.update">
	<table border="1">
		<tr>
			<td colspan="10"><span><h3>Theme Color</h3></span></td>
		</tr>
		<tr>
			<td><label><input type="radio" name="themeColor" value="linear-gradient(to top, #FFDE59, #5D5FB2)" checked/>holi</label></td>
			<td><label><input type="radio" name="themeColor" value="#FFFEFA"/>white</label></td>
			<td><label><input type="radio" name="themeColor" value="gray"/>dark</label></td>
			<td><label><input type="radio" name="themeColor" value="#FF9EBB"/>love</label></td>
			<td><label><input type="radio" name="themeColor" value="#99CCFF"/>sky</label></td>
			<td><label><input type="radio" name="themeColor" value="linear-gradient(to top, #453742, #F7C5EE)"/>sujin</label></td>
		</tr>	
	</table>
	
	<table border="1">
		<tr>
			<td><span><h3>Diary Title</h3></span></td>
		</tr>
		<tr>
			<td><input value="${Diary.diaryTitle }" type="text" name="diaryTitle" autocomplete="off"></td>
		</tr>
	</table>

	<table border="1">
		<tr>
			<td><span><h3>Diary Introduce</h3></span></td>
		</tr>
		<tr>
			<td><input value="${Diary.diaryIntroduce }" type="text" name="diaryIntroduce" autocomplete="off"></td>
			<td><input type="hidden" value="${Diary.diaryUserId }" name="diaryUserId"></td>
		</tr>
	</table>
	
	
	
	<table>
		<tr>
			<td><button style="background-color: gray;">완료</button></td>
		</tr>
	</table>
</form>	
	
</body>
</html>