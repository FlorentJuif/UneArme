import React, { useState } from "react";

const Arme = () => {
  const [nbBalles, setNbBalles] = useState(0);
  return (
    <div>
      <p>Ceci est un USP</p>
      <p>Clic sur le boutton pour tirer</p>
      <button onClick={() => setNbBalles(nbBalles + 1)}></button>
      <p>Tu as tiré {nbBalles} fois avec, bien joué !</p>
    </div>
  );
};

export default Arme;
