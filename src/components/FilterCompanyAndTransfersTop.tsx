import { useDispatch, useSelector } from "react-redux";
import { setFilter, filterNumberTransfer } from "../store/store";
import { selectFilter } from "../store/selectors";
import Checkbox from "../components/checkbox";
import CheckboxRadio from "../components/checkboxRadio";
import styled from "styled-components";
import { useState } from "react";
import iconArrow from "../images/arrow.svg";

function FilterCompanyAndTransfersTop() {
  const dispatch = useDispatch();
  const tickets = useSelector(selectFilter);

  const uniqueCompany = new Set(tickets.map((el) => el.company));
  const strCompany = Array.from(uniqueCompany).join(", ");

  const uniqueTransfers = new Set(tickets.map((el) => el.transfers));
  const strTransfers = Array.from(uniqueTransfers).join(", ");

  const [openSettings, setOpenSttings] = useState(false);

  return (
    <Navbar>
      <TopBlock>
        <LeftInfo>
          {uniqueCompany.size === 0
            ? "выберете компанию"
            : `${uniqueCompany.size === 3 ? "Любая авиакомпания" : strCompany}
          ,${" "}
          ${
            uniqueTransfers.size === 4
              ? "любое кол-во пересадок"
              : "пересадок: " + strTransfers
          }`}
        </LeftInfo>
        <Button onClick={() => setOpenSttings(!openSettings)}>
          <div className="rightInfo">открыть настройки</div>
          <img src={iconArrow} alt="iconArrow" />
        </Button>
      </TopBlock>
      {openSettings && (
        <MainBlock>
          <div>
            <Header>Компании</Header>
            <Container>
              <CheckboxRadio
                text="Pobeda"
                isChecked={tickets.some((el) => el.company === "Pobeda")}
                onChange={() => dispatch(setFilter({ company: "Pobeda" }))}
                reversedColor="true"
              />
              <CheckboxRadio
                text="Redwings"
                isChecked={tickets.some((el) => el.company === "Redwings")}
                onChange={() => dispatch(setFilter({ company: "Redwings" }))}
                reversedColor="true"
              />
              <CheckboxRadio
                text="Ssevenair"
                isChecked={tickets.some((el) => el.company === "Ssevenair")}
                onChange={() => dispatch(setFilter({ company: "Ssevenair" }))}
                reversedColor="true"
              />
            </Container>
          </div>

          <div>
            <Header>Количество пересадок</Header>
            <Container>
              <Checkbox
                text="без пересадок"
                isChecked={tickets.some((el) => el.transfers === 0.1)}
                onChange={() =>
                  dispatch(filterNumberTransfer({ transfers: 0.1 }))
                }
              />
              <Checkbox
                text="1 пересадка"
                isChecked={tickets.some((el) => el.transfers === 1)}
                onChange={() =>
                  dispatch(filterNumberTransfer({ transfers: 1 }))
                }
              />
              <Checkbox
                text="2 пересадки"
                isChecked={tickets.some((el) => el.transfers === 2)}
                onChange={() =>
                  dispatch(filterNumberTransfer({ transfers: 2 }))
                }
              />
              <Checkbox
                text="3 пересадки"
                isChecked={tickets.some((el) => el.transfers === 3)}
                onChange={() =>
                  dispatch(filterNumberTransfer({ transfers: 3 }))
                }
              />
            </Container>
          </div>
        </MainBlock>
      )}
    </Navbar>
  );
}

const Navbar = styled.div`
  background-color: #4e148c;
  color: #f7f9f7;

  border-radius: 10px 10px 10px 10px;

  @media screen and (min-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 34px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 25px;
  }
`;

const MainBlock = styled.div`
  display: flex;
  gap: 67px;
  box-shadow: 0px 4px 6px 0px #00000040;
  height: 223px;
  padding-left: 24px;
  border-radius: 0 0 10px 10px;
`;

const Header = styled.div`
  font-family: InterBold;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 13px;

  margin-top: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const TopBlock = styled.div`
  display: flex;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 23px;
  padding-right: 27px;
  white-space: nowrap;
`;

const Button = styled.button`
  border: none;
  padding: 0px;
  background-color: #4e148c;
  color: #f7f9f7;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 17px;

  & .rightInfo {
    font-family: Inter;
    font-size: 12px;
    line-height: 15px;
  }

  @media screen and (max-width: 700px) {
    .rightInfo {
      display: none;
    }
  }
`;

const LeftInfo = styled.div`
  font-family: Inter;
  line-height: 19px;

  @media screen and (max-width: 700px) {
    font-family: Inter;
    font-size: 12px;
    line-height: 15px;
  }
`;

export default FilterCompanyAndTransfersTop;
