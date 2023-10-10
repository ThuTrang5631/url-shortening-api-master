interface ButtonProps {
  children: string | React.ReactElement | undefined;
  onClick?: any;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`button ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
