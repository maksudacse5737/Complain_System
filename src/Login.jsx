function Login({name,id}){
  return (
    <form class="m-10 text-center bg-purple-400">
        <label class="m-5">
            Name: <input type="text" placeholder={name} />
        </label>
        <label class="m-5">
            Birth ID: <input type="text" placeholder={id} />
        </label>
        <input type="submit" class="bg-yellow-400 m-3 p-2 rounded-lg  inline" value="Login" />
    </form>
    )
}
 export default Login



