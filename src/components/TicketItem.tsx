import styled from "styled-components";
import iconPobeda from "../images/iconPobeda.svg";
import iconRedWing from "../images/iconRedWing.svg";
import iconS7Airlines from "../images/iconS7Airlines.svg";

function TicketItem({
  id,
  company,
  price,
  transfers,
  from,
  to,
  startTime,
  endTime,
  duration,
}) {
  let format = new Date(duration);
  let durationData =
    format.toString().slice(16, 21).split(":")[0] +
    " " +
    "ч" +
    " " +
    format.toString().slice(16, 21).split(":")[1] +
    " " +
    "мин";
  return (
    <Wrapper>
      <TopContainer>
        <div className="price">
          {price} {" P"}
        </div>
        {company === "Redwings" ? (
          <img src={iconRedWing} alt="labelCompany" />
        ) : company === "Pobeda" ? (
          <img src={iconPobeda} alt="labelCompany" />
        ) : (
          <img src={iconS7Airlines} alt="labelCompany" />
        )}
      </TopContainer>
      <TopContainer>
        <Block>
          <InfoDiv>
            {from} - {to}
          </InfoDiv>
          <div>
            {startTime} - {endTime}
          </div>
        </Block>
        <Block>
          <InfoDiv>В пути</InfoDiv>
          <div>{durationData}</div>
        </Block>
        <BlockRight>
          <InfoDiv>
            {transfers < 1
              ? "Без пересадок"
              : transfers > 1
              ? "Пересадки"
              : "Пересадка"}
          </InfoDiv>
          <div>{transfers}</div>
        </BlockRight>
      </TopContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #e8ebf2;
  height: 174px;
  border-radius: 10px;
  padding: 30px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Inter;
  line-height: 19px;
  color: #4e148c;

  @media screen and (max-width: 900px) {
    width: 100%;
    min-width: 400px;
    padding: 30px 23px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  white-space: nowrap;

  & .price {
    font-family: InterBold;
    font-size: 32px;
    line-height: 39px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 9px;
`;

const BlockRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 9px;
  padding-right: 31px;
  max-width: 118px;

  @media screen and (max-width: 900px) {
    padding-right: 0px;
  }
`;

const InfoDiv = styled.div`
  color: #858ae3;
`;

export default TicketItem;
