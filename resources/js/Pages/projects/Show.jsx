import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constant";
import { Head } from "@inertiajs/react";

const Show = ({ project, auth, tasks }) => {
  console.log(tasks);
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {`Project ${project.name}`}
        </h2>
      }
    >
      <Head title={`Project ${project.name}`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="p6 text-gray-900 dark:text-gray-100">
                <div>
                  <img
                    src={project.image_path}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg  ">Project ID</label>
                    <p className="mt-1"> {project.id} </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg    ">
                      Project Name
                    </label>
                    <p className="mt-1"> {project.name} </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg    ">
                      Project Status
                    </label>
                    <p className="mt-2">
                      <span
                        className={
                          "px-1 py-2 rounded text-white " +
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-2">
                    <label className="font-bold text-lg    ">Created by</label>
                    <p className="mt-1"> {project.created_by.name} </p>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <label className="font-bold text-lg">Due Date</label>
                    <p> {project.due_date} </p>
                  </div>
                  <div className="mt-2">
                    <label className="font-bold text-lg">Created Date</label>
                    <p> {project.created_at} </p>
                  </div>
                  <div className="mt-2">
                    <label className="font-bold text-lg"> Updated by</label>
                    <p> {project.updated_by.name} </p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <label className="font-bold text-lg">Project Description</label>
                <p> {project.description} </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="p-6 text-gray-900 dark:text-gray-100"></div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
