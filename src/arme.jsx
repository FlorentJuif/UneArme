import React from "react";


const Arme = ({ nom, image, onClick, selected }) => {
   nom='AK'
   image='https://www.airsoft-entrepot.fr/media/catalog/product/cache/0cc4f0dcb6b953b8f548409f40d73049/c/m/cm028_002.jpg'
   

  return (
    <div className={("arme",{selected})} onClick={onClick}>
      {nom}
      <img src={image} />
    </div>
  );
};

export default Arme;
