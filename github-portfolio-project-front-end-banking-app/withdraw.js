function Withdraw(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
    txtcolor="black"
    header="BadBank Withdraw"
    title="Withdraw"
    text={JSON.stringify(ctx)}
    body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)} 
    /> 
  );
}
