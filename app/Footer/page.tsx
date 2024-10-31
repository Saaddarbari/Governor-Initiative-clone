import Link from 'next/link';
export default function Footer() {
  return (
    <div className="mt-20 w-full bg-zinc-100 print:hidden">
      <div className="m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Core Courses</h1>
            <div className="flex flex-col gap-3 text-sm md:text-base mt-5">
              <Link href={'/'}>Programming Fundamentals</Link>
              <Link href={'/'}>Web2 Using NextJS</Link>
              <Link href={'/'}>Earn as You Learn</Link>
            </div>
          </div>

          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Advanced Courses</h1>
            <div className="flex flex-col gap-3 text-sm md:text-base mt-5">
            <Link href={'/'}>Web 3 and Metaverse</Link>
              <Link href={'/'}>Cloud-Native Computing</Link>
              <Link href={'/'}>Artificial Intelligence (AI) and Deep Learning</Link>
              <Link href={'/'}>Ambient Computing and IoT</Link>
              <Link href={'/'}>Genomics and Bioinformatics</Link>
              <Link href={'/'}>Network Programmability and Automation</Link>
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Social Links</h1>
            <div className="flex gap-3 md:text-sm my-5">
                <Link href={'/'}><button className="h-[25px] w-[25px] rounded-full text-white bg-blue-800">f</button></Link>
                <Link href={'/'}><button className="h-[25px] w-[25px] rounded-full text-white bg-red-800">tube</button></Link>
                <Link href={'/'}><button className="h-[25px] w-[25px] rounded-full text-white bg-blue-500">twitter</button></Link>
                <Link href={'/'}><button className="h-[25px] w-[25px] rounded-full text-white bg-pink-800">insta</button></Link>
                <Link href={'/'}><button className="h-[25px] w-[25px] rounded-full text-white bg-black text-sm">t</button></Link>
            </div>
            <div className="flex gap-1">
                <img src="/email.jpg" alt="emaillogo" width={15} height={15}/>
                <Link href={'/'}>education@governorsindh.com</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
