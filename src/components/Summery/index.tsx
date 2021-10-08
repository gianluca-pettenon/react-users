import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summery() {
    return (
        <Container>

            <div>
                <header>
                    <p>Novos</p>
                </header>
                <strong>0 usu&aacute;rio(s)</strong>
            </div>

            <div>
                <header>
                    <p>Inativos</p>
                </header>
                <strong>0 usu&aacute;rio(s)</strong>
            </div>

            <div className="bg-success">
                <header>
                    <p>Total</p>
                </header>
                <strong>1 usu&aacute;rio(s)</strong>
            </div>

        </Container>
    );
}