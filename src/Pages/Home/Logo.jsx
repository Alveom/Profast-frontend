import React from "react";
import PageLogo from "../../assets/logo.png";
function Logo() {
  return (
    <div className="flex items-center">
      <img className="mb-2" src={PageLogo} alt="" />
      <h3 className="text-2xl -ml-3   font-extrabold">Profast</h3>
    </div>
  );
}

export default Logo;
