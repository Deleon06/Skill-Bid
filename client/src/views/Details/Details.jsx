import Layout from "../../components/Layout/Layout"
import Detail from "../../components/Detail/Detail"


export default function Details(props) {
    

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <Detail />
    </Layout>
)
}