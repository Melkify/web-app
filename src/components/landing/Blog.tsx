import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "نحوه دریافت توکن از بات‌فادر",
    href: "/blog/articles/1",
    description: "",
    imageUrl: "/images/landing/Botfather-Telegram.webp",
    date: "Mar 16, 2020",
    datetime: "۱۴۰۳-۰۳-۰۱",
  },
  {
    id: 2,
    title: "نمونه کامل ساخت کسب‌وکار جدید",
    href: "/blog/articles/۲",
    description: "",
    imageUrl: "/images/landing/Botfather-Telegram.webp",
    date: "Mar 16, 2020",
    datetime: "۱۴۰۳-۰۳-۲۱",
  },
  // More posts...
];

export default function Blog() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.id}
          onClick={() => navigate(`/blog`)}
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
        >
          <img
            src={post.imageUrl}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time dateTime={post.datetime} className="mr-8">
              {post.datetime}
            </time>
            <div className="-ml-4 flex items-center gap-x-4">
              <svg
                viewBox="0 0 2 2"
                className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
            </div>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            <a href={post.href}>{post.title}</a>
          </h3>
        </article>
      ))}
    </div>
  );
}
