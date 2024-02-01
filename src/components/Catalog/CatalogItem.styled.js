import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 335px;
  padding-left: 16px;
  padding-right: 16px;

  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

const NavDiv = styled.div`
  display: flex;

  justify-content: space-between;
  padding-top: 18px;
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 16px;
    margin-bottom: 27px;
  }
`;

const CardLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: rgba(255, 255, 255, 1);

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
`;

const SvgExercise = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--orange-color);

  @media screen and (min-width: 768px) {
  }
`;

const ButtonStart = styled.button`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  background: transparent;
  border: none;
  color: var(--orange-color);
  display: flex;

  gap: 8px;
  padding: 0;

  &:hover,
  &:focus {
    color: var(--white-color);
    ${SvgExercise} {
      stroke: var(--white-color);
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 150% */
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const IconTitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 16px;
`;

const SpanIconRun = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--beige-color);

  border-radius: 50%;

  width: 24px;
  height: 24px;
`;
const SvgIconRun = styled.svg`
  width: 16px;
  height: 16px;
`;

const H3 = styled.h3`
  color: var(----white-color);
  position: relative;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 263px;
  height: 24px;
  text-align: left;

  @media screen and (min-width: 768px) {
    /* width: 285px; */
    font-size: 24px;
    line-height: 1.33;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 333px;
    /* width: 263px; */
  }
`;
const ListInfo = styled.li`
  display: flex;
  flex-wrap: wrap;
  font-style: normal;
  list-style: none;
  gap: 4px 16px;
  font-size: 12px;
  padding-bottom: 16px;
  line-height: 1.5;
  font-weight: 400px;
  color: rgba(239, 237, 232, 0.4);
`;
const SpanListInfo = styled.span`
  margin-left: 4px;
  color: var(--white-color);
`;

const SpanListInfoTarget = styled.span`
  margin-left: 4px;
  color: var(--white-color);
  @media screen and (min-width: 1440px) {
    width: 100px;
    height: 18px;
  }
`;

export {
  ButtonStart,
  SvgExercise,
  SpanIconRun,
  SvgIconRun,
  ListInfo,
  H3,
  SpanListInfo,
  SpanListInfoTarget,
  ContainerWrapper,
  CardLabel,
  NavDiv,
};
