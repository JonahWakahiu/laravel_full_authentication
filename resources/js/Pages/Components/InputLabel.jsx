const InputLabel = ({ value, ...props }) => {
    return (
        <label {...props} className="form_label">
            {value}
        </label>
    );
};
export default InputLabel;
