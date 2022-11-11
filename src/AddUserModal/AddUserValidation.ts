const REQUIRED_FIELD = 'This field should be filled';
export const firstNameValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)) {
            return '///'
        }
        return true
    }
}