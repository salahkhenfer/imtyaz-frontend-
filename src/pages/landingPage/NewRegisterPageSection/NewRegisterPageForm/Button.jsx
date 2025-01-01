function Button({ variant = "primary", className, children, onClick }) {
  const baseStyles =
    "overflow-hidden self-stretch px-4 w-full whitespace-nowrap rounded-lg min-w-[64px]";
  const variantStyles = {
    primary: "text-sm text-red-100 bg-emerald-700 min-h-[36px]",
    outline:
      "text-xs text-emerald-700 border border-emerald-700 border-solid min-h-[32px]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      type={variant === "primary" ? "submit" : "button"}
      onClick={(e) => {
        console.log("Button clicked"); // Debug log
        if (onClick) onClick(e); // Ensure onClick is triggered
      }}
    >
      {children}
    </button>
  );
}

export default Button;
