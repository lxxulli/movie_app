import styled from "styled-components";
import { PageTitle } from "../../components/PageTitle";
import { mainColors } from "../style/GlobalStyled";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../components/ErrorMessage";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0 50px;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const TopLine = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  li {
    width: 80px;
    height: 1px;
    background-color: white;
    margin: 0 10px;
  }
`;

const Con = styled.div`
  margin-bottom: 15px;
  h4 {
    text-align: left;
    margin-bottom: 7px;
  }
`;

const InputWrap = styled.div`
  width: 270px;
  background-color: #464646;
  margin-bottom: 10px;
  padding: 0 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  text-align: left;
`;
const Line = styled.div`
  width: 290px;
  height: 1px;
  background-color: white;
`;
const LoginButton = styled.button`
  all: unset;
  width: 270px;
  height: 50px;
  background-color: ${mainColors.pointColor};
  border-radius: 10px;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "defult")};
  margin-top: 25px;
`;

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const loginHandler = () => {};

  return (
    <>
      <Wrap>
        <PageTitle titleName="SIGN UP" />
        <Form onSubmit={handleSubmit(loginHandler)}>
          <TopLine>
            <li></li>
            <h4>SIGN UP</h4>
            <li></li>
          </TopLine>
          <Con>
            <h4>이름</h4>
            <InputWrap>
              <Input
                {...register("name", {
                  required: "이름은 필수입니다.",
                  minLength: {
                    value: 1,
                    message: "이름은 1자리 이상 작성해주세요.",
                  },
                })}
                type="text"
                placeholder="NAME"
              />
            </InputWrap>
            <ErrorMessage text={errors?.name?.message} />
          </Con>
          <Con>
            <h4>아이디</h4>
            <InputWrap>
              <Input
                {...register("username", {
                  required: "아이디는 필수입니다.",
                  minLength: {
                    value: 2,
                    message: "아이디는 2자리 이상 작성해주세요.",
                  },
                })}
                type="text"
                placeholder="ID"
              />
            </InputWrap>
            <ErrorMessage text={errors?.username?.message} />
          </Con>
          <Con>
            <h4>패스워드</h4>
            <InputWrap>
              <Input
                {...register("password", {
                  required: "패스워드는 필수입니다.",
                  minLength: {
                    value: 8,
                    message: "패스워드는 8자리 이상 작성해 주세요",
                  },
                })}
                type="password"
                placeholder="PASSWORD"
              />
            </InputWrap>
            <ErrorMessage text={errors?.password?.message} />
          </Con>
          <Con>
            <h4>이메일</h4>
            <InputWrap>
              <Input {...register("email")} type="text" placeholder="E-MAIL" />
            </InputWrap>
            <ErrorMessage text={errors?.email?.message} />
          </Con>
          <Con>
            <h4>연락처</h4>
            <InputWrap>
              <Input
                {...register("phonenumber", {
                  required: "패스워드는 필수입니다.",
                  minLength: {
                    value: 11,
                    message: "연락처는 11자리 이상 작성해 주세요",
                  },
                })}
                type="text"
                placeholder="PHONE NUMBER"
              />
            </InputWrap>
            <ErrorMessage text={errors?.phonenumber?.message} />
          </Con>
          <Line />
          <LoginButton $isActive={isValid}>가입하기</LoginButton>
        </Form>
      </Wrap>
    </>
  );
};
