
import { Link , useNavigate} from "react-router-dom";




const Home =()=>{
    const navigate=useNavigate( )
    return(<>
<button onClick={()=>{
    navigate('/information')
}}>singup</button>


        <h1>hom pag</h1>
        <Link to="/about">login</Link>
        </>
    )
}
export default Home;