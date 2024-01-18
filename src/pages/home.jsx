
import { Link , useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home =()=>{ const notify = () => toast("Wow so easy!");
    const navigate=useNavigate( )
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return(<>
<button onClick={()=>{
    navigate('/information')
}}>singup</button>


        <h1>hom pag</h1>
        <Link to="/about">login</Link>



        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer  position="top-left"/>
      </div>

 


 
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
 










        </>
    )
}
export default Home;