const PrimaryButton = ({ type = "button", children, ...props }) => {
    return (
        <button className="btn" type={type} {...props}>
            {children}
        </button>
    );
};
export default PrimaryButton;
