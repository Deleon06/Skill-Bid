import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import { useState } from "react"
import "./Home.css"

export default function Home(props) {
    const [value, setValue] = useState('All')
    const [budget, setBudget] = useState(0)
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    const changeBudget = (e) => {
        setBudget(e.target.value)
    }
    
return (
  <Layout user={props.user} setUser={props.setUser}>
    <ImageSlider />
        <div className="mainview">
            <div className="category-filter">
                <form className="">
                    <label>Filter By Category</label>
                    <br />
                    <select onChange={handleChange}>
                        <option value="All">All</option>
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
                <form className="budget-filter" onChange={changeBudget}>
                    <label>Filter By Budget</label>
                    <li><label for="under10000">Budget Under $10,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under10000"
                        value="10000"
                    /></li>
                    <li><label for="under20000">Budget Under $20,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under20000"
                        value="20000"
                    /></li>
                    <li><label for="under30000">Budget Under $30,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under30000"
                        value="30000"
                    /></li>
                    <li><label for="under40000">Budget Under $40,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under40000"
                        value="40000"
                    /></li>
                    <li><label for="under50000">Budget Under $50,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under50000"
                        value="50000"
                    /></li>
                    <li><label for="under60000">Budget Under $60,000</label>
                    <input
                        id="budget_input"
                        type="checkbox"
                        name="under60000"
                        value="60000"
                    /></li>
                    <li><label for="under70000">Budget Under $70,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under70000"
                        value="70000"
                    /></li>
                    <li><label for="under80000">Budget Under $80,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under80000"
                        value="80000"
                    /></li>
                    <li><label for="under90000">Budget Under $90,000</label>
                    <input 
                        id="budget_input"
                        type="checkbox"
                        name="under90000"
                        value="90000"
                    /></li>
                    <li><label for="under100000">Budget Under $100,000</label>
                    <input 
                        id="budget_input"
                        type="checkbox"
                        name="under100000"
                        value="100000"
                    /></li>
                </form>
            </div>
            <Card value ={value} budget={budget} user={props.user}/>
        </div>
    </Layout>
)
}