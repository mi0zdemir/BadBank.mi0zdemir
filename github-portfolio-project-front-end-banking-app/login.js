function Login(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
    txtcolor="black"
    header="BadBank Login to User Account"
    title="Login"
    text={JSON.stringify(ctx)}
    body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)} 
    /> 
  ); 
}
