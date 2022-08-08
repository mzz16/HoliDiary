function loginIsNotEmpty(){
	let id = document.loginForm.userID
	let pw = document.loginForm.userPW

	if(isEmpty(id)){
		alert('아이디를 입력해주세요');
		id.focus();
		return false;
	}
	
	if(isEmpty(pw)){
		alert('비밀번호를 입력해주세요');
		pw.focus();
		return false;
	}
	
	return true;
	
}