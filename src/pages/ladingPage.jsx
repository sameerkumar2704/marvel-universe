import { twMerge } from "tailwind-merge";
import captain from "../assets/capain-america.png";
import deadpool from "../assets/dead-pool.png";
import ironman from "../assets/iron-man.png";
import getComicDetailsWithTitle, {
  getData,
} from "../apiCallback/getComicOfCharacter";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
const data = [
  {
    image: deadpool,
    name: "deadpool",
    dialog: "Well, that’s just lazy writing",
    bgColor: "bg-red-600",
    textColor: "text-white",
    nameBg: "bg-black",
  },
  {
    image: captain,
    name: "captin america",
    dialog: "Well, that’s just lazy writing",
    bgColor: "bg-blue-500",
    nameBg: "bg-red-600",
  },
];
function NavBar({ setNavBar }) {
  const nav = useRef(null);
  useEffect(() => {
    setNavBar(nav);
  }, []);
  return (
    <nav
      ref={nav}
      className=" border-b  border-black duration-300 transition-all px-4 py-2 text-white  sticky top-0 z-10  backdrop-blur-lg bg-red-600 flex font-bold "
    >
      <h1>Marvel Universe</h1>
    </nav>
  );
}
function MarvelUniverse() {
  return (
    <div className="  flex flex-col gap-5  items-center p-4">
      <h1 className=" text-4xl font-extrabold text-red-600 text-center ">
        Marvel Universe
      </h1>
      <div className=" max-[1460px]:grid-cols-2 max-[520px]:grid-cols-1  grid grid-cols-5 gap-5 items-stretch w-full     grid-flow-row  ">
        <div className=" h-[28rem]  bg-red-600 rounded-md p-3 group transition-all duration-150">
          <img
            src={deadpool}
            className=" w-full h-[92%] object-contain transition-all duration-150 group-hover:scale-110 origin-bottom "
          />
          <h1 className=" font-extrabold text-center text-2xl text-white transition-all duration-150">
            dead pool
          </h1>
        </div>
        <div className=" h-[28rem]  bg-blue-600 rounded-md p-3 group transition-all duration-150">
          <img
            src={captain}
            className="  w-full h-[92%] object-contain transition-all duration-150 group-hover:scale-110 origin-bottom "
          />
          <h1 className=" font-extrabold text-center text-2xl text-white transition-all duration-150">
            dead pool
          </h1>
        </div>
        <div className=" h-[28rem]  bg-red-600 rounded-md p-3 group transition-all duration-150">
          <img
            src={deadpool}
            className=" w-full h-[92%] object-contain transition-all duration-150 group-hover:scale-110 origin-bottom "
          />
          <h1 className=" font-extrabold text-center text-2xl text-white transition-all duration-150">
            dead pool
          </h1>
        </div>
        <div className=" h-[28rem]  bg-orange-600 rounded-md p-3 group transition-all duration-150">
          <img
            src={ironman}
            className="  w-full h-[92%] object-contain transition-all duration-150 group-hover:scale-110 origin-bottom "
          />
          <h1 className=" font-extrabold text-center text-2xl text-white transition-all duration-150">
            dead pool
          </h1>
        </div>
        <div className=" h-[28rem]  bg-red-600 rounded-md p-3 group transition-all duration-150">
          <img
            src={deadpool}
            className=" w-full h-[92%] object-contain transition-all duration-150 group-hover:scale-110 origin-bottom "
          />
          <h1 className=" font-extrabold text-center text-2xl text-white transition-all duration-150">
            dead pool
          </h1>
        </div>
      </div>
      <button className=" px-4 py-2 font-bold rounded-md bg-yellow-500 text-white">
        Show More
      </button>
    </div>
  );
}
function FirstComponent({
  comicTitle,
  image,
  characterName,
  dialog,
  bgColor,
  headingColor,
  nameBg,
}) {
  const { data } = useQuery({
    queryKey: ["deadpool", comicTitle],
    queryFn: async () => {
      const data = await getData(comicTitle);
      return data;
    },
  });
  return (
    <div
      className={twMerge(
        ` flex ${bgColor}  place-items-stretch max-lg:h-auto h-screen    `
      )}
    >
      <div className=" max-sm:w-full max-[1000px]:w-[80%]    w-full  h-full object-contain flex flex-col gap-8 justify-center p-6  ">
        <h1
          className={twMerge(
            ` ${headingColor} comic-style-font  text-4xl font-bold   origin-center`
          )}
        >
          Character{" "}
          <span
            className={twMerge(
              ` ${nameBg} inline-block character-name-style tracking-widest  rounded-md px-3 py-2 text-white shadow-xl text-sm font-semibold`
            )}
          >
            {characterName}
          </span>
        </h1>
        <h1
          className={twMerge(
            ` ${headingColor} comic-style-font max-md:text-lg  text-4xl font-bold`
          )}
        >
          <span>''</span> {dialog} <span>,,</span>
        </h1>
        <div className="  p-9 rounded-lg shadow-xl drop-shadow-xl bg-white">
          <p className="  line-clamp-4  overflow-hidden text-pretty   ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum
            fugiat voluptates deleniti nostrum suscipit, aut iure incidunt
            itaque error dolore sequi sint culpa consequuntur id possimus eius
            eos esse. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quaerat provident nisi totam aperiam inventore pariatur, eligendi
            ut, quo similique animi distinctio nostrum obcaecati possimus modi
            eum! Ut accusamus in facere!
          </p>
        </div>

        <button className=" bg-green-500 text-white  w-fit p-3 text-lg  font-semibold rounded-md shadow-xl">
          More Details
        </button>
      </div>
      <img
        className=" max-[700px]:hidden w-96   object-contain object-right-bottom"
        src={image}
      />
    </div>
  );
}

function LandingPage() {
  const [navbar, setNavBar] = useState(null);
  function handleScroll(e) {
    console.log(window.scrollY);
    if (window.scrollY <= 100) {
      navbar.current.classList.remove("bg-transparent");
      navbar.current.classList.remove("text-black");
      navbar.current.classList.remove('shadow-xl')


    } else {
      navbar.current.classList.add("bg-transparent");
      navbar.current.classList.add("text-black");
      navbar.current.classList.add('shadow-xl')
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbar]);
  return (
    <>
      <NavBar setNavBar={setNavBar} />
      {data.map((curr) => (
        <FirstComponent
          image={curr.image}
          characterName={curr.name}
          dialog={curr.dialog}
          bgColor={curr.bgColor}
          headingColor={curr.textColor}
          nameBg={curr.nameBg}
        />
      ))}
      <MarvelUniverse />
    </>
  );
}
export default LandingPage;
