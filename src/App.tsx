import { useEffect } from "react";
import TicketList from "./components/TicketLiist";
import { useDispatch } from "react-redux";
import { fetchTickets, RootDispatch } from "./store/store";
import FilterCompanyAndTransfers from "./components/FilterCompanyAndTransfers";
import styled from "styled-components";
import iconAirplane from "../src/images/iconAirplane.svg";

function App() {
  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch(fetchTickets(3));
  }, [dispatch]);

  return (
    <Wrapper>
      <Block>
        <img src={iconAirplane} alt="iconAirplane" className="IconLogo" />
        <Title>Поиск авиабилетов</Title>
      </Block>
      <Container>
        <FilterCompanyAndTransfers />
        <TicketList />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1035px;
  display: flex;
  gap: 20px;
  margin-top: 84px;
  flex-direction: column;
  margin-bottom: 50px;

  padding-left: 37px;
  padding-right: 37px;

  @media screen and (max-width: 900px) {
    margin-top: 19px;
    gap: 27px;
    min-width: 400px;
    margin-bottom: 103px;
  }

  @media screen and (max-width: 700px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

const Block = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
  width: 100%;

  & .IconLogo {
    width: 100px;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;

    & .IconLogo {
      width: 57px;
    }
  }
`;

const Title = styled.div`
  font-family: InterBold;
  font-size: 24px;
  line-height: 29px;
  color: #4e148c;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default App;
