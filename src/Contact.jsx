function Contact({problem1,Problem2,Problem3,Problem4}){
  return (
    <form className="text-center m-20 ">
        <label class="m-5 text-center">
            Consumption: <input type="text" class="text-center m-4" placeholder={problem1} />
        </label>
        <br/>
        <label class="m-5 text-left m-20">
            Accommodation: <input type="text" class="text-center m-4" placeholder={Problem2} />
        </label>
        <br/>
        <label class="m-5 text-left m-20">
            Treatment: <input type="text" class="text-center m-4" placeholder={Problem3} />
        </label>
        <br/>
        <label class="m-5 text-left m-20">
            Security: <input type="text" class="text-center m-4" placeholder={Problem4} />
        </label>
        
        <input  type="submit" class="bg-yellow-400 m-3 p-2 rounded-lg inline" value=" Submit Complain" />
    </form>
    )
}
export default Contact

