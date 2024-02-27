import Login from "./Login"
import Category from "./Category"
function Nav(){
    return (
    <div>
      <ul class="mt-10 w-full text-center">
        <li class="bg-blue-400  p-4 rounded-lg  m-2  inline"><a class="text-white text-2xl hover:text-black" href="#">Home</a></li>
        <li class="bg-blue-400  p-4 rounded-lg  m-2  inline"><a class="text-white text-2xl hover:text-black" href="#">Collections</a></li>
        <li class="bg-blue-400  p-4 rounded-lg  m-2  inline"><a class="text-white text-2xl hover:text-black" href="#">About Us</a></li>
        <li class="bg-blue-400  p-4 rounded-lg  m-2  inline"> <a class="text-white text-2xl hover:text-black">Category</a></li>   
        <li class="bg-blue-400  p-4 rounded-lg  m-2  inline"><a class="text-white text-2xl hover:text-black" href="#">Contact us</a></li>
        <Login name="Signup" id="100"/>
        <Category/>
      </ul>
    </div>
    )
  }
  export default Nav