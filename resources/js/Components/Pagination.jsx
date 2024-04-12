import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          key={link.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-600 text-xs " +
            (link.active ? "bg-red-700 " : " ") +
            (!link.url
              ? "!text-gray-400 cursor-not-allowed "
              : "hover:text-yellow-600")
          }
          //   href={link.url || ""}
          //   key={link.label}
          //   className={
          //     "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
          //     (link.active ? "bg-red-700 " : " ") +
          //     (!link.url
          //       ? "!text-gray-500 cursor-not-allowed "
          //       : "hover:bg-red-400")
          //   }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
};

export default Pagination;