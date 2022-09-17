
type Params = {
    capitalLetters: boolean;
    smallLetters: boolean;
    numbers: boolean;
    symbols: boolean;
}

export const getOptions = ({capitalLetters, numbers, smallLetters, symbols}: Params) => {

    const values = {
        capitalLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        smallLetters: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '123456789',
        symbols: '^~!@#$%&*_+:;<>'
    }

    let options = '';
    options += (capitalLetters) ? values['capitalLetters'] : '';
    options += (numbers) ? values['numbers'] : '';
    options += (smallLetters) ? values['smallLetters'] : '';
    options += (symbols) ? values['symbols'] : '';
    
    return options;
    
}