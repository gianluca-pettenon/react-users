import { Summery } from '../Summery';
import { UsersTable } from '../UsersTable';
import {Container} from './styles'

export function Dashboard() {
    return (
        <Container>
            <Summery/>
            <UsersTable/>
        </Container>
    );
}