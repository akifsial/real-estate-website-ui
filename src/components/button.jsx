import React from "react";

function Button({ 
  text = "Click Me", 
  icon,        // now string (e.g., path ya data URL)
  iconPosition = "left", 
  className = "", 
  onClick 
}) {
  const isImageIcon = typeof icon === "string"; // check if it's a string or component

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 bg-[#f15b5b] hover:bg-[#e14a4a] transition text-white font-medium px-6 py-3 rounded-full text-sm ${className}`}
    >
      {/* Left Icon */}
      {icon && iconPosition === "left" && (
        isImageIcon ? (
          <img src={icon} alt="icon" className="w-4 h-4" />
        ) : (
          <icon className="w-4 h-4" />
        )
      )}

      <span>{text}</span>

      {/* Right Icon */}
      {icon && iconPosition === "right" && (
        isImageIcon ? (
          <img src={icon} alt="icon" className="w-4 h-4" />
        ) : (
          <icon className="w-4 h-4" />
        )
      )}
    </button>
  );
}

export default Button;
