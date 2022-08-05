function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
    txtcolor="black"
    header="BadBank All Data"
    title="All User Data"
    text={JSON.stringify(ctx)}
    body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)} 
    /> 
  );
}
