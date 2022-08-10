
// 로그인에 쓸 유효성 검사
function loginIsNotEmpty(){
	let id = document.loginForm.userID
	let pw = document.loginForm.userPW

	if(isEmptyForJS(id)){
		id.focus();
		$('#login_error').text('아이디를 입력해주세요');
		$('#login_error').css('color','red');
		return false;
	}
	
	if(isEmptyForJS(pw)){
		pw.focus();
		$('#login_error').text('비밀번호를 입력해주세요');
		$('#login_error').css('color','red');
		return false;
	}
	
	return true;
	
}

// 회원가입 안 넘어가게 유효성 검사
function joinCheck(){
	let name = document.joinForm.userName;
	let nickname = document.joinForm.userNickname;
	let id = document.joinForm.userID;
	let pw = document.joinForm.userPW;
	let pwCheck = document.joinForm.pwCheck;
	let phone = document.joinForm.userPhoneNumber;
	let email = document.joinForm.userEmail;
	
	let nameError = $('#join_name_error').css("color");
	let nickError = $('#join_nickname_error').css("color");
	let idError = $('#join_id_error').css("color");
	let pwError = $('#join_pw_error').css("color");
	let pwcheckError = $('#join_pwCheck_error').css("color");
	let phoneError = $('#join_phone_error').css("color");
	let emailError = $('#join_email_error').css("color");
	
	if(isEmptyForJS(name) || nameError == 'rgb(255, 0, 0)'){
		name.focus();
		if(isEmptyForJS(name)){
			$('#join_name_error').text('이름을 입력해주세요');
			$('#join_name_error').css('color','red');
		}
		return false;
	} else if (isEmptyForJS(nickname) || nickError == 'rgb(255, 0, 0)'){
		nickname.focus();
		if(isEmptyForJS(nickname)){
			$('#join_nickname_error').text('닉네임을 입력해주세요');
			$('#join_nickname_error').css('color','red');
		}
		return false;
	} else if (isEmptyForJS(id) || idError == 'rgb(255, 0, 0)'){
		id.focus();
		if(isEmptyForJS(id)){
			$('#join_id_error').text('아이디를 입력해주세요');
			$('#join_id_error').css('color','red');
		}
		return false;
	} else if (isEmptyForJS(pw) || pwError == 'rgb(255, 0, 0)'){
		pw.focus();
		if(isEmptyForJS(pw)){
			$('#join_pw_error').text('비밀번호를 입력해주세요');
			$('#join_pw_error').css('color','red');
		}
		return false;
	} else if(isEmptyForJS(pwCheck) || pwcheckError == 'rgb(255, 0, 0)'){
		pwCheck.focus();
		if(isEmptyForJS(pwCheck)){
			$('#join_pwCheck_error').text('재확인 비밀번호를 입력해주세요');
			$('#join_pwCheck_error').css('color','red');
		}
		return false;
	} else if(isEmptyForJS(phone) || phoneError == 'rgb(255, 0, 0)'){
		phone.focus();
		if(isEmptyForJS(phone)){
			$('#join_phone_error').text('전화번호를 입력해주세요');
			$('#join_phone_error').css('color','red');
		}
		return false;
	} else if(isEmptyForJS(email) || emailError == 'rgb(255, 0, 0)'){
		email.focus();
		if(isEmptyForJS(email)){
			$('#join_email_error').text('이메일을 입력해주세요');
			$('#join_email_error').css('color','red');
		}
		return false;
	}
	
	return true;
}



