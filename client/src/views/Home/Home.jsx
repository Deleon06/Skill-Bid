import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"
import Filter from "../../components/Filter/Filter"
import "./Home.css"

export default function Home(props) {
    
return (
    <Layout user={props.user} setUser={props.setUser}>
        <Card value ={value}/>
        <Filter />
    </Layout>
)
}