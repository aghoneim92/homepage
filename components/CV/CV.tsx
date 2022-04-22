import styled from "styled-components";
import { pxToEm } from "../../utils/pxToRem";
import workExperience from "./workExperience";

const Container = styled.div`
  margin: 30px;
  padding: 30px 0;
  border: 1px solid var(--ghoneim-red);
`;

const Header = styled.header`
  display: flex;
  padding: 30px 50px;
  box-shadow: 0 1.5px 2px -2px var(--ghoneim-red);
`;

const Name = styled.h1`
  font-size: ${pxToEm(30)};
  font-weight: 900;
  margin: 0;
`;

const Title = styled.h2`
  font-size: ${pxToEm(20)};
  font-weight: normal;
  margin: 0;
`;

const ContactInfo = styled.div`
  margin-left: auto;
  text-align: right;
`;

const Main = styled.main`
  padding: 30px 50px;
  display: flex;
`;

const CompanyName = styled.p`
  margin-bottom: 0;
  font-weight: 900;
  font-size: ${pxToEm(20)};
`;

const Position = styled.p`
  margin-top: 0;
  font-weight: normal;
`;

const RightSide = styled.div`
  padding: 0 20px;
  min-width: 300px;
`;

const Skills = styled.ul`
  margin-left: -20px;
`;

export default function CV() {
  return (
    <Container>
      <Header>
        <div>
          <Name>Ahmed Ghoneim</Name>
          <Title>Software Engineer</Title>
        </div>
        <ContactInfo>
          <a href="tel:+201226282852">+201226282852</a>
          <br />
          <a href="mailto:ahmedghoneim92@gmail.com">ahmedghoneim92@gmail.com</a>
          <br />
          <a href="https://ahmedghoneim.site" target="_blank" rel="noreferrer">
            https://ahmedghoneim.site
          </a>
          <br />
        </ContactInfo>
      </Header>
      <Main>
        <div>
          <h2>Work Experience</h2>
          {workExperience.map(
            ({
              company,
              companyDescription,
              responsibilities,
              position,
              from,
              to,
            }) => (
              <div key={company}>
                <CompanyName>
                  {company}: {companyDescription}
                </CompanyName>
                <Position>
                  {position}
                  <br />
                  {from} - {to}
                </Position>
                <ul>
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
        <RightSide>
          <div>
            <h2>Education</h2>
            BSc Computer Engineering
            <br />
            Alexandria University
            <br />
            2009 - 2014
            <br />
            GPA 3.59
            <br />
            <br />
          </div>
          <div>
            <h2>Skills</h2>
            <Skills>
              <li>Working effectively in a team</li>
              <li>Quick to learn new technologies</li>
              <li>Rapid prototyping of ideas</li>
              <li>Following best practices</li>
            </Skills>
          </div>
        </RightSide>
      </Main>
    </Container>
  );
}