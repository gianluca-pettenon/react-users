import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function UsersTable() {

    useEffect(() => {
        api.get('users').then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>

                <thead>

                    <tr>
                        <th>Nome</th>
                        <th>Usu&aacute;rio</th>
                        <th>Perfil</th>
                        <th>Situa&ccedil;&atilde;o</th>
                        <th>Criado em</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>GIANLUCA PETTENON</td>
                        <td>gianluca.pettenon</td>
                        <td>Desenvolvedor</td>
                        <td>Ativo</td>
                        <td>05/10/2021</td>
                    </tr>

                </tbody>

            </table>
        </Container>
    )
}