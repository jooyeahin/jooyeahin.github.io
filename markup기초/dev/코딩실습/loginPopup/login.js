$(function(){
  //로그인팝업띄우기
  $('#btn-login').click(function(){
    $('.login-form').fadeIn();
  })

  //아이디, 비밀번호 입력창에 포커스가 발생했을 때
  $('#id, #password').focus(function(){
    $(this).prev().addClass('change');
  })

  //아이디, 비밀번호 입력창에 포커스가 발생되지 않았을 때
  $('#id, #password').focusout(function(){
    $(this).prev().removeClass('change');
  })

  //로그인폼의 로그인버튼을 눌렀을 때(아이디, 비밀번호값의 여부 체크)
  $('#btn-submit').click(function(){
    //아이디와 패스워드값을 변수에 저장
    var id=$('#id').val();
    var password=$('#password').val();
    console.log(id, password);

    //기존 보여주는 메세지가 있다면 삭제
    $('.message').remove();

    //아이디, 비밀번호값 검사하기
    if(id==''){//아이디의 값이 없을 경우
      $('#id').after('<p class="message">아이디를 입력하세요.</p>').focus();
    }else if(password==''){//비밀번호의 값이 없을 겨우
      $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
    }else{//아이디와 비밀번호값이 둘다 있는 경우
      //로그인버튼을 숨긴다.
      $('#btn-login').hide();
      //로그인팝업을 숨긴다.
      $('.login-form').fadeOut(1000,function(){
        //user-info의 이름을 사용자가 입력한 아이디의 값으로 변경
        $('.user-info b').text(id);
        //로그인의 정보를 보여준다.
        $('.user-info').show();
      })
    }
  })// 로그인버튼 클릭

  //로그아웃 버튼을 눌렀을 때
  $('#btn-logout').click(function(){
    $('.user-info').hide();
    $('#btn-login').show();
    //로그인 폼에 있는 input의 값을 초기화
    $('input').val('');
  })

  //아이디, 패스워드값을 입력할 때
  $('input').keyup(function(){
    //입력한 문자열의 길이 체크
    var length=$(this).val().length;
    console.log(length);
    if(length!=0){
      $(this).next('.message').remove();
    }
  })






})
