 
//  import for Navbar 
import NavBar from "./NavBar";
import Index from "./order/Index";
import UserIndex from "./users/UserIndex";
 


function App() {
 

  return (
    <>
      <div classNameName="container mx-auto px-4 h-screen flex flex-col">
      {/* -- Navbar -- */}
        <NavBar />
        {/* <!-- Main Content --> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <Index />
        {/* <!-- Order Summary and Reports Section --> */}
           
           <UserIndex />
            </div>
            </div>
       
    </>
  )
}

export default App
