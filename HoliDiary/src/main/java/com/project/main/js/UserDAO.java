package com.project.main.js;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.project.main.sm.CategoryMapper;
import com.project.main.sm.DiaryMapper;

@Service
public class UserDAO {

	@Autowired
	private SqlSession ss;

	public void join(User u, HttpServletRequest req) {
		String path = req.getSession().getServletContext().getRealPath("resources/kjs_profileImg");
		System.out.println(path);
		MultipartRequest mr = null;
		
		try {
			
			mr = new MultipartRequest(req, path, 10 * 1024 * 1024, "utf-8", new DefaultFileRenamePolicy());
			
			String name = mr.getParameter("userName");
			String nickname = mr.getParameter("userNickname");
			String id = mr.getParameter("userID");
			String pw = mr.getParameter("userPW");
			String phone = mr.getParameter("userPhoneNumber");
			String email = mr.getParameter("userEmail");
			String url = mr.getParameter("userDiaryUrl");
			
			u.setUserNickname(nickname);
			u.setUserName(name);
			u.setUserID(id);
			u.setUserPW(pw);
			u.setUserPhoneNumber(phone);
			u.setUserEmail(email);
			u.setUserDiaryUrl(url+id);
			u.setUserImg("person-3093152.jpg");
			
			/*System.out.println(url+id);
			System.out.println(nickname);
			System.out.println(name);
			System.out.println(id);
			System.out.println(pw);
			System.out.println(phone);
			System.out.println(email);
			System.out.println(img);*/
			
				
			if(ss.getMapper(UserMapper.class).join(u) == 1) {
				req.getSession().setAttribute("loginUser", u);
				req.getSession().setMaxInactiveInterval(60*10);
				System.out.println("세션 등록 성공");
				ss.getMapper(DiaryMapper.class).diaryInsert(u);
				ss.getMapper(CategoryMapper.class).categoryUserInsert(u);
				req.setAttribute("r", "가입성공");
			}else {
				req.setAttribute("r", "가입실패");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			String fileName = mr.getFilesystemName("userImg");
			new File(path + "/" + fileName).delete();
			req.setAttribute("r", "가입실패");
		}
	}
	
	// ajax 아이디 체크
	public int idCheck(User u, HttpServletRequest req) {
		//System.out.println(req.getParameter("kakaoID"));
		//System.out.println(req.getParameter("naverID"));
		//System.out.println(req.getParameter("userID"));
		
		if(req.getParameter("naverID") != null) {
			if(ss.getMapper(UserMapper.class).idCheck(u) == 1) {
				if(ss.getMapper(UserMapper.class).idCheckWithNaver(u) == 0) {
					return 2;
				}
			}
			return ss.getMapper(UserMapper.class).idCheckWithNaver(u);
		}
		
		if(req.getParameter("kakaoID") != null) {
			if(ss.getMapper(UserMapper.class).idCheck(u) == 1) {
				if(ss.getMapper(UserMapper.class).idCheckWithKakao(u) == 0) {
					return 2;
				}
			}
			return ss.getMapper(UserMapper.class).idCheckWithKakao(u);
		}
		
		return ss.getMapper(UserMapper.class).idCheck(u);
	}
	
	// ajax 닉네임 체크
	public int nickCheck(User u) {
		return ss.getMapper(UserMapper.class).nickCheck(u);
	}
	
	public void fileUpdate(User u, HttpServletRequest req) {
		String path = req.getSession().getServletContext().getRealPath("resources/kjs_profileImg");
		MultipartRequest mr = null;
		User loginUser =  (User) req.getSession().getAttribute("loginUser");
		String oldFile = loginUser.getUserImg();
		String newFile = null;
		try {
			mr = new MultipartRequest(req, path, 10 * 1024 * 1024, "utf-8", new DefaultFileRenamePolicy());
			newFile = mr.getFilesystemName("userImg");
			if (newFile == null) {
				newFile = oldFile;
			} else {
				newFile = URLEncoder.encode(newFile, "utf-8");
				newFile = newFile.replace("+", " ");
			}
			
			System.out.println(newFile);
			
			u.setUserID(loginUser.getUserID());
			u.setUserImg(newFile);
			u.setUserDiaryUrl(loginUser.getUserDiaryUrl());
			u.setUserEmail(loginUser.getUserEmail());
			u.setUserName(loginUser.getUserName());
			u.setUserNickname(loginUser.getUserNickname());
			u.setUserPhoneNumber(loginUser.getUserPhoneNumber());
			u.setUserPW(loginUser.getUserPW());
			
			if (ss.getMapper(UserMapper.class).fileUpdate(u) == 1) {
				System.out.println("사진 업뎃");
				req.getSession().setAttribute("loginUser", u);
				if (!oldFile.equals(newFile)) {
					oldFile = URLDecoder.decode(oldFile, "utf-8");
					new File(path + "/" + oldFile).delete();
				}
			} else {
				System.out.println("사진 업뎃 실패");
				if (!oldFile.equals(newFile)) {
					newFile = URLDecoder.decode(newFile, "utf-8");
					new File(path + "/" + newFile).delete();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("수정실패");
			if (!oldFile.equals(newFile)) {
				try {
					newFile = URLDecoder.decode(newFile, "utf-8");
				} catch (UnsupportedEncodingException e1) {
				}
				new File(path + "/" + newFile).delete();
			}
		}
	}
	
	public boolean login(User u, HttpServletRequest req) {
		
		User dbUser = ss.getMapper(UserMapper.class).getUserByID(u);
		
		if(dbUser != null) {
			if(u.getUserPW().equals(dbUser.getUserPW())) {
				req.getSession().setAttribute("loginUser", dbUser);
				req.getSession().setMaxInactiveInterval(60*10);
				req.setAttribute("r", "로그인 성공");
				return true;
			}else {
				req.setAttribute("r", "로그인실패");
			}
		} else {
			req.setAttribute("r", "로그인실패");
		}
		
		return false;
		
	}

	public boolean loginCheck(HttpServletRequest req) {
		
		User u = (User) req.getSession().getAttribute("loginUser");
		if(u != null) {
			req.setAttribute("loginPage", "kjs_user/after_login.jsp");
			return true;
		}
		
		req.setAttribute("loginPage", "kjs_user/before_login.jsp");
		return false;
		
	}

	public void logout(HttpServletRequest req) {
		req.getSession().setAttribute("loginUser", null);
	}
	
	// 카카오 토근 가져오기 
	public void getKakaoToken(String code, HttpServletRequest req) {
		String access_Token = "";
        String refresh_Token = "";
		String requestURL = "https://kauth.kakao.com/oauth/token";
		try {
			URL url = new URL(requestURL);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			// POST 요청을 위해 기본값이 false인 setDoOutput을 true로
			con.setRequestMethod("POST");
			con.setDoOutput(true);
			
			// POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(con.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=2a81773cdaa73d4aadc2ed8f0c9370ac");
            sb.append("&redirect_uri=http://localhost/main/social.kakao");
            sb.append("&code=" + code);
            bw.write(sb.toString());
            bw.flush();

            //    결과 코드가 200이라면 성공
            int responseCode = con.getResponseCode();
            System.out.println("responseCode : " + responseCode);
            
            //    요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);
            
            //Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            
            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();

            req.setAttribute("access_Token", access_Token);
            
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	// 카카오 정보 DB저장
	public void joinWithKakao(HttpServletRequest req) {
		
		// 카카오톡 인가코드 받기 (토큰 받기 위함: 세션)
		String code = req.getParameter("code");
		//System.out.println(code);
		
		// 유저정보 가져오기
		if(code != null) {
			getKakaoToken(code,req);
			
			String token = (String) req.getAttribute("access_Token");
			System.out.println(token);
			
			String reqURL = "https://kapi.kakao.com/v2/user/me";

		    //access_token을 이용하여 사용자 정보 조회
		    try {
		       URL url = new URL(reqURL);
		       HttpURLConnection conn = (HttpURLConnection) url.openConnection();

		       conn.setRequestMethod("POST");
		       conn.setDoOutput(true);
		       conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

		       //결과 코드가 200이라면 성공
		       int responseCode = conn.getResponseCode();
		       System.out.println("responseCode : " + responseCode);

		       //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
		       BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		       String line = "";
		       String result = "";

		       while ((line = br.readLine()) != null) {
		           result += line;
		       }
		       System.out.println("response body : " + result);

		       //Gson 라이브러리로 JSON파싱
		       JsonParser parser = new JsonParser();
		       JsonElement element = parser.parse(result);

		       String kakaoID = element.getAsJsonObject().get("id").getAsString();
		       String nickname = element.getAsJsonObject().get("properties").getAsJsonObject().get("nickname").getAsString();
		       String img = element.getAsJsonObject().get("properties").getAsJsonObject().get("profile_image").getAsString();
		       boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();
		       String email = "";
		       if(hasEmail){
		           email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
		       }
		       
		       int idx = email.indexOf("@");
		       String id = email.substring(0,idx);

		       // 사용자 정보 추출
		       System.out.println("kakaoID : " + kakaoID);
		       System.out.println("id : " + id);
		       System.out.println("email : " + email);
		       System.out.println("nickname : " + nickname);
		       System.out.println("img : " + img);
		       
		       // 사용자 정보 User Bean에 저장
		       User kakaoUser = new User();
		       kakaoUser.setUserID(id);
		       kakaoUser.setUserPW("없음");
		       kakaoUser.setUserName(nickname);
		       kakaoUser.setUserPhoneNumber("없음");
		       kakaoUser.setUserNickname(nickname);
		       kakaoUser.setUserEmail(email);
		       kakaoUser.setUserImg(img);
		       kakaoUser.setKakaoID(kakaoID);
		       kakaoUser.setUserDiaryUrl("http://localhost/main/popup.open?userId=" + id);
		       
		       br.close();
		       
		       System.out.println(kakaoUser.getUserID());
		       
		       if(ss.getMapper(UserMapper.class).joinWithKakao(kakaoUser) == 1) {
					req.getSession().setAttribute("loginUser", kakaoUser);
					req.getSession().setMaxInactiveInterval(60*10);
					System.out.println("세션 등록 성공");
					//ss.getMapper(DiaryMapper.class).diaryInsert(kakaoUser);
					req.setAttribute("r", "가입성공");
				}else {
					req.setAttribute("r", "가입실패");
				}

		       } catch (Exception e) {
		            e.printStackTrace();
		       }
		}
		
		
	}

	// 카카오 정보 세션 저장
	public void loginWithKakao(HttpServletRequest req) {
		
		// 카카오톡 인가코드 받기 (토큰 받기 위함: 세션)
		String code = req.getParameter("code");
		//System.out.println(code);
			
		// 유저정보 가져오기
		if(code != null) {
			getKakaoToken(code,req);
				
			String token = (String) req.getAttribute("access_Token");
			System.out.println(token);
		
			String reqURL = "https://kapi.kakao.com/v2/user/me";

		    //access_token을 이용하여 사용자 정보 조회
		    try {
		       URL url = new URL(reqURL);
		       HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		
		       conn.setRequestMethod("POST");
		       conn.setDoOutput(true);
		       conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

		       //결과 코드가 200이라면 성공
		       int responseCode = conn.getResponseCode();
		       System.out.println("responseCode : " + responseCode);

		       //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
			   BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			   String line = "";
			   String result = "";

			   while ((line = br.readLine()) != null) {
			         result += line;
			   }
			   System.out.println("response body : " + result);

			   //Gson 라이브러리로 JSON파싱
			   JsonParser parser = new JsonParser();
			   JsonElement element = parser.parse(result);

			   String kakaoID = element.getAsJsonObject().get("id").getAsString();

		       // 사용자 정보 추출
		       System.out.println("kakaoID : " + kakaoID);
				       
			   // 사용자 정보 User Bean에 저장
		       User kakaoUser = new User();
		       kakaoUser.setKakaoID(kakaoID);
				       
		       br.close();
				       
		       User dbUser = (User)ss.getMapper(UserMapper.class).getUserByKakaoID(kakaoUser);
		       
			   if(dbUser != null) {
					req.getSession().setAttribute("loginUser", dbUser);
					req.getSession().setMaxInactiveInterval(60*10);
					System.out.println("세션 등록 성공");
					//ss.getMapper(DiaryMapper.class).diaryInsert(kakaoUser);
					System.out.println("로그인 성공");
			   }else {
					joinWithKakao(req);
					System.out.println("가입성공");
				}

		       } catch (Exception e) {
		            e.printStackTrace();
		       }
		}		
	
		
	}

	// 네이버 정보 DB저장
	public int joinWithNaver(User u, HttpServletRequest req) {
		
		if(ss.getMapper(UserMapper.class).joinWithNaver(u) == 1) {
			
			User dbUser = ss.getMapper(UserMapper.class).getUserByID(u);
			
			req.getSession().setAttribute("loginUser", dbUser);
			req.getSession().setMaxInactiveInterval(60*10);
			
			return 1;
		}
		
		return 0;
	}

	// 네이버 로그인 세션 저장
	public boolean loginWithNaver(User u, HttpServletRequest req) {
		
		User dbUser = (User)ss.getMapper(UserMapper.class).getUserByNaverID(u);
	       
		   if(dbUser != null) {
				req.getSession().setAttribute("loginUser", dbUser);
				req.getSession().setMaxInactiveInterval(60*10);
				System.out.println("세션 등록 성공");
				//ss.getMapper(DiaryMapper.class).diaryInsert(kakaoUser);
				System.out.println("로그인 성공");
				
				return true;
		   }else {
				joinWithKakao(req);
				System.out.println("가입성공");
				
				return false;
			}
		
	}

	// 아이디 찾기
	public String searchID(User u) {
		return ss.getMapper(UserMapper.class).searchID(u);
	}

	public void searchPW(User u) {
		
		if(ss.getMapper(UserMapper.class).searchPW(u) == 1) {
			// 이메일 돌리기
			
		} else {
			// 회원정보를 찾을 수 없음.
		}
		
	}

	public void delete(HttpServletRequest req) {
		try {
			User u = (User) req.getSession().getAttribute("loginUser");

			if (ss.getMapper(UserMapper.class).deleteUser(u) == 1) {
				req.setAttribute("result", "탈퇴성공");

				String path = req.getSession().getServletContext().getRealPath("resources/kjs_profileImg");
				String photo = u.getUserImg();
				photo = URLDecoder.decode(photo, "utf-8");
				new File(path + "/" + photo).delete();

				logout(req);
				//loginCheck(req);
			} else {
				req.setAttribute("result", "탈퇴실패");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("result", "탈퇴실패");
		}
	}

	


	
	
}
