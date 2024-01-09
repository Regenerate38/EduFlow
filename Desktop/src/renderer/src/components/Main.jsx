import background from "../assets/background.png"

const singleRoutine = {
    time: "some string",
    sub: "BLABLABLA"
}
const tempArr = new Array(7).fill(5)

const Main=()=>{
    return (
      <div className="flex flex-col flex-1 ">
        <h1 className="w-[90%] mx-auto py-7 text-4xl text-white font-bold">Main page</h1>
        <div className="flex  w-[90%] gap-6 mx-auto">
          <div className="flex flex-col gap-3">
            <Assignments/>
            <Todo/>
          </div>
            <Routine></Routine>
        </div>
      </div>
    )
}


export default Main


function Assignments(){
    return (
      <div className="flex flex-col gradient-bg rounded-2xl min-w-[14rem] w-[21vw] h-[10rem] ">
        <div className="flex flex-col">
          <div className="flex flex-col items-start p-4">
            <h1 className="text-white text-2xl">Assignments</h1>
            <h2 className="text-[#d9d9d9]">This week </h2>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-bold leading-7">12</h1>
              <h1 className="text-[#d9d9d9] ">Completed</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-red-600 text-2xl font-bold leading-7">4</h1>
              <h1 className="text-[#d9d9d9]">Pending</h1>
            </div>
          </div>
        </div>
      </div>
    )
}

function Todo(){
    return (
      <div className="flex flex-col gradient-bg rounded-2xl w-[21vw]  min-w-[14rem] h-[10rem] ">
        <div className="flex flex-col">
          <div className="flex flex-col items-start p-4">
            <h1 className="text-white text-2xl">Todo list</h1>
            <h2 className="text-[#d9d9d9]">Today </h2>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-bold leading-7">12</h1>
              <h1 className="text-[#d9d9d9] ">Completed</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-red-600 text-2xl font-bold leading-7">4</h1>
              <h1 className="text-[#d9d9d9]">Pending</h1>
            </div>
          </div>
        </div>
      </div>
    )
}

function Routine(){
    return (
      <div className="flex  flex-col gradient-bg rounded-2xl min-w-[20rem] w-[50vw] h-auto  ">
        <div className="flex flex-col px-8 p-4">
          <h1 className="text-white text-2xl px-4 font-bold mb-6">Routine</h1>
          <div className="flex flex-col px-4">
            {tempArr.map((element)=>{return (
              <>
                <div className="flex justify-start font-bold  gap-10">
                  <span className=" text-[#d9d9d9]">{singleRoutine.time}</span>
                  <span className=" text-white ">{singleRoutine.sub}</span>
                </div>
                <div className="w-[90%] h-[1px] border-b-[1.5px] border-b-[#d9d9d9] my-[2px]"></div>
              </>
            )})}

            
          </div>
        </div>
      </div>
    )
}