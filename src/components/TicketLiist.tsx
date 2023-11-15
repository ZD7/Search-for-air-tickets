import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectFilter } from "../store/selectors";
import TicketItem from "./TicketItem";
import { fetchTickets, RootDispatch, sortTransfers, sortPrice, sortFlightDuration } from "../store/store";
import styled from "styled-components";
import FilterCompanyAndTransfersTop from "../components/FilterCompanyAndTransfersTop";

function TicketList() {
  const dispatch = useDispatch<RootDispatch>();

  const tickets = useSelector(selectFilter);

  const [numberOfTickets, setNumberOfTickets] = useState(3);

  const downloadMoreTickets = () => {
    setNumberOfTickets(numberOfTickets + 3);
    dispatch(fetchTickets(numberOfTickets + 3));
  };

  return (
    <Wrapper id="list">
      <TopBar>
        <button onClick={() => dispatch(sortPrice())}>Самый дешевый</button>
        <button onClick={() => dispatch(sortTransfers())}>
          По количеству пересадок
        </button>
        <button onClick={() => dispatch(sortFlightDuration())}>
          Самый быстрый
        </button>
      </TopBar>
      <FilterCompanyAndTransfersTop />
      <Container>
        {tickets.map((el) => (
          <TicketItem key={el.id} {...el} />
        ))}
      </Container>
      <Button onClick={downloadMoreTickets}>Загрузить еще билеты</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  background-color: #4e148c;
  color: #f7f9f7;
  font-family: InterBold;
  font-size: 24px;
  line-height: 29px;
  height: 62px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 54px;
  cursor: pointer;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #4e148c;
  box-sizing: border-box;
  color: #4e148c;
  font-family: InterBold;
  line-height: 19px;
  height: 55px;
  box-sizing: border-box;
  background: linear-gradient(0deg, #e8ebf2, #e8ebf2);
  margin-bottom: 29px;

  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 700px) {
    height: 42px;
    font-family: Inter;
    font-size: 12px;
    line-height: 15px;
    background: #d9d9d9;
    margin-bottom: 12px;
  }

  button:nth-child(2) {
    border-left: 2px solid #4e148c;
    border-right: 2px solid #4e148c;
    border-radius: 0px;

    &:hover,
    &:focus {
      border-radius: 0px;
    }
  }

  button:nth-child(1) {
    &:hover,
    &:focus {
      border-radius: 10px 0px 0px 10px;
    }
  }

  & button {
    flex-grow: 1;
    flex-basis: 0;
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    font-family: InterBold;
    line-height: 19px;

    &:hover,
    &:focus {
      background-color: #4e148c;
      color: #f7f9f7;
      border-radius: 0px 10px 10px 0px;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  gap: 47px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    gap: 53px;
  }

  @media screen and (max-width: 700px) {
    gap: 35px;
  }
`;

export default TicketList;
