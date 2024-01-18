
import { Link , useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form"



const Home =()=>{
    const navigate=useNavigate( )
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return(<>
<button onClick={()=>{
    navigate('/information')
}}>singup</button>


        <h1>hom pag</h1>
        <Link to="/about">login</Link>





 


 
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