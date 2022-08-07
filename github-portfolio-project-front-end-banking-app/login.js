function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx                     = React.useContext(UserContext);  
  var   ctx2                    = Array(ctx);

  //Not checking email and password against array, how do i do that?
  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
    }

    function handleCreate(){
      console.log(email,password);
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx2.push({email});
      ctx2.push({password});
      setShow(false);
      console.log(ctx);
      console.log(ctx2);
      }
    
      function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
      }

    return (
      <Card
        bgcolor   ="warning"
        header    ="Login"
        status    ={status}
        body      ={show ? (  
                <>
                Email <br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                <br/>
                Password <br/>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                <br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                <br/>
                {(showError) ? 'Please check email or password' : ''}
                </>
                ):(
                <>
                <h5>You Are Logged In</h5>
                </>
              )}
          />
  )
}
 //const ctx = React.useContext(UserContext);

  //return (
    //<Card
    //txtcolor="black"
    //header="BadBank Login to User Account"
    //title="Login"
    //text={JSON.stringify(ctx)}
    //body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)} 
    ///> 
  //); 
//}
