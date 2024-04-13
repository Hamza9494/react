import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constant.jsx";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ auth, projects, queryParams = null }) => {
  const params = queryParams || {};
  console.log(params);

  const searchFieldChanged = (name, value) => {
    if (value) {
      params[name] = value;
    } else {
      delete params[name];
    }
    router.get(route("projects.index", params));
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === params.sort_field) {
      if (params.sort_direction === "asc") {
        params.sort_direction = "desc";
      } else {
        params.sort_direction = "asc";
      }
    } else {
      params.sort_field = name;
      params.sort_direction = "asc";
    }
    router.get(route("projects.index", params));
  };

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
                    <th
                      className="py-3 px-2"
                      onClick={(e) => sortChanged("id")}
                    >
                      ID
                    </th>
                    <th className="py-3 px-2">Image</th>
                    <th
                      className="py-3 px-2"
                      onClick={(e) => sortChanged("name")}
                    >
                      Name
                    </th>
                    <th
                      className="py-3 px-2"
                      onClick={(e) => sortChanged("status")}
                    >
                      Status
                    </th>
                    <th
                      className="py-3 px-2"
                      onClick={(e) => sortChanged("created_at")}
                    >
                      Create Date
                    </th>
                    <th
                      className="py-3 px-2"
                      onClick={(e) => sortChanged("due_date")}
                    >
                      Due Date
                    </th>
                    <th className="py-3 px-2">Created by</th>
                    <th className="py-3 px-2 text-right">Actions</th>
                  </tr>
                </thead>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="py-3 px-2"> </th>
                    <th className="py-3 px-2"> </th>
                    <th className="py-3 px-2">
                      <TextInput
                        defaultValue={params.name}
                        className="w-full"
                        placeholder="Project Name"
                        onBlur={(e) =>
                          searchFieldChanged("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                      />
                    </th>
                    <th className="py-3 px-2">
                      <SelectInput
                        defaultValue={params.status}
                        className="w-full"
                        onChange={(e) =>
                          searchFieldChanged("status", e.target.value)
                        }
                      >
                        <option value="">Select Status</option>
                        <option value="pending">Pending </option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </SelectInput>
                    </th>
                    <th className="py-3 px-2"> </th>
                    <th className="py-3 px-2"> </th>
                    <th className="py-3 px-2"> </th>
                    <th className="py-3 px-2 text-right"> </th>
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
                        <span
                          className={
                            "px-1 py-2 rounded text-white " +
                            PROJECT_STATUS_CLASS_MAP[project.status]
                          }
                        >
                          {PROJECT_STATUS_TEXT_MAP[project.status]}
                        </span>
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

export default Index;
