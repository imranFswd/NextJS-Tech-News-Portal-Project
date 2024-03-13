import Link from "next/link"


function Copyright() {
  return (
    <div className="mt-10 bg-gray-50 rounded-[2.5rem] shadow-sm p-5 cursor-default">
      <div>
        <p className="flex justify-center items-center gap-[5px] text-[1rem]">
          <span>&copy; 2024</span> 
          <Link href={"/"} className="text-teal-600 font-bold">
            <span>imranFswd</span>
          </Link>
          <p>All right reserved.</p>
        </p>
      </div>
    </div>
  )
}

export default Copyright