import { Container } from "./content.styles";

export default function Content({ children, isOpen }: any) {
  return (
    <Container className={`contents ${isOpen ? "mobile-off" : ""}`}>
      {children}
    </Container>
  );
}
