import './form-input.styles.scss'

const FormInput = ({ label, inputOptions }) => {
    return (
        <div className='group'>
            <input className='form-input' {...inputOptions} />
            { label && (
                <lable className={`${inputOptions.value.length  ? 'shrink': null} form-input-label`}>{label}</lable>
            )}
        </div>
    );
};

export default FormInput;
