const TextField = ({ type = "text", ...props }) => {
    return <input className="form_control" type={type} {...props} />;
};
export default TextField;
