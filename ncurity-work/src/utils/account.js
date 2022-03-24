import account from "../database/account.json";

// role, state 값 변환
function getRole(rowData) {
  rowData.forEach((element) => {
    if (element.role === 1) element.roleName = "관리자";
    else element.roleName = "일반 사용자";
    if (element.state === 1) element.state = "활성화";
    else element.state = "비활성화";
  });
  return rowData;
}

// 회원정보 수정
function modifyUserInfo(userInfo, state) {
  userInfo.id = state.id;
  userInfo.pw = state.password;
  userInfo.name = state.name;
  userInfo.hp = state.hp;
  userInfo.state = state.status;
  userInfo.description = state.desc;
  return userInfo;
}

// 회원가입
function Join(inputData) {
  let seq = account.length + 1;
  let user = {
    seq: seq,
    id: inputData.id,
    pw: inputData.password,
    name: inputData.name,
    email: inputData.email,
    hp: inputData.hp,
    role: inputData.role,
    state: inputData.status,
    description: inputData.role,
  };
  let response = {
    isDuplicated: false,
    msg: "회원가입 완료!",
  };
  for (let i = 0; i < account.length; i++) {
    if (user.id == account[i].id) {
      response.msg = "이미 존재하는 ID 입니다.";
      response.isDuplicated = true;
    }
    if (user.name == account[i].name) {
      response.msg = "이미 존재하는 이름 입니다.";
      response.isDuplicated = true;
    }
    if (user.email == account[i].email) {
      response.msg = "이미 존재하는 Email 입니다.";
      response.isDuplicated = true;
    }
  }
  if (response.isDuplicated == false) {
    account.push(user);
    response.account = account;
  }
  return response;
}

// 로그인
function Login(state) {
  let response = {
    msg: "ID 또는 비밀번호를 정확히 입력해주세요.",
    status: false,
  };
  for (let i = 0; i < account.length; i++) {
    if (state.email === account[i].email) {
      if (state.password === account[i].pw) {
        response = {
          msg: "success",
          userInfo: account[i],
          status: true,
        };
        return response;
      }
    }
  }
  return response;
}

export { getRole, Login, Join, modifyUserInfo };
