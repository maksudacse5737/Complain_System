import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Contact from './Contact.jsx'
import Category from './Category.jsx'
import Tab from './tab.jsx'
import New from './New.jsx'
Contact

  
 
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Nav/>
      <Tab/>
      <New defaultValue="Default car" carOwner="Anti"/> 
    </React.StrictMode>  )
    
  // setTimeout(
  //   function aps(){
  //     ReactDOM.createRoot(document.getElementById('root')).render(
            
          
  //     ) 
  //   },4000)
  
  //     setTimeout(
  //       function aps(){
  //         ReactDOM.createRoot(document.getElementById('root')).render(
  //         <li>{arr[3]}
  //         </li>
  //         ) 
  //       },8000)




