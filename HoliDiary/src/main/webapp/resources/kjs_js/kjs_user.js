
// 전화번호 자동 하이픈 생성 함수
function phoneNumberHyphen(){
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


	var phoneNum = document.joinForm.userPhoneNumber;
	var phoneNum = ('#id_search_phone');

	phoneNum.onkeyup = function(){
	  //console.log(this.value);
	  this.value = autoHypenPhone( this.value );  
	}
}


// 카카오 소셜 로그인을 위한 초기 설정
Kakao.init('4341fa67ca594172a2669bd0ccaf89fc');
console.log('카카오톡 권한 : ' + Kakao.isInitialized());

// 카카오톡으로 로그인 하기
function loginWithKakao() {
	
	  Kakao.Auth.login({
      success: function(authObj) {
        //alert(JSON.stringify(authObj))
        Kakao.API.request({
		          url: '/v2/user/me',
		          success: function(res) {
		            //console.log(JSON.stringify(res));
		            let kakaoID = res.id;
		            let email = res.kakao_account["email"];
		            let id = email.split('@')[0];
		            $.ajax({
		        		url : "id.check",
		        		type : "GET",
		        		dataType : "text",
		        		data : {"kakaoID" : kakaoID, "userID" : id},
		        		success : function(getData){
		        			console.log(getData);
		        			if(getData == 1){
		        				Kakao.Auth.authorize({
		        					redirectUri: 'http://localhost/main/social.kakao'
		        				})
		        			}else if(getData == 2 || getData == 0){
		        				alert('회원가입을 먼저 진행해주세요');
		        			}
		        		},
		        		error : function(request,status,error) {
		        			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		        		}
		        	});
		          },
		          fail: function(error) {
		        	  console,log('login success, but failed to request user information: ' +
				                JSON.stringify(error))
		          },
		        })
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    })
	
	
	
	
    
  }

function joinWithKakao() {
	Kakao.Auth.login({
	      success: function(authObj) {
	        //alert(JSON.stringify(authObj))
	        Kakao.API.request({
			          url: '/v2/user/me',
			          success: function(res) {
			            //alert(JSON.stringify(res))
			            let kakaoID = res.id;
			            let email = res.kakao_account["email"];
			            let id = email.split('@')[0];
			            $.ajax({
			        		url : "id.check",
			        		type : "GET",
			        		dataType : "text",
			        		data : {"kakaoID" : kakaoID, "userID" : id},
			        		success : function(getData){
			        			console.log(getData);
			        			if(getData == 1){
			        				alert('이미 등록된 회원입니다')
			        			}else if(getData == 2){
			        				alert('네이버로 이미 등록된 회원입니다. 아닌 경우 간편회원가입 이용후, 카카오연동을 이용해주세요.');
			        			} else {
			        				Kakao.Auth.authorize({
			        					redirectUri: 'http://localhost/main/social.kakao'
			        				})
			        			}
			        		},
			        		error : function(request,status,error) {
			        			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			        		}
			        	});
			          },
			          fail: function(error) {
			        	  console,log('login success, but failed to request user information: ' +
					                JSON.stringify(error))
			          },
			        })
	      },
	      fail: function(err) {
	        alert(JSON.stringify(err))
	      },
	    })
}

function searchID(){

	let name = $('#id_search_name');
	let phone = $('#id_search_phone');
	
	$("#id_search_btn").click(function() {
		
		
		if(isEmpty(name)){
			name.focus();
			$('#userID_show').text('아이디를 입력해주세요');
			$('#userID_show').css('color','red');
			return false;
		}
		
		if(isEmpty(phone)){
			phone.focus();
			$('#userID_show').text('전화번호를 입력해주세요');
			$('#userID_show').css('color','red');
			return false;
		}
		
		if(!isEmpty(name) && !isEmpty(phone)){
			console.log('빈칸은 없음')
			$.ajax({
				url : 'id.search.do',
				type : 'POST',
				dataType : 'text',
				data : {'userName' : name.val(), 'userPhoneNumber' : phone.val()},
				success : function(getID) {
					console.log(getID);
					if(getID != null){
						console.log('아이디 찾음');
						$('#userID_show').text(getID);
						$('#userID_show').css('color','red');
					}else{
						console.log('아이디 없음')
						$('#userID_show').text('회원정보를 다시 확인해주세요. 또는 없는 회원입니다.');
						$('#userID_show').css('color','red');
					}
				},
				error : function(request,status,error) {
        			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        		}
			});
		}
		
		
	});
	
}

function mypageCheckUser(){
	
	$("#mypage_btn").click(function() {
		let id = $("#userID");
		alert(id.val());
		
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
					return true;
				}
				
			},
			error : function(request,status,error) {
    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    			alert('문제가 발생했습니다. 다시 이용해주세요.')
    			return false;
    		}
		});
		
	});
}



// 레디
$(function() {
	phoneNumberHyphen();
});
