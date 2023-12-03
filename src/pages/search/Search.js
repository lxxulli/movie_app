// import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PageTitle } from "../../components/PageTitle";

const Wrap = styled.div`
  padding: 100px 2%;
`;
const Form = styled.div``;
const Input = styled.div``;

export const Search = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { error, isValid },
  // } = useForm();

  return (
    <Wrap>
      <PageTitle titleName="SEARCH" />
      <Form>
        <Input />
      </Form>
    </Wrap>
  );
};
