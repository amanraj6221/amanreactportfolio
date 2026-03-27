import React, { useState } from "react";
import styled from "styled-components";
import { certificates } from "../constants";
import { FaEye } from "react-icons/fa"; // 👈 icon

// ================= CONTAINER =================
const Container = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 700;
`;

// ================= GRID =================
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

// ================= CARD =================
const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.card || "#1f1f1f"};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

// ================= IMAGE =================
const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

// ================= CONTENT =================
const Content = styled.div`
  padding: 15px;
`;

const TitleText = styled.h3`
  font-size: 1.1rem;
`;

const Issuer = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

// ================= EYE BUTTON =================
const EyeButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.7);
  padding: 8px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: #00bcd4;
  }
`;

// ================= MODAL =================
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 80%;
  border-radius: 12px;
`;

// ================= COMPONENT =================
export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <Container id="certificates">
      <Title>Certificates</Title>

      <CardGrid>
        {certificates?.map((cert, i) => (
          <Card key={i} onClick={() => setSelected(cert)}>
            
            {/* 👁 Eye Icon */}
            <EyeButton
              onClick={(e) => {
                e.stopPropagation(); // prevent modal open
                window.open(cert.link, "_blank"); // open PDF
              }}
            >
              <FaEye />
            </EyeButton>

            <Image
              src={cert.image}
              alt={cert.title}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x180?text=Certificate";
              }}
            />

            <Content>
              <TitleText>{cert.title}</TitleText>
              <Issuer>{cert.issuer}</Issuer>
            </Content>
          </Card>
        ))}
      </CardGrid>

      {/* Modal Preview */}
      {selected && (
        <Modal onClick={() => setSelected(null)}>
          <ModalImage src={selected.image} />
        </Modal>
      )}
    </Container>
  );
}