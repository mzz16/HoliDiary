<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" name="viewport"
	content="width=device-width, initial-scale=1">
<title>Insert title here</title>
<script type="text/javascript" src="jquery/jquery.js"></script>
<script type="text/javascript" src="mj_js/ckeditor.js"></script>
<style>
	.ck-editor__editable { height: 400px; }
</style>
</head>
<body>

	<h1>CKEditor</h1>
	<form action="write.go" method="GET">
		<textarea name="text" id="editor"></textarea>
		<p>
			<input type="submit" value="전송">
		</p>
	</form>
	<script
		src="https://cdn.ckeditor.com/ckeditor5/35.0.1/classic/ckeditor.js"></script>
	<script
		src="https://cdn.ckeditor.com/ckeditor5/34.0.0/classic/translations/ko.js"></script>
	<script>
		ClassicEditor.create(document.querySelector('#editor'), {
			language : "ko"
		});
	</script>
	
</body>
</html>