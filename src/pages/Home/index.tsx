
import { useState, FormEvent } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FlashMessage } from '../../components/FlashMessage';
import styled from '../../Styles/Home.module.css';
import { generateValueOnRange } from '../../utils/generateValueOnRange';
import { getOptions } from '../../utils/getOptions';

export interface Message {
    type: 'success' | 'error';
    text: string;
}

export const Home = () => { 

    const [passwordLength, setPasswordLength] = useState(8);
    const [capitalLetters, setCapitallLetters] = useState(false);
    const [smallLetters, setSmallLetters] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [passwordGenerated, setPasswordGenerated] = useState('Olá, seja bem vindo : )');
    const [message, setMessage] = useState<Message | null>(null);

    function handleGeneratePassword (event: FormEvent) {

        event.preventDefault();

        let password = '';
        const options = getOptions({capitalLetters, numbers, smallLetters, symbols});

        if ( options ) {

            for (let contador = 0; contador < passwordLength; contador++) {

                password += options[generateValueOnRange(options.length)];
    
            }

            setPasswordGenerated(password);

        } else {

           setMessage({
                text: 'Opa, você deve escolher pelo menos uma opção para gerar a sua senha : )',
                type: 'error'
           })

        }
      
    }

    function handleCopyTextToClipboard () {

        navigator.clipboard.writeText(passwordGenerated);

        setMessage({
            text: 'Senha copiada para a área de transferência',
            type: 'success'
        });

    }

    function handleCloseMessage () {
        setMessage(null);
    }

    return (

        <div className={styled.containerPrincipal}>

            {
                message && (
                    <FlashMessage 
                        text={message.text}
                        type={message.type}
                        closeMessage={handleCloseMessage}
                    />
                )
            }

            

            <form className={styled.center} onSubmit={handleGeneratePassword}>

                <div className={styled.top}>

                    <h5>Password Generator</h5>
                    <div>
                        <p>{passwordGenerated}</p>
                        {
                            passwordGenerated !== 'Olá, seja bem vindo : )' && (
                                <FiCopy onClick={handleCopyTextToClipboard}/>
                            )
                        }
                    </div>

                </div>

                <div className={styled.bottom} >

                    <div className={styled.qtdCaracteres}>

                        <span>QUANTIDADE DE CARACTERES</span>
                        <span className={styled.qtd}>{passwordLength}</span>

                    </div>

                    <input
                        className={styled.range}
                        type="range"
                        min={8}
                        max={20}
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                    />

                    <span>OPÇÕES</span>

                    <div className={styled.opcao}>

                        <input 
                            type="checkbox" 
                            onChange={(e) => setCapitallLetters(e.target.checked)}
                        />

                        <p>Letras Maiúsculas</p>

                    </div>

                    <div className={styled.opcao}>

                        <input 
                            type="checkbox" 
                            onChange={(e) => setSmallLetters(e.target.checked)}
                        />

                        <p>Letras Minusculas</p>

                    </div>

                    <div className={styled.opcao}>

                        <input 
                            type="checkbox" 
                            onChange={(e) => setNumbers(e.target.checked)}
                        />

                        <p>Números</p>

                    </div>

                    <div className={styled.opcao}>

                        <input 
                            type="checkbox" 
                            onChange={(e) => setSymbols(e.target.checked)}
                        />

                        <p>Simbolos</p>

                    </div>

                    <input type="submit" value="GERAR SENHA" className={styled.btn}/>
                
                </div>

            </form>
        </div>

    );

}