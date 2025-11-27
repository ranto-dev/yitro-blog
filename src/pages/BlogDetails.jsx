import { useState, useEffect } from "react";
import {
  FaCalendar,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import selectRandomObjects from "../utils/selectRandomObjects";
import { FaCheckCircle } from "react-icons/fa";
import Header from "../components/layout/header.jsx";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export const Month = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const BlogDetails = ({ blogs }) => {
  const { blogId } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(blogId));
  const [randomBlogs, setRandomBlogs] = useState([]);
  let formatedDate = new Date(blog.datePublication);

  const NUMBER_OF_BLOGS = 4;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const count = Math.min(NUMBER_OF_BLOGS, blogs.length);
      const selected = selectRandomObjects(blogs, count);
      setRandomBlogs(selected);
    }
  }, [blogs]);

  return (
    <>
      <Header />
      <div className="flex justify-center gap-4 p-8">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
            }}
            className="w-full"
          >
            <img
              src={blog.main_image_url}
              alt={blog.image_alt_text}
              className={`w-full h-[500px] rounded-xl object-cover`}
            />
          </motion.div>
          <div className="space-y-4 p-4">
            <div className="flex justify-start items-center gap-4">
              <p className="text-4xl">{blog.title}</p>
              {/* <p className="text-xl">{"⭐".repeat(blog.star)}</p> */}
            </div>
            <div className="flex flex-col items-start space-y-8">
              <p className="flex gap-2 justify-center items-center text-gray-500">
                <FaCalendar />{" "}
                {`${formatedDate.getDate()} ${
                  Month[formatedDate.getMonth()]
                } ${formatedDate.getFullYear()}`}
              </p>
              <div className="space-y-4">
                <p className="text-black/60 text-justify">
                  {blog.content_body}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <h1 className="text-2xl">Encore plus sur nous</h1>
            <p className="text-sm text-black/60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              provident non nobis laborum! Laboriosam eaque repellat voluptate
              dolores est facilis, mollitia sint ea ratione non vitae in odio
              enim iste?
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
                <a
                  href=""
                  className="bg-black/10 text-black rounded-full p-2 hover:bg-black/40"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] flex flex-col gap-8 overflow-hidden ">
          <motion.aside
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
            }}
            className="space-y-4 overflow-hidden"
          >
            <div className="flex justify-center">
              <Link
                to={"/articles"}
                className="rounded-full bg-blue-500 text-white p-4 hover:bg-blue-600 "
              >
                Voir tous les publication
              </Link>
            </div>
            <div>
              <h1 className="text-2xl">Catégories</h1>
            </div>
            <ul className="flex flex-col gap-2 text-sm pl-4">
              {blog.category.map((categorie, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start items-center gap-2"
                  >
                    <FaCheckCircle /> {categorie}
                  </li>
                );
              })}
            </ul>
          </motion.aside>

          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
            }}
            className="space-y-4 overflow-hidden"
          >
            <div className="text-start">
              <h1 className="text-2xl">Autres publications</h1>
              <p className="text-sm">
                Naviger encore plus loin dans nos pub et nous connaître
                d'avantage
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden">
              {randomBlogs.map((blog) => (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: (blog.id + 1) / 100,
                  }}
                  key={blog.id}
                  className="flex justify-start items-center gap-2 cursor-pointer"
                  onClick={() => handleNavigate(blog.id)}
                >
                  <div className="w-full">
                    <img
                      src={
                        "https://blog.yitro-consulting.com/static/" + blog.image
                      }
                      className="w-full h-24 object-cover rounded-lg"
                      alt={"image de la publication n° " + blog.id}
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl">{blog.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
