import styled from "styled-components";
import { PageTitle } from "../../components/PageTitle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { movieSearch } from "../../api";

const Wrap = styled.div`
  padding: 100px 2%;
`;
const Form = styled.div``;
const InputWrap = styled.div``;
const Input = styled.div``;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const data = await movieSearch(keyword);
      // console.log(data);
      // setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);

  return (
    <Wrap>
      <PageTitle titleName="SEARCH" />
      <Form onSubmit={handleSubmit(searchHandler)}>
        <InputWrap>
          <Input />
        </InputWrap>
      </Form>
    </Wrap>
  );
};
