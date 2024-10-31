export default function Navbar() {
  return (
    <nav className="bg-[#044E83] sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden">
      <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
        <div className="relative left-5 top-[35px]">
          <img src="/logo.png" alt="logo" width={90} height={113} />
        </div>
        <div className="text_shadow hidden font-bold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
          <h1 >
           Tuition Free Education Program on Latest Technologies
          </h1>
        </div>
        <div>
          <ul className="cursor-pointer	 flex gap-9 font-[1rem] justify-center items-center text-white">
            <li>Home</li>
            <li>Apply</li>
            <li>Jobs</li>
            <li>Result</li>
            <li>Courses</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
