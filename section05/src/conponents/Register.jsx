// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="date"
          name="name"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="name" value={input.country} onChange={onChange}>
          <option></option> {/* select는 자동으로 첫 옵션을 기본값으로 설정*/}
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="name" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;
