import { AuthErrorCodes } from 'firebase/auth';

const errorLogin = async (error: string): Promise<string> => {
    let typeError: string = '';
    Object.values(AuthErrorCodes).map((value) => {
        if (value === error) {
            const offAuthString = value.replace('auth/', '');
            typeError = offAuthString.replaceAll('-', ' ');
        }
        return typeError;
    });
    return typeError;
};


export { errorLogin };
