import React from "react";


const Arme = ({ nom, image, onClick, selected }) => {
  return (
    <div className={("arme",{selected})} onClick={onClick}>
      {nom}
      <img src={image} />
    </div>
  );
};

export default Arme;
