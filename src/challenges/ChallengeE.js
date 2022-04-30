import React, { useContext, createContext } from "react";

export const ObjectContext = createContext();

const CompA = () => {
  return (
    <ObjectContext.Provider value={{ compC: "compB", compD: "compD" }}>
      <CompB />
    </ObjectContext.Provider>
  );
};

const CompB = () => {
  return (
    <>
      <CompC />
      <CompD />
    </>
  );
};

const CompC = () => {
  const { compC } = useContext(ObjectContext);

  return <div>{compC}</div>;
};

const CompD = () => {
  const { compD } = useContext(ObjectContext);

  return <div>{compD}</div>;
};

const ChallengeE = () => {
  return <CompA />;
};

export default ChallengeE;
