import { useAppContext } from "../store/store"
import Layout from "../components/layout"
import Books from "../components/books"

export default function Index () {
    
    const store= useAppContext()
    
    const booksContainer = {
        display:"flex",
        flexwrap:"wrap",
        gap:"10px",
        
        
    }
    
    return (
        <Layout>
            <div style={booksContainer}>
            {store.items.map((item) => (
            <Books  key={item.id} item={item}/>
            ))}
            </div>
        </Layout>
    )
}