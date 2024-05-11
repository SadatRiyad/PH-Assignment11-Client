import useAuth from "../Hooks/useAuth/useAuth";

const MyQueries = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <h1>my query</h1>
        </div>
    );
};

export default MyQueries;