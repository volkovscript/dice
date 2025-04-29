// components
import DiceContainer from '@/containers/dice-container';
// styles
import { Container } from './page.styled';

export default function DiceGame() {
  return (
    <Container maxWidth='sm'>
      <DiceContainer />
    </Container>
  );
}
