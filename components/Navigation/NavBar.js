import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-12 w-screen font-mono justify-evenly items-center ">
        <div>
          <nav>
            <ul className="flex w-full gap-8 items-center">
              <li className="">Time Sheet</li>
              <div>
                <h2
                  className={`lg:text-2xl font-roboto md:text-xl p-1 rounded-lg ${
                    router.pathname === "/employee-dash" ? "bg-gray-500" : null
                  } `}
                >
                  <Link href="/employee-dash">Internal Workforce</Link>
                </h2>
              </div>
              <li>Schedule</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
