import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { MatchList } from "../Components/MatchList";

export const Homepage = () => {
  return (
    <DIV>
      <Sidebar />
      <MatchList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
