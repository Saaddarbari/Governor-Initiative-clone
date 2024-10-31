export default function Footer() {
  return (
    <div className="mt-20 w-full bg-zinc-100 print:hidden">
      <div className="m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Core Courses</h1>
            <div className="flex flex-col gap-3 text-sm md:text-base mt-5">
              <a href="/">Programming Fundamentals</a>
              <a href="/">Web2 Using NextJS</a>
              <a href="/">Earn as You Learn</a>
            </div>
          </div>

          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Advanced Courses</h1>
            <div className="flex flex-col gap-3 text-sm md:text-base mt-5">
              <a href="/">Web 3 and Metaverse</a>
              <a href="/">Cloud-Native Computing</a>
              <a href="/">Artificial Intelligence (AI) and Deep Learning</a>
              <a href="/">Ambient Computing and IoT</a>
              <a href="/">Genomics and Bioinformatics</a>
              <a href="/">Network Programmability and Automation</a>
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Social Links</h1>
            <div className="flex gap-3 md:text-sm my-5">
                <a href="/"><button className="h-[25px] w-[25px] rounded-full text-white bg-blue-800">f</button></a>
                <a href="/"><button className="h-[25px] w-[25px] rounded-full text-white bg-red-800">tube</button></a>
                <a href="/"><button className="h-[25px] w-[25px] rounded-full text-white bg-blue-500">twitter</button></a>
                <a href="/"><button className="h-[25px] w-[25px] rounded-full text-white bg-pink-800">insta</button></a>
                <a href="/"><button className="h-[25px] w-[25px] rounded-full text-white bg-black text-sm">t</button></a>
            </div>
            <div className="flex gap-1">
                <img src="/email.jpg" alt="emaillogo" width={15} height={15}/>
                <a href="/">education@governorsindh.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
