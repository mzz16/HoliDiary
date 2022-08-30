//레디
$(function() {
	
	// 마이다이어리 복붙 창 열기
	let blank = true;
	$("#mapage_mydiaryURL_box").click(function() {
		if(blank){
			$("#mapage_mydiaryURL").css('display','block');
			blank = !blank;
		}else{
			$("#mapage_mydiaryURL").css('display','none');
			blank = !blank;
		}
	});
	
	// 마이다이어리 복붙
	$("#mp_mydiary_copy_btn").click(function() {
	
	    // input에 담긴 데이터를 선택
	    $('#mp_mydiary_copyURL').select();
	    
	    //  clipboard에 데이터 복사
	    var copy = document.execCommand('copy');
	    
	    // 사용자 알림
	    if(copy) {
	    	alert("마이다이어리 주소가 복사되었습니다.");
	    }
	});
	
	// 마이페이지 카카오 연동 처리
	$("#mypage_kakao_checkbox").click(function(){
		if($(this).is(":checked") == true){
			if(confirm('카카오를 연동하시겠습니까?')){
				// 카카오 연결
				  Kakao.Auth.login({
				      success: function(authObj) {
				        //alert(JSON.stringify(authObj));
						            // db값에 kakaID값 넣기
						        	Kakao.Auth.authorize({
						        	redirectUri: 'http://localhost/main/connect.kakao'
						        	});
						          },
				      fail: function(err) {
				        alert(JSON.stringify(err))
				      }
				    })
				$(this).prop("checked", true);
			}else{
				$(this).prop("checked", false);
				return;
			}
		}
		if($(this).is(":checked") == false){
			if(confirm('카카오로 로그인하신 후에 해제가 됩니다. 카카오연동 해제하시겠습니까?')){
				// 카카오 아이디 값 삭제
				$(this).prop("checked", false);
				location.href='disconnect.sns';
			}else{
				$(this).prop("checked", true);
				return;
			}
		}
	});
	
	// 마이페이지 네이버 연동 처리
	$("#mypage_naver_checkbox").click(function(){
		
		if($(this).is(":checked") == true){
			if(confirm('네이버를 연동하시겠습니까?')){
				// 네이버 연동
				var btnNaverLogin = document.getElementById("naver_id_login").firstChild;
				btnNaverLogin.click();
				$(this).prop("checked", true);
			}else{
				$(this).prop("checked", false);
				return;
			}
		}
		
		if($(this).is(":checked") == false){
			if(confirm('네이버로 로그인하신 후에 해제가 됩니다. 네이버연동 해제하시겠습니까?')){
				// 네이버 아이디 삭제
				$(this).prop("checked", false);
				location.href='disconnect.sns';
			}else{
				$(this).prop("checked", true);
				return;
			}
		}
	});
	
	// 하이픈 생성(마이페이지 전화번호)
	$("#mypage_phone").keyup(function() {
		var autoHypenPhone = function(str){
		      str = str.replace(/[^0-9]/g, '');
		      var tmp = '';
		      if( str.length < 4){
		          return str;
		      }else if(str.length < 7){
		          tmp += str.substr(0, 3);
		          tmp += '-';
		          tmp += str.substr(3);
		          return tmp;
		      }else if(str.length < 11){
		          tmp += str.substr(0, 3);
		          tmp += '-';
		          tmp += str.substr(3, 3);
		          tmp += '-';
		          tmp += str.substr(6);
		          return tmp;
		      }else{              
		          tmp += str.substr(0, 3);
		          tmp += '-';
		          tmp += str.substr(3, 4);
		          tmp += '-';
		          tmp += str.substr(7);
		          return tmp;
		      }
		      return str;
		}
		this.value = autoHypenPhone( this.value ); 
	})
	
	//이름 필수
	  $('#mypage_name').blur(function() {
			
			let name = $(this);
			
			if(isEmpty(name)){
				$('#mypage_name_error').text('이름을 입력해주세요');
				$('#mypage_name_error').css('color','red');
			}else{
				$('#mypage_name_error').text('');
				$('#mypage_name_error').css('color','blue');
			}
			
			});
	
	//닉네임 중복 및 빈칸
	  $('#mypage_nickname').blur(function() {
			
			let nickname = $(this);
			
			// 닉네임 중복확인
			$.ajax({
				url : "nick.check",
				type : "GET",
				dataType : "text",
				data : {"userNickname" : nickname.val()},
				success : function(getData){
					console.log(getData);
					if(getData == '' || getData == nickname.val()){
						if(isEmpty(nickname)){
							$('#mypage_nickname_error').text('닉네임을 입력해주세요');
							$('#mypage_nickname_error').css('color','red');
						}else{
							$('#mypage_nickname_error').text('사용가능한 닉네임입니다');
							$('#mypage_nickname_error').css('color','blue');
						}
					}else{
						$('#mypage_nickname_error').text('이미 사용중인 닉네임입니다');
						$('#mypage_nickname_error').css('color','red');
					}
				},
				error : function(request,status,error) {
					console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
			
			});
	  
		//핸드폰 필수
	  $('#mypage_phone').blur(function() {
			
			let name = $(this);
			
			if(isEmpty(name)){
				$('#mypage_phone_error').text('핸드폰번호를 입력해주세요');
				$('#mypage_phone_error').css('color','red');
			}else{
				$('#mypage_phone_error').text('');
				$('#mypage_phone_error').css('color','blue');
			}
			
			});
	  
		//이메일 필수
	  $('#mypage_email').blur(function() {
			
			let name = $(this);
			
			if(isEmpty(name)){
				$('#mypage_email_error').text('핸드폰번호를 입력해주세요');
				$('#mypage_email_error').css('color','red');
			}else{
				$('#mypage_email_error').text('');
				$('#mypage_email_error').css('color','blue');
			}
			
			});
	
});

//마이페이지 회원만 이용가능
function mypageCheckUser(){
	
		let id = $("#userID");
		//alert(id.val());
		
		$.ajax({
			url: 'id.check',
			type : 'GET',
			dataType : 'text',
			data : {'userID' : id.val()},
			success : function(result) {
				console.log(result);
				if(result == 0){
					alert('로그인 후 이용해주세요');
					return false;
				} else{
					location.href="mypage.myinfo.go";
					return true;
				}
				
			},
			error : function(request,status,error) {
    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    			alert('문제가 발생했습니다. 다시 이용해주세요.')
    			return false;
    		}
		});
		
}

// 마이페이지 내 정보 이동

function showMyinfo(){
	location.href='mypage.myinfo.go'
}

// 마이페이지 정보수정 이동
function showFollowing(){
	location.href='mypage.mysubscribe.go'
}

// 마이페이지 구독정보 확인
function showFollower(){
	location.href='mypage.mydiary.go'
}


// 탈퇴
function deleteUser(){
	
	let pw = $("#mypage_pW");
	let id = $("#mypage_id");
	
	if(isEmpty(pw)){
		alert('비밀번호를 입력해주세요. 소셜회원가입을 하셨다면 비밀번호를 재발급 받아주세요.');
		pw.focus();
	}else{
		$.ajax({
			url: 'pw.check',
			type : 'POST',
			dataType : 'text',
			data : {'userID': id.val(), 'userPW' : pw.val()},
			success : function(result) {
				console.log(result);
				if(result == 1){
					let ok = confirm('정말 탈퇴하시겠습니까? 탈퇴와 동시에 소셜 로그인 연동도 해제됩니다.');
					if(ok){
						location.href="delete.do";
					}
				}else{
					alert('비밀번호를 확인해주세요');
				}
			},
			error : function(request,status,error) {
    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    			alert('문제가 발생했습니다. 다시 이용해주세요.')
    			return false;
    		}
		});
	}
}

function updateValidCheck(){
	
	let pw = $("#mypage_pW");
	let name = $("#mypage_name");
	let nickname = $("#mypage_nickname");
	let phone = $("#mypage_phone");
	let email = $("#mypage_email");
	
	let nameError = $('#mypage_name_error').css("color");
	let nickError = $('#mypage_nickname_error').css("color");
	let phoneError = $('#mypage_phone_error').css("color");
	let emailError = $('#mypage_email_error').css("color");
	
	
	if(isEmpty(name) || nameError == 'rgb(255, 0, 0)'){
		name.focus();
		if(isEmpty(name)){
			$('#join_name_error').text('이름을 입력해주세요');
			$('#join_name_error').css('color','red');
		}
		return false;
	} else if (isEmpty(nickname) || nickError == 'rgb(255, 0, 0)'){
		nickname.focus();
		if(isEmpty(nickname)){
			$('#join_nickname_error').text('닉네임을 입력해주세요');
			$('#join_nickname_error').css('color','red');
		}
		return false;
	} else if(isEmpty(phone) || phoneError == 'rgb(255, 0, 0)'){
		phone.focus();
		if(isEmpty(phone)){
			$('#join_phone_error').text('전화번호를 입력해주세요');
			$('#join_phone_error').css('color','red');
		}
		return false;
	} else if(isEmpty(email) || emailError == 'rgb(255, 0, 0)'){
		email.focus();
		if(isEmpty(email)){
			$('#join_email_error').text('이메일을 입력해주세요');
			$('#join_email_error').css('color','red');
		}
		return false;
	}
	
	if(isEmpty(pw)){
		alert('비밀번호를 확인해주세요.');
		pw.focus();
		return false;
	}
	return true;
}

function changePWValidCheck(){
	
	var flag = true;
	
	let newPW = $("#mypage_new_pw");
	let newPWCheck = $("#mypage_pw_check");
	let oldPW = $("#mypage_old_pw");
	let id = $("#mypage_id")
	
	if(isEmpty(newPW)){
		$('#mypage_newPW_error').text('새 비밀번호를 입력해주세요');
		$('#mypage_newPW_error').css('color','red');
		newPW.focus();
		return false;
	}else if(lessThan(newPW, 8) || containsHS(newPW)){
		$('#mypage_newPW_error').text('비밀번호는 8~16자 영문 소문자, 숫자로 입력해주세요');
		$('#mypage_newPW_error').css('color','red');
		newPW.focus();
		return false;
	}else{
		$('#mypage_newPW_error').text('');
	}
	
	if(isEmpty(newPWCheck)){
		$('#mypage_newPWCheck_error').text('비밀번호를 입력해주세요')
		$('#mypage_newPWCheck_error').css('color','red');
		newPWCheck.focus();
		return false;
	}else if(notEquals(newPW, newPWCheck)){
		$('#mypage_newPWCheck_error').text('비밀번호가 일치하지 않습니다')
		$('#mypage_newPWCheck_error').css('color','red');
		newPWCheck.focus();
		return false;
	}else{
		$('#mypage_newPWCheck_error').text('')
	}
	
	if(isEmpty(oldPW)){
		$('#mypage_oldPW_error').text('기존의 비밀번호를 입력해주세요')
		$('#mypage_oldPW_error').css('color','red');
		oldPW.focus();
		return false;
	}else{
		$.ajax({
			url: 'pw.check',
			type : 'POST',
			dataType : 'text',
			data : {'userID': id.val(), 'userPW' : oldPW.val()},
			async: false,
			success : function(result) {
				console.log(result);
				if(result == 1){
					$('#mypage_oldPW_error').text('')
					flag = true;
				}else{
					$('#mypage_oldPW_error').text('비밀번호가 틀렸습니다')
					$('#mypage_oldPW_error').css('color','red');
					oldPW.focus();
					flag = false;
				}
			},
			error : function(request,status,error) {
    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    			alert('문제가 발생했습니다. 다시 이용해주세요.')
    			flag = false;
    		}
		});
		return flag;
	}
	
	return true;
}

function mysubSearch(){
	
	let search = $("#mysubSearch").val();
	
	$.ajax({
		url: 'mysub.search',
		type : 'GET',
		dataType : 'json',
		data : {'mysubSearch': search},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		success : function(data) {
			console.log(JSON.stringify(data))
			$.each(data, function (i, item){
				$("#mysub_info_list_box").html(data[i].userImg);
			})
		},
		error : function(error) {
			alert('문제가 발생했습니다. 다시 이용해주세요.')
		}
	});
}

function subscribeCancel(no){
	
	//alert(no);
	
	let ok = confirm('정말 구독 취소하시겠습니까?');
	if(ok){
		
		$.ajax({
			url: 'mysub.cancel',
			type : 'GET',
			dataType : 'text',
			data : {'no': no},
			success : function(data) {
				if(data == 1){
					location.reload();
				}else{
					alert('구독 취소에 실패했습니다')
				}
			},
			error : function(error) {
				alert('문제가 발생했습니다. 다시 이용해주세요.')
			}
		});
		
	}
}

function mypagePopup(id){
	let options = "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=1000, height=600, top=100, left=270";
	
	//alert(id);
	
	var url = 'popup.open?userId=' +id;
	
	window.open(url,"_blank", options);
}

function subscribeDo(id){
	$.ajax({
		url: 'subscribe.do',
		type : 'GET',
		dataType : 'text',
		data : {'id': id},
		success : function(data) {
			if(data == 1){
				location.reload();
			}else{
				alert('구독에 실패했습니다')
			}
		},
		error : function(error) {
			alert('문제가 발생했습니다. 다시 이용해주세요.')
		}
	});
}