import styled from '../../Styles/FlashMessage.module.css';
import { FiMeh, FiCheck, FiX } from 'react-icons/fi';


interface Props {
    type: 'success' | 'error';
    text: string;
    closeMessage: () => void;
}

export const FlashMessage = ({ text, type, closeMessage }: Props) => {

   const options = {
        error: <FiMeh />,
        success: <FiCheck />
   }

    return (

       <div className={styled.container}>

            <div className={styled.message}>

               {options[type]}

               <p>{text}</p>

               <FiX 
                    className={styled.close}
                    onClick={closeMessage}
               />
            </div>

       </div>

    );

}