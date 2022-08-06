const React = require("react");

function Deposit(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
    txtcolor="black"
    header="BadBank Deposit"
    title="Deposit"
    text={JSON.stringify(ctx)}
    body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)} 
    /> 
  );
 }
