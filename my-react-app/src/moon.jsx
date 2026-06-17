import UserContex from "./context.js";
import Recieve from "./recieve.jsx"


function Varient()
{
    return (
        <UserContex.Provider value="Tamil">
            <Recieve></Recieve>

        </UserContex.Provider>
    );
}
export default Varient;