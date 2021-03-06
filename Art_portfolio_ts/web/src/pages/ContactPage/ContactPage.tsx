import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'
import Login from '../../components/Login'

const ContactPage = () => {
    //email
    let sendbtn = document.getElementById('contant');

    function sendEmail(event){
      event.preventDefault();

      alert("works")
    }


  return (
    <>
      <MetaTags title="Contact" description="Index page" />
      <header>
      <Login />
        <nav>
          <Navbar 
          names = {["Home", "Contact"]}
          links = {["/", "/contact"]} 
          offSetBottomElement = {128}/>
        </nav>
      </header>

      <h1 className='text-red-500 flex justify-center h1Font'>Contact</h1>
      <form onSubmit={sendEmail}
      className='mx-[14vw]'>
        <div className='space-x-4 flex justify-center mt-8 mb-4'>
          <input type="text" name="firstName" id='firstName' placeholder="First Name" required={true}
          className='drop-shadow h-8 w-full rounded-lg' style={{padding: "0 10px"}}/>
          <input type="text" name="lasttName" id='lasttName' placeholder='Last Name' required={true}
          className='drop-shadow h-8 w-full rounded-lg' style={{padding: "0 10px"}}/>
        </div>
        <div className=''>
          <input type="email" name="email" id='email' placeholder='Email' required={true}
            className='drop-shadow h-8 w-full mb-4 rounded-lg' style={{padding: "0 10px"}}/>
          <input type="text" name="subject" id='subject' placeholder='Subject' required={true}
            className='drop-shadow h-8 w-full mb-4 rounded-lg' style={{padding: "0 10px"}}/>
          <textarea name="contant" id='contant' placeholder='Contant' required={true}
            className='drop-shadow h-32 w-full mb-4 rounded-lg' style={{padding: "6px 10px"}}/>
            
        </div>
        <input type="submit" 
            className='transition-all py-2 px-4 bg-red-500 text-red-500 hover:text-white rounded-md
            flex mx-auto'/>
      </form>
      
    </>
  )
}

export default ContactPage
