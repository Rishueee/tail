import './index.css'
import kalvium from './assets/Kalvium-Logo.png';

function App() {
  return (
    <>
      <nav className=' bg-red-400 flex   p-6 '>
        <div className='  flex-shrink-0  text-white mr-6 flex  items-center '>
          <p className='font-bold text-2xl'>Kalvium</p>
        </div>

        <div className=' sm:items-center  sm:w-auto block flex-grow  w-full sm:flex '>
          <div className='text-sm sm:flex-grow space-evenly'>
            <a  className="m-4 text-blue-300 text-lg">About us</a>
            <a className="m-4 text-blue-300 text-lg">Contact</a>
            <a className="m-4 text-blue-300 text-lg">Courses</a>
          </div>
          <div>
            <a href="#" className="  border rounded  border-white p-4 text-white  ">Login</a>
          </div>
        </div>
      </nav>
      <div>
      <button className='border bg-blue-600 border-Blue text-white px-6 py-4 rounded mx-20 my-5'>Button One</button>
      </div>
      <div className=' rounded-lg border border-[#f43f5e] p-5 mx-20 bg-[#fecdd3] text-[#be123c]'>
      <span className='font-bold'>Alert! </span><span>This is awesome!</span>
     </div>
     <div className="max-w-sm mx-auto flex items-center justify-center bg-gray-100 shadow-md p-9 w-30 rounded-lg">
  <img src={kalvium} className="h-12 mr-4" alt="Kalvium Logo" />
  <div>
    <h1 className="text-lg font-bold">Kalvium Store</h1>
    <p className="text-sm whitespace-nowrap">You have a new course!</p>

  </div>
</div>


      <div className=" mt-8  bg-gray-300 text-center  py-4  text-lg">
        <p>©️ 2021 Copyright: <a href="#">Kalvium</a></p>
      </div>
    </>
  );
}

export default App;
