const REQUIRED_FIELD = 'This field should be filled';
const CYRILLIC_LETTERS = 'Don\'t use cyrillic letters';
const EMAIL_FIELD = 'Please enter a valid email address';

const CYRILLIC_REGEX = /[а-яА-Я]/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const firstNameValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.match(CYRILLIC_REGEX)) {
            return CYRILLIC_LETTERS
        }
        return true
    }
}

export const lastNameValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.match(CYRILLIC_REGEX)) {
            return CYRILLIC_LETTERS
        }
        return true
    }
}

export const emailValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (!value.match(EMAIL_REGEX)) {
            return EMAIL_FIELD
        }
        return true
    }
}