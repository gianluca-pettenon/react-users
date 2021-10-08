import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>

                <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <span></span>
                </div>

                <button type="button">Novo(a) Usu&aacute;rio(a)</button>

            </Content>
        </Container>
    )
}