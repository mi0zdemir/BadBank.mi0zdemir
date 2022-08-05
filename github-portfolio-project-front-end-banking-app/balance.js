function Balance(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
    txtcolor="black"
    header="BadBank Balance"
    title="Current Balance"
    text={JSON.stringify(ctx)}
    body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)} 
    /> 
  );
}
