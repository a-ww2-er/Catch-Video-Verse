import { ArrowRight } from "lucide-react";


const ToolSuite = () => {
  return (<>
      <div className="section bg-emerald-600 text-white  flex flex-col gap-4 items-center  justify-center">
   <h1 className="text-center text-5xl font-semibold mt-10">Your full suite of video tools
</h1>
<p className="text-xl">Get everything you need to edit, manage, and publish stunning videos that move the needle.</p>
    <span className="cursor-pointer flex justify-start items-center px-5 py-3 rounded-lg gap-4" style={{backgroundColor:"#17D5FF"}}>
          {" "}
          <p className="text-white text-lg font-medium">See Plans</p>
          <p className="p-2 px-3 rounded-lg" style={{backgroundColor:"#00AACF"}}>
            <ArrowRight size={18} />
          </p>
        </span>
    </div>
  </>
  )
}

export default ToolSuite