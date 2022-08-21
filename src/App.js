import React from "react";
import "./app.css"; 
import pics from "../src/images/pic.jpg" ;
import pics1 from "../src/images/pic2.jpg";
import pics2 from "../src/images/pic1.jpg"
function App() {
 return (
   <>
  <h1 class="text-3xl text-center font-bold underline text-red-500 mt-8">
    Our Services!
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gab-3 justify-items-center mt-15">
      <div class="py-10">
        <div class="rounded overflow-hidden shadow-lg max-w-xs ">
        <img src={pics} 
        alt=""
        class=""
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Nature</div>
          <p class="text-gray-600"> In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful. –Alice Walker</p>
        </div>
        <div class="grid grid-flow-col gap-5 pb-2 px-6">
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2">
           #photography
          </span>
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2">
           #travel
          </span>
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2 ">
           #winter
          </span>
        </div>
        </div>
      </div>
      <div class="py-10">
        <div class="rounded overflow-hidden shadow-lg max-w-xs">
        <img src={pics1}
        alt=""
        class="w-full"
        />
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Forest</div>
          <p class="text-gray-600"> If there’s one place we go above all others when we need to relax it’s the forest. You could say we were lovers of forest! </p>
        </div>
        <div class="grid grid-flow-col gap-5 pb-2 px-6">
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2">
           #photography
          </span>
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2">
           #travel
          </span>
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2 ">
           #winter
          </span>
        </div>
        </div>
      </div>
      <div class="py-10">
        <div class="rounded overflow-hidden shadow-lg max-w-xs">
        <img src={pics2} alt=""
        class="w-full"
        />
         <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Mountain</div>
          <p class="text-gray-600"> “Every mountain top is within reach if you just keep climbing.” “Every man should pull a boat over a mountain once in his life.” </p>
        </div>
        <div class="grid grid-flow-col gap-5 pb-2 px-6">
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2">
           #photography
          </span>
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2">
           #travel
          </span>
          <span class="bg-gray-200 rounded-full px-2 py-1 font-base text-sm mb-2 ">
           #winter
          </span>
        </div>
        </div>
      </div>
    </div>
  


  {/* <ul className="flex w-2/4 justify-evenly items-center  border border-black">
      <li className="hover:bg-purple-400">home</li>
      <li className="hover:bg-purple-400">about</li>
      <li className="hover:bg-purple-400">contact</li>
      <li className="hover:bg-purple-400">email</li>
     </ul> */}

   {/* <div className="">
    <div className="border border-red-800 bg-pink-800">1</div>
    <div className="border border-red-800 bg-pink-800">2</div>
    <div className="border border-red-800 bg-pink-800">3</div>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
   </div>  */}
   </>
  );
}
export default App;
