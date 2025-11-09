// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input type="date" value={birth} onChange={onChangeBirth} />
      </div>
      <div>
        <select value={country} onChange={onChangCountry}>
          <option></option> {/* select는 자동으로 첫 옵션을 기본값으로 설정*/}
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangBio} />
      </div>
    </div>
  );
};

export default Register;
