<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" name="viewport"
	content="width=device-width, initial-scale=1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="jquery/jquery.js"></script>
<style>
.ck-editor__editable {
	height: 400px;
}
</style>
</head>
<body>

	<input type="button" value="팝업창 호출" onclick="showPopupMap();" />

	<script language="javascript">
		function showPopupMap() {

			let options = "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=800, height=650, top=100, left=270";

			window.open("map.open", "map", options);
		}
	</script>

	<!-- ------------------------------------------------------------------------------- -->

	<h1>CKEditor</h1>
	<form action="write.go" method="GET">
	
		<label for="select-id">카테고리 선택</label> 
		<select name="category" id="select-id">
			<option value="post">POST</option>
		</select>
		
		<textarea name="text" id="editor"></textarea>
		<p>
			<input type="submit" value="전송">
		</p>
	</form>
	
	<script src="https://cdn.ckeditor.com/ckeditor5/35.0.1/classic/ckeditor.js"></script>
	<script
		src="https://cdn.ckeditor.com/ckeditor5/34.0.0/classic/translations/ko.js"></script>
	<script>
		ClassicEditor.create(document.querySelector('#editor'), {
			language : "ko"
		});
	</script>

</body>
</html>