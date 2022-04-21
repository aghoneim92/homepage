import Image from "next/image";
import styled from "styled-components";
import eventumLogo from "./eventum-logo.png";
import didarisLogo from "./didaris-logo.png";
import fridayLogo from "./friday-logo.svg";
import careemLogo from "./careem-logo.svg";
import koLogo from "./ko-logo.svg";

const Container = styled.div`
  margin-top: 20px;
  padding: 30px 50px;
  opacity: 0;
  animation: appear4 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  @keyframes appear4 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 20px;
`;

const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export default function Companies() {
  return (
    <Container>
      <Title>Companies I&apos;ve worked with</Title>
      <CompaniesContainer>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://eventumsolutions.com/careers/"
        >
          <Image
            src={eventumLogo}
            alt="Eventum IT Solutions"
            title="Eventum IT Solutions"
            layout="fixed"
            width={100}
            height={70}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://didaris.com">
          <Image
            src={didarisLogo}
            alt="Didaris"
            title="Didaris"
            layout="fixed"
            width={129}
            height={44}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://friday.de">
          <Image
            src={fridayLogo}
            alt="Friday"
            title="Friday"
            layout="fixed"
            width={104}
            height={14}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://careem.com">
          <Image
            src={careemLogo}
            alt="Careem"
            title="Careem"
            layout="fixed"
            width={104}
            height={42}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://knowledgeofficer.com">
          <Image
            src={koLogo}
            alt="Knowledge Officer"
            title="Knowledge Officer"
            layout="fixed"
            width={124}
            height={36}
          />
        </a>
      </CompaniesContainer>
    </Container>
  );
}
