import { Helmet } from "react-helmet";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>MWUP | {titleName}</title>
    </Helmet>
  );
};
