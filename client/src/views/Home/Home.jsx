import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"

export default function Home(props) {
    

return (
    <Layout user={props.user} setUser={props.setUser}>
        <Card />
    </Layout>
)
}