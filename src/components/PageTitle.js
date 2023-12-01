import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MWUP | {titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
