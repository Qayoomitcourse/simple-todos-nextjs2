"use client"
import { useState } from "react"

export default function Todos() {
  // define state
  const [todos, settodos] = useState([{ itemName: "Typescript Learning", id: 1 }, { itemName: "Next.Js Learning,", id: 2 }])
  const [inputval, setinput] = useState("")
  const [id, setid] = useState(0)

  //functions 
  const addItem = () => {
    const obj: any = todos.find(item => item.id === id)  
    if (obj) {
      let newArray = todos.filter(item => item.id !== obj.id)  
      settodos([...newArray, { itemName: inputval, id: id }])
      setinput("")
      setid(0)
      return
    }

    settodos([...todos, { itemName: inputval, id: id }])
    setinput("")
    setid(0)
  }

  const editItem = (id: any) => {
    const obj: any = todos.find(item => item.id === id)  
    if (obj) {  // Added a check to ensure object exists
      setinput(obj.itemName)
      setid(obj.id)
    }
  }

  const deleteItem = (id:any) => {
    let newArray = todos.filter(item => item.id !== id)  
    settodos([...newArray])
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl shadow-lg">
      <h1 className="text-center text-4xl font-semibold text-indigo-800 underline mb-6">SIMPLE TODO APP</h1>

      {/* Input Section */}
      <div className="flex justify-between pt-5 gap-6 items-center">
        <input
          type="text"
          value={inputval}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Write todo item"
          className="p-3 ml-2 shadow-lg rounded-xl w-[60%] text-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        
        <input 
          type="number" 
          value={id} 
          onChange={(e: any) => setid(e.target.value)} 
          placeholder="ID"
          className="shadow-lg rounded-xl text-center w-[20%] py-3 text-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        
        <button 
          onClick={addItem} 
          className="bg-indigo-600 hover:bg-indigo-400 w-[20%] text-white text-xl rounded-full py-3 transition duration-300 ease-in-out transform hover:scale-105">
          ADD ITEM
        </button>
      </div>
      {/* End Input Section */}

      {/* Todo List Header */}
      <h1 className="mt-8 text-3xl font-semibold text-blue-700 text-center">TODOS ITEM LIST</h1>

      {/* Todo List Items */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-6">
        {
          todos.map((item: any, i: number) => {
            return (
              <div className="shadow-xl p-6 bg-white rounded-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105" key={i}>
                <div className="flex justify-between text-xl">
                  <span className="shadow-lg rounded-full h-10 w-10 text-center my-auto bg-indigo-100 text-indigo-800">{i + 1}</span>
                  <span onClick={() => deleteItem(item.id)} className="cursor-pointer text-red-600 text-lg font-semibold hover:text-red-400">x</span>
                </div>
                
                {/* Todo Item Data */}
                <div className="mt-4 text-lg text-gray-800 font-medium">{item.itemName}</div>

                {/* Edit Option */}
                <div className="mt-4 text-right">
                  <h2 onClick={() => editItem(item.id)} className="cursor-pointer text-indigo-600 hover:text-indigo-400 font-semibold">Edit</h2>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
