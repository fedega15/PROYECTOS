import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View() {

    const [item,setItem] = useState (null)
    const params = useParams()
    const store = useAppContext()
    useEffect(() => {
        const book = store.getItem(params.bookId)
        setItem(book)
    }, [])

    const itemStyles = {
        container: {
            display:"flex",
            gap:"20px",
            color:"white",
            width: "800px",
            margin: "0 auto",
        }
    }
    if (!item) {
        return <Layout>item NOT FOUND</Layout>
    }
    return (
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    <div>{item?.cover ?  <img src={item?.cover} width="400px" />: ''} </div>
                </div>

                <div>
                    <h2>{item?.title}</h2>
                    <h2>{item?.title}</h2>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? 'Leído' : 'Por terminar'}</div>
                    <div>{item?.review }</div>
                </div>
            </div>
        
        </Layout>
    )
}
