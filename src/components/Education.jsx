import React from "react";
import styled from "styled-components";
import { education } from "../constants";

// ================= CONTAINER =================
const Container = styled.section`
  padding: 100px 20px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

// ================= TITLE =================
const Title = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  text-align: center;
  opacity: 0.6;
  margin-bottom: 60px;
`;

// ================= CARD =================
const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  width: 100%;
  background: ${({ theme }) => theme.card || "#1a1a1a"};
  border-radius: 16px;
  padding: 25px 30px;

  transition: 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 40px rgba(145, 94, 255, 0.35);
  }

  /* gradient border */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(135deg, #915eff, #ff6ec4);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

// ================= IMAGE =================
const Logo = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
  background: white;
`;

// ================= TEXT =================
const Info = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 6px;
`;

const Institute = styled.p`
  opacity: 0.7;
  margin-bottom: 8px;
`;

const Field = styled.p`
  font-size: 0.95rem;
  opacity: 0.6;
  margin-bottom: 8px;
`;

const Meta = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  opacity: 0.7;
`;

// ================= COMPONENT =================
export default function Education() {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>My education journey and qualifications</Desc>

        {education.map((edu, i) => (
          <Card key={i}>
            {/* ✅ IMAGE (your college logo) */}
            <Logo
              src={edu.icon}
              alt="college"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/90?text=College";
              }}
            />

            <Info>
              <Degree>{edu.degree}</Degree>
              <Institute>{edu.institution}</Institute>
              <Field>{edu.field}</Field>

              <Meta>
                <span>{edu.duration}</span>
                <span>{edu.grade}</span>
              </Meta>
            </Info>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
}