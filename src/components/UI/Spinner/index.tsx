import { Bullet, Container } from './styles'

const Spinner = () => (
  <Container>
    <Bullet />
    <Bullet className='middle' />
    <Bullet />
  </Container>
)

export default Spinner
