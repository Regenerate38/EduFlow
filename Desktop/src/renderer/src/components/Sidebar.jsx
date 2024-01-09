import { useState } from 'react'
import { IoMdHome, IoMdSettings } from 'react-icons/io'
import { LuChevronLeftCircle } from "react-icons/lu"
import { FaCalendar } from 'react-icons/fa'
import { MdAssignmentAdd } from 'react-icons/md'
import { PiBooks } from 'react-icons/pi'
import { IoLogoStackoverflow } from 'react-icons/io5'

const Sidebar = () => {
  const [active, setActive] = useState(true)
  return (
    <div
      className={`h-full   ${
        active ? 'w-[16.5rem] min-w-[16.5rem]' : 'w-[5.5rem] min-w-[5.5rem]'  
      } text-[#DFDFDF] bg-[#2C293B] Inter flex  flex-col items-center transition-all border-r-white border-r-[2px]`}
    >
      <h1 className="mx-auto text-2xl font-bold py-10 flex no-wrap gap-3">
        {active && 'EduFlow'}
        <span className="font-bolder text-2xl" onClick={() => setActive(!active)}>
          {active ? (
            <LuChevronLeftCircle style={{ fontSize: '2rem' }} />
          ) : (
            <LuChevronLeftCircle style={{ transform: 'rotate(180deg)', fontSize: '2rem' }} />
          )}
        </span>
      </h1>
      <div className=" flex mx-auto  flex-col gap-5 flex-1">
        <div className="flex Fredoka no-wrap justify-start  text-[1.25rem] items-center">
          <IoMdHome size={28}></IoMdHome>
          <h2 className={`mx-5 ${active ? 'flex' : 'hidden'}`}>Home</h2>
        </div>
        <div className="flex Fredoka no-wrap justify-start text-[1.25rem] items-center">
          <FaCalendar size={28}></FaCalendar>
          <h2 className={`mx-5 ${active ? 'flex' : 'hidden'}`}>Calendar</h2>
        </div>
        <div className="flex Fredoka no-wrap justify-start text-[1.25rem] items-center">
          <MdAssignmentAdd size={28}></MdAssignmentAdd>
          <h2 className={`mx-5 ${active ? 'flex' : 'hidden'}`}>Assignments</h2>
        </div>
        <div className="flex Fredoka no-wrap justify-start text-[1.25rem] items-center">
          <PiBooks size={28}></PiBooks>
          <h2 className={`mx-5 ${active ? 'flex' : 'hidden'}`}>Syllabus</h2>
        </div>
        <div className="flex Fredoka no-wrap justify-start text-[1.25rem] items-center">
          <IoLogoStackoverflow size={28}></IoLogoStackoverflow>
          <h2 className={`mx-5 ${active ? 'flex' : 'hidden'}`}>Resources</h2>
        </div>
      </div>
      <div className="flex py-5 justify-start Fredoka no-wrap text-[1.5rem] items-center">
        <IoMdSettings size={28}></IoMdSettings>
        <h2 className={`mx-5 ${active ? 'flex' : 'hidden'}`}>Settings</h2>
      </div>
    </div>
  )
}

export default Sidebar