// 회원가입에 쓸 레디문
$(function() {
	
	//이름 필수
	  $('#join_name').blur(function() {
			
			let name = $(this);
			
			if(isEmpty(name)){
				$('#join_name_error').text('이름을 입력해주세요');
				$('#join_name_error').css('color','red');
			}else{
				$('#join_name_error').text('');
				$('#join_name_error').css('color','blue');
			}
			
			});
	  
	 
	  $('#join_nickname').blur(function() {
			
			let nick = $(this);
			let nickVal = $(this).val();
			
			
			// 닉네임 중복확인
			$.ajax({
				url : "nick.check",
				type : "GET",
				dataType : "text",
				data : {"userNickname" : nickVal},
				success : function(getData){
					console.log(getData);
					if(getData == 1){
						$('#join_nickname_error').text('이미 사용중인 닉네임입니다');
						$('#join_nickname_error').css('color','red');
					}else if(getData == 0){
						if(isEmpty(nick)){
							$('#join_nickname_error').text('닉네임을 입력해주세요');
							$('#join_nickname_error').css('color','red');
						}else{
							$('#join_nickname_error').text('사용가능한 닉네임입니다');
							$('#join_nickname_error').css('color','blue');
						}
					}
				},
				error : function(request,status,error) {
					console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
			
			 // 닉네임 필수
			if(isEmpty(nick)){
				$('#join_nickname_error').text('닉네임을 입력해주세요');
				$('#join_nickname_error').css('color','red');
			}else{
				$('#join_nickname_error').text('');
				$('#join_nickname_error').css('color','blue');
			}
			
			});
	  
	  // 아이디 중복 체크
	  $('#join_id').blur(function() {
			
			let idVal = $(this).val();
			let id = $(this);
			
			// 아이디 조건
			if(lessThan(id, 5) || containsHS(id)){
				$('#join_id_error').text('아이디는 5~20자 영문 소문자, 숫자로 입력해주세요');
				$('#join_id_error').css('color','red');
			}
			
			
			// 중복값 확인
			$.ajax({
				url : "id.check",
				type : "GET",
				dataType : "text",
				data : {"userID" : idVal},
				success : function(getData){
					//console.log(getData);
					if(getData == 1){
						$('#join_id_error').text('이미 사용중인 아이디입니다');
						$('#join_id_error').css('color','red');
					}else if(getData == 0){
						if(isEmpty(id)){
							$('#join_id_error').text('아이디를 입력해주세요');
							$('#join_id_error').css('color','red');
						}else{
							if(lessThan(id, 5) || containsHS(id)){
								$('#join_id_error').text('아이디는 5~20자 영문 소문자, 숫자로 입력해주세요');
								$('#join_id_error').css('color','red');
							}else{
								$('#join_id_error').text('사용가능한 아이디입니다');
								$('#join_id_error').css('color','blue');
							}
							
						}
					}
				},
				error : function(request,status,error) {
					console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
			
			// 필수
			if(isEmpty(id)){
				$('#join_id_error').text('아이디를 입력해주세요');
				$('#join_id_error').css('color','red');
			}else{
				$('#join_id_error').text('');
				$('#join_id_error').css('color','blue');
			}
		});
	  
	  // 비밀번호
	  $('#join_pw').blur(function() {
		let pw = $(this);
		
		// 비번 필수
		if(isEmpty(pw)){
			$('#join_pw_error').text('비밀번호를 입력해주세요');
			$('#join_pw_error').css('color','red');
		}else{
			$('#join_pw_error').text('');
			$('#join_pw_error').css('color','blue');
		}
		
		//비번 조건
		if(lessThan(pw, 8) || containsHS(pw)){
			$('#join_pw_error').text('비밀번호는 8~16자 영문 대 소문자, 숫자로 입력해주세요');
			$('#join_pw_error').css('color','red');
		}else{
			$('#join_pw_error').text('사용가능한 비밀번호입니다');
			$('#join_pw_error').css('color','blue');
		}
		
			
		  
		});
	  
	  // 비밀번호 확인
	  $('#join_pwCheck').blur(function() {
		  let pw = $('#join_pw');
		  let pwCheck = $(this);
		
			// 비번 필수
			if(isEmpty(pwCheck)){
				$('#join_pwCheck_error').text('비밀번호를 입력해주세요');
				$('#join_pwCheck_error').css('color','red');
			}else{
				//비번 확인
				if(notEquals(pw, pwCheck)){
					$('#join_pwCheck_error').text('입력하신 비밀번호와 다릅니다');
					$('#join_pwCheck_error').css('color','red');
				}else{
					$('#join_pwCheck_error').text('비밀번호가 일치합니다');
					$('#join_pwCheck_error').css('color','blue');
				}	
			}
		});
	  
	  // 전화번호
	  $('#join_phone').blur(function() {
		  let phone = $(this);
		
			// 필수
			if(isEmpty(phone)){
				$('#join_phone_error').text('전화번호를 입력해주세요');
				$('#join_phone_error').text('비밀번호를 입력해주세요');
			}else{
				$('#join_phone_error').text('');
				$('#join_phone_error').css('color','blue');
			}
			
		});
	  
	  // 이메일
	  $('#join_email').blur(function() {
		  let email = $(this);
		
			// 필수
			if(isEmpty(email)){
				$('#join_email_error').text('이메일을 입력해주세요');
				$('#join_email_error').text('비밀번호를 입력해주세요');
			}else{
				$('#join_email_error').text('');
				$('#join_email_error').css('color','blue');
			}
			
		});
	  
	
	
	
});