<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
<script type="text/javascript">
$(function(){
	
	$(".test").click(function(){
		alert($(".test").val());
		
		if ($(".test").val()=='night mode') {
			$('body').css('background-color','black');
			$('body').css('color','white');
			$(".test").val("day mode");
			$(".test").text("day mode");
		} else {
			$('body').css('background-color','white');
			$('body').css('color','black');
			$(".test").val("night mode");
			$(".test").text("night mode");
		}
		
	});
	
});


</script>
</head>
<body>

	<table border="1">
		<tr>
			<td><span><h3>Theme</h3></span></td>
		</tr>
		<tr>
			<td><input type="button" class="test" value="holy mode"></td>
			<td><input type="button" class="test" value="white mode"></td>
			<td><input type="button" class="test" value="dark mode"></td>
			<td><input type="button" class="test" value="love mode"></td>
			<td><label><input type="radio" name="theme" value="theme1">holy</label></td>
			<td><label><input type="radio" name="theme" value="theme1">white</label></td>
			<td><label><input type="radio" name="theme" value="theme1">dark</label></td>
			<td><label><input type="radio" name="theme" value="theme1">love</label></td>
		</tr>	
	</table>
	
	<table border="1">
		<tr>
			<td><span><h3>Diary Title</h3></span></td>
		</tr>
		<tr>
			<td><input type="text"></td>
		</tr>
	</table>

	<table border="1">
		<tr>
			<td><span><h3>Diary Introduce</h3></span></td>
		</tr>
		<tr>
			<td><input type="text"></td>
		</tr>
	</table>
	
	<table border="1">
		<tr>
			<td><span><h3>Diary Category</h3></span></td>
		</tr>
		<tr>
			<td><input type="text"></td>
		</tr>
	</table>
	
	
</body>
</html>