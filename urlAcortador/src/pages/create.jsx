import CreateForm from "../components/createForm";
import MainCointainer from "../components/mainCointainer";

export default function Create () {
    return <MainCointainer>
        <CreateForm dispatch={dispatch}/>
        <div>
            {state.items.map((item) => (
                <div>{item.url}</div> 
                ))}
        </div>

   
    </MainCointainer>
}