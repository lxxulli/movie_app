import styled from "styled-components";
import { PageTitle } from "../../components/PageTitle";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { movieSearch, popular } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { PopMovie } from "./PopMovie";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px 2%;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #222222;
  border: 1px solid #464646;
  border-radius: 50px;
  padding: 10px 30px;
  color: rgba(255, 255, 255, 0.5);
`;

const SearchIcon = styled.div`
  font-size: 25px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 20px;
  margin-left: 30px;
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();
  const [popData, setPopData] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results: searchData } = await movieSearch(keyword);
      setTerm(searchData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { results: popData } = await popular();
        setPopData(popData);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);

  return (
    <Wrap>
      <PageTitle titleName="SEARCH" />
      <Form onSubmit={handleSubmit(searchHandler)}>
        <SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIcon>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 영화를 입력해주세요."
        />
      </Form>
      <PopMovie titlename="현재 인기 영화" data={popData} />
    </Wrap>
  );
};
