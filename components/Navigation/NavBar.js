import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <div className=" h-12  ml-auto font-mono ">
        <div className="">
          <nav>
            <ul className="flex justify-between">
              <li>
                <div className="">
                  <h2
                    className={`lg:text-2xl font-roboto  p-1 rounded-lg  ${
                      router.pathname === "/employee-dash"
                        ? "bg-gray-500"
                        : null
                    } `}
                  >
                    <Link href="/employee-dash">Internal Workforce</Link>
                  </h2>
                </div>
              </li>
              <li className="lg:text-xl font-roboto p-1 rounded-xl bg-red-50 text-black flex items-center">
                Time Sheet
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
