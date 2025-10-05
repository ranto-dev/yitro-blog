import { useState, useEffect } from "react";
import {
  FaCalendar,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import selectRandomObjects from "../utils/selectRandomObjects";
import { FaCheckCircle } from "react-icons/fa";

function BlogDetails({ blogs }) {
  const { blogId } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(blogId));
  const [randomBlogs, setRandomBlogs] = useState([]);
  const NUMBER_OF_BLOGS = 4;

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const count = Math.min(NUMBER_OF_BLOGS, blogs.length);
      const selected = selectRandomObjects(blogs, count);
      setRandomBlogs(selected);
    }
  }, [blogs]);

  return (
    <div className="flex justify-center gap-4 p-8">
      <div className="w-full">
        <div className="w-full">
          <img
            src={blog.image}
            alt={"image du publication n°" + blog.id}
            className={`w-full h-[500px] rounded-xl object-cover`}
          />
        </div>
        <div className="space-y-4 p-4">
          <div className="flex justify-start items-center gap-4">
            <p className="text-4xl">{blog.title}</p>
            <p className="text-xl">{"⭐".repeat(blog.star)}</p>
          </div>
          <div className="flex flex-col items-start space-y-8">
            <p className="flex gap-2 justify-center items-center text-gray-500">
              <FaCalendar /> {blog.date}
            </p>
            <div className="space-y-4">
              <p className="text-black/60 text-justify">{blog.content}</p>
              <p className="text-black/60 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet sit voluptate, temporibus incidunt fugiat ipsa
                accusantium non deserunt sunt recusandae ducimus eos deleniti
                cum a maxime labore unde similique enim! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Eveniet sit voluptate,
                temporibus incidunt fugiat ipsa accusantium non deserunt sunt
                recusandae ducimus eos deleniti cum a maxime labore unde
                similique enim!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-5 flex justify-center items-center gap-4">
          {blog.image_annexe.map((image, index) => {
            return (
              <img
                className="w-[100%] h-[250px] object-cover rounded-xl "
                src={image}
                alt={"image annexe n° " + index}
              />
            );
          })}
        </div>
        <div className="space-y-4 mt-8">
          <h1 className="text-2xl">Encore plus sur nous</h1>
          <p className="text-sm text-black/60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            provident non nobis laborum! Laboriosam eaque repellat voluptate
            dolores est facilis, mollitia sint ea ratione non vitae in odio enim
            iste?
          </p>
          <div className="flex gap-8 justify-between items-center">
            <div>
              <button className="bg-blue-500 text-white font-semibold rounded-full p-4 box-border hover:bg-blue-600 hover:-translate-y-2 duration-150 ease-in ">
                Parlons de vos projets
              </button>
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="bg-amber-500/10 text-amber-500 rounded-full p-2 hover:bg-amber-500/40"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="bg-blue-500/10 text-blue-500 rounded-full p-2 hover:bg-blue-500/40"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                className="bg-green-500/10 text-green-500 rounded-full p-2 hover:bg-green-500/40"
              >
                {" "}
                <FaInstagram />
              </a>
              <a href="" className="bg-black/10 text-black rounded-full p-2 hover:bg-black/40">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[40%] flex flex-col gap-8">
        <aside className="space-y-4">
          <h1 className="text-2xl">Catégories</h1>
          <ul className="flex flex-col gap-2 text-sm">
            {blog.categories.map((categorie) => {
              return (
                <li className="flex justify-start items-center gap-2">
                  {" "}
                  <FaCheckCircle /> {categorie}
                </li>
              );
            })}
          </ul>
        </aside>

        <aside className="space-y-4">
          <div className="text-start">
            <h1 className="text-2xl">Autres publications</h1>
            <p className="text-sm">
              Naviger encore plus loin dans nos pub et nous connaître d'avantage
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {randomBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex justify-start items-center gap-2"
              >
                <div className="w-full">
                  <img
                    src={blog.image}
                    className="w-full h-24 object-cover rounded-lg"
                    alt={"image de la publication n° " + blog.id}
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-xl">{blog.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogDetails;
