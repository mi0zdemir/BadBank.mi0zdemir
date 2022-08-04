function Spa(){
    return (
        
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users: [{name:'mieha', email:'mieha.ozdemir@icloud.com', password:'password', balance:1000}]}}>
                <Router path="/" exact component=               {Home} />
                <Router path="/CreateAccount/" exact component= {CreateAccount} />
                <Router path="/login/" exact component=         {Login} />
                <Router path="/deposit/" exact component=       {Deposit} />
                <Router path="/withdraw/" exact component=      {Withdraw} />
                <Router path="/balance/" exact component=       {Balance} />
                <Router path="/alldata/" exact component=       {AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}

//ReactDOM.render(
//    <Spa/>,
//    document.getElementById('root')
//  );

//from group discussion --Katherine Dixon
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Spa />);

//import { createRoot } from 'react-dom/client';

//const container = document.getElementById('root');
//const root = createRoot(container);
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);