import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_TEXT_MAP } from "@/constant";
import { Head, Link } from "@inertiajs/react";

const Projects = ({ auth, projects }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="py-3 px-2">ID</th>
                    <th className="py-3 px-2">Image</th>
                    <th className="py-3 px-2">Name</th>
                    <th className="py-3 px-2">Status</th>
                    <th className="py-3 px-2">Create Date</th>
                    <th className="py-3 px-2">Due Date</th>
                    <th className="py-3 px-2">Created by</th>
                    <th className="py-3 px-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project) => (
                    <tr
                      key={project.id}
                      className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-2 py-3">{project.id}</td>
                      <td className="px-2 py-3">
                        <img src={project.image_path} style={{ width: 60 }} />
                      </td>
                      <td className="px-2 py-3">{project.name}</td>
                      <td className="px-2 py-3">
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </td>
                      <td className="px-2 py-3">{project.created_at}</td>
                      <td className="px-2 py-3 text-nowrap">
                        {project.due_date}
                      </td>
                      <td className="px-2 py-3">{project.created_by.name}</td>
                      <td className="px-2 py-3">
                        <Link
                          href={route("projects.edit", project.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-2 py-3">
                        <Link
                          href={route("projects.destroy", project.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={projects.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Projects;
