function Home(){
    const ctx = React.useContext(UserContext);

    return(
        <div>
            <h3>Home Component</h3>
            {JSON.stringify(ctx.user)}
        </div>
    )
}