import { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa6";
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
            <p className="text-black/60 text-justify">{blog.content}</p>
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
