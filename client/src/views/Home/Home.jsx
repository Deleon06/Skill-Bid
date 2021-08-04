import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"
import "./Home.css"

export default function Home(props) {
    

return (
    <Layout user={props.user} setUser={props.setUser}>
        <Card />
        <div className="filter-container">
            <form>
                <label>Filter By</label>
                <select>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Ceiling">Ceiling</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Floor">Floor</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Paint">Paint</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Roof">Roof</option>
                    <option value="Wall">Wall</option>
                </select>
            </form>
        </div>
    </Layout>
)
}