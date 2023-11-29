import styled from "styled-components";

const MainBanner = styled.div`
  height: 100vh;
  /* background: url(); */
`;
const BlackBg = styled.div``;

export const Banner = ({ data }) => {
  return (
    <MainBanner>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laudantium
        commodi, culpa nemo consequatur molestiae repellat tenetur sunt
        blanditiis suscipit accusamus voluptatem neque harum id corporis
        doloribus expedita, at eveniet?
      </p>
    </MainBanner>
  );
};
