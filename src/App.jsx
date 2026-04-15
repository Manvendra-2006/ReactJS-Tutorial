//  function App(){
//   const name = "Manvendra"
//   const age = "20"
//   console.log(name)
//   const newArray = [1,2,34,5]
//   const object = {
//     name:"Manvendra",
//     age:"12"
//   }
//   function Hello(e){
// console.log(e.nativeEvent)
//   }
//   return (
//    <>
//     <h1>Manvendra</h1>
//     <h1>sma</h1>
//     <h1>{name}</h1>
//     <h1>{age}</h1>
//     <h1>{newArray[0]}</h1>
//     <h1>{newArray[1]}</h1>
//     <h1>{newArray}</h1>
//     <h1>{object.name}</h1>
//     {/* <button onClick={Hello}>Click</button> // Function Refrence
//     <button onClick={Hello()}>Click</button> // Function Call */}
//     <button onClick={(e)=>Hello(e)}>Click Pass</button> 
//    </>
//   )
// }
// export default App
// // 1. The name of the function is same as file name (For better Pratice)
// // 2. The name of the function starts with Capital letter always
// // 3. it returns JSX 
// // 4. It return parent element


import React, { useState } from 'react'

const App = () => {
  const [state,setstate] = useState(0)
  function handleInc(){
    setstate(state+1)
  }
  function handleDec(){
    setstate(state-1)
  }
  function hello(){
    console.log("hello")
  }
  hello()
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  )
}

export default App