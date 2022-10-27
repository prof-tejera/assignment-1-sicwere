const Button = ({ text, style, ...props }) => {
  return (
    <button
      style={{ width: "50px", height: "50px", fontSize: "18px", color: 'white', ...style }} 
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
