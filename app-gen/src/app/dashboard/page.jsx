"use client";

import {
  Suspense,
  useEffect,
  useState,
} from "react";

import Sidebar
from "@/components/layout/Sidebar";

import Topbar
from "@/components/layout/Topbar";

import {

  Plus,

  Trash2,

  X,

} from "lucide-react";

export default function DashboardPage() {

  return (

    <Suspense
      fallback={null}
    >

      <DashboardContent />

    </Suspense>
  );
}

function DashboardContent() {

  function formatProjectDate(
    createdAt
  ) {

    if (!createdAt) {

      return "Created date unavailable";
    }

    const createdDate =
      new Date(createdAt);

    if (
      Number.isNaN(
        createdDate.getTime()
      )
    ) {

      return "Created date unavailable";
    }

    const now =
      new Date();

    const diffMs =
      now.getTime() -
      createdDate.getTime();

    const diffDays =
      Math.floor(
        diffMs /
        (1000 * 60 * 60 * 24)
      );

    if (diffDays === 0) {

      return "Created today";
    }

    if (diffDays === 1) {

      return "Created yesterday";
    }

    if (diffDays < 7) {

      return `Created ${diffDays} days ago`;
    }

    return `Created ${createdDate.toLocaleDateString()}`;
  }

  /*
    STATE
  */

  const [
    projects,
    setProjects,
  ] = useState([]);

  const [
    showModal,
    setShowModal,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    deleteTarget,
    setDeleteTarget,
  ] = useState(null);

  const [
    deleting,
    setDeleting,
  ] = useState(false);

  const [
    form,
    setForm,
  ] = useState({

    name: "",

    description: "",
  });

  /*
    FETCH PROJECTS
  */

  async function fetchProjects() {

    try {

      const response =
        await fetch(
          "/api/projects"
        );

      const data =
        await response.json();

      if (
        data.success
      ) {

        setProjects(
          data.data || []
        );
      }

    } catch (error) {

      console.error(error);
    }
  }

  /*
    LOAD
  */

  useEffect(() => {

    Promise.resolve()
      .then(fetchProjects);

  }, []);

  /*
    CREATE PROJECT
  */

  async function createProject() {

    if (!form.name)
      return;

    try {

      setLoading(true);

      const response =
        await fetch(
          "/api/projects",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              form
            ),
          }
        );

      const data =
        await response.json();

      if (!data.success) {

        console.log(data);

        alert(
          data.message ||
          "Project creation failed"
        );

        return;
      }

      const project =
        data.data;

      /*
        UPDATE UI
      */

      setProjects([
        project,
        ...projects,
      ]);

      /*
        RESET
      */

      setForm({

        name: "",

        description: "",
      });

      setShowModal(false);

      /*
        REDIRECT
      */

      window.location.href =

        `/builder?projectId=${project.id}`;

    } catch (error) {

      console.error(error);

      alert(
        "Failed to create project"
      );

    } finally {

      setLoading(false);
    }
  }

  /*
    DELETE PROJECT
  */

  async function deleteProject() {

    if (!deleteTarget) {

      return;
    }

    try {

      setDeleting(true);

      const response =
        await fetch(
          `/api/projects/${deleteTarget.id}`,
          {
            method: "DELETE",
          }
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {

        alert(
          data.message ||
          "Project delete failed"
        );

        return;
      }

      setProjects(
        (currentProjects) =>
          currentProjects.filter(
            (project) =>
              project.id !==
              deleteTarget.id
          )
      );

      setDeleteTarget(null);

    } catch (error) {

      console.error(error);

      alert(
        "Project delete failed"
      );

    } finally {

      setDeleting(false);
    }
  }

  return (

    <main
      className="
        flex
        min-h-screen
        bg-[#050505]
        text-white
      "
    >

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          {/* HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-6
            "
          >

            <div>

              <h1
                className="
                  text-6xl
                  font-bold
                "
              >
                Projects
              </h1>

              <p
                className="
                  text-zinc-500
                  mt-4
                  text-lg
                "
              >
                Manage generated AI
                runtime applications
              </p>

            </div>

            <button

              onClick={() =>
                setShowModal(true)
              }

              className="
                h-[72px]
                px-8
                rounded-3xl
                bg-cyan-400
                text-black
                text-xl
                font-semibold
                flex
                items-center
                gap-3
              "
            >

              <Plus size={24} />

              New Project

            </button>

          </div>

          {/* PROJECTS */}

          <div
            className="
              mt-12
            "
          >

            {
              projects.length === 0 ? (

                <div
                  onClick={() =>
                    setShowModal(true)
                  }
                  className="
                    rounded-3xl
                    border
                    border-dashed
                    border-cyan-400/20
                    bg-cyan-400/5
                    min-h-[420px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-12
                    cursor-pointer
                    hover:border-cyan-400/40
                    transition
                  "
                >

                  <div
                    className="
                      w-24
                      h-24
                      rounded-3xl
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      flex
                      items-center
                      justify-center
                      text-cyan-400
                      text-5xl
                    "
                  >
                    +
                  </div>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-8
                    "
                  >
                    No Projects Yet
                  </h2>

                  <p
                    className="
                      text-zinc-500
                      mt-4
                      max-w-xl
                      text-lg
                    "
                  >
                    Create your first
                    runtime project to
                    begin generating
                    relational databases,
                    runtime entities,
                    analytics,
                    and PostgreSQL tables
                    from uploaded JSON.
                  </p>


                </div>

              ) : (

                <div
                  className="
                    grid
                    grid-cols-1
                    xl:grid-cols-2
                    gap-8
                  "
                >

                  {
                    projects.map(
                      (project) => (

                        <div
                          key={project.id}

                          onClick={() => {

                            window.location.href =

                              `/builder?projectId=${project.id}`;
                          }}

                          className="
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            p-8
                            cursor-pointer
                            hover:border-cyan-400/30
                            transition
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              mb-8
                            "
                          >

                            <div
                              className="
                                w-16
                                h-16
                                rounded-3xl
                                bg-cyan-400/10
                                border
                                border-cyan-400/20
                                flex
                                items-center
                                justify-center
                                text-cyan-400
                                text-2xl
                              "
                            >
                              ⬢
                            </div>

                            <div
                              className="
                                flex
                                items-center
                                gap-3
                              "
                            >

                              <div
                                className="
                                  px-4
                                  py-2
                                  rounded-2xl
                                  bg-green-500/10
                                  border
                                  border-green-500/20
                                  text-green-400
                                  text-sm
                                "
                              >
                                Active
                              </div>

                              <button
                                type="button"
                                onClick={(event) => {

                                  event.stopPropagation();
                                  setDeleteTarget(
                                    project
                                  );
                                }}
                                className="
                                  w-11
                                  h-11
                                  rounded-2xl
                                  border
                                  border-red-500/20
                                  bg-red-500/10
                                  text-red-300
                                  flex
                                  items-center
                                  justify-center
                                  hover:bg-red-500/20
                                  transition
                                "
                                aria-label={`Delete ${project.name}`}
                              >
                                <Trash2 size={18} />
                              </button>

                            </div>

                          </div>

                          <h2
                            className="
                              text-3xl
                              font-bold
                            "
                          >
                            {
                              project.name
                            }
                          </h2>

                          <p
                            className="
                              text-zinc-500
                              mt-4
                              min-h-[48px]
                            "
                          >
                            {
                              project.description ||

                              "Runtime relational system"
                            }
                          </p>

                          <div
                            className="
                              mt-8
                              flex
                              items-center
                              justify-between
                              text-zinc-500
                              text-sm
                            "
                          >

                            <span>
                              {
                                formatProjectDate(
                                  project.createdAt
                                )
                              }
                            </span>

                            <span>
                              →
                            </span>

                          </div>

                        </div>
                      )
                    )
                  }

                </div>
              )
            }

          </div>

        </div>

      </div>

      {/* MODAL */}

      {
        showModal && (

          <div
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              flex
              items-center
              justify-center
              z-50
            "
          >

            <div
              className="
                w-full
                max-w-xl
                rounded-3xl
                border
                border-white/10
                bg-[#090909]
                p-8
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-8
                "
              >

                <div>

                  <h2
                    className="
                      text-4xl
                      font-bold
                    "
                  >
                    Create Project
                  </h2>

                  <p
                    className="
                      text-zinc-500
                      mt-2
                    "
                  >
                    Initialize a new
                    relational runtime
                    workspace
                  </p>

                </div>

                <button

                  onClick={() =>
                    setShowModal(false)
                  }

                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                  "
                >

                  <X size={20} />

                </button>

              </div>

              {/* FORM */}

              <div className="space-y-6">

                <div>

                  <label
                    className="
                      block
                      text-sm
                      text-zinc-400
                      mb-3
                    "
                  >
                    Project Name
                  </label>

                  <input

                    value={
                      form.name
                    }

                    onChange={(e) =>

                      setForm({

                        ...form,

                        name:
                          e.target
                            .value,
                      })
                    }

                    placeholder="
                      Enter project name
                    "

                    className="
                      w-full
                      h-[60px]
                      rounded-2xl
                      bg-black/40
                      border
                      border-white/10
                      px-5
                      outline-none
                    "
                  />

                </div>

                <div>

                  <label
                    className="
                      block
                      text-sm
                      text-zinc-400
                      mb-3
                    "
                  >
                    Description
                  </label>

                  <textarea

                    value={
                      form.description
                    }

                    onChange={(e) =>

                      setForm({

                        ...form,

                        description:
                          e.target
                            .value,
                      })
                    }

                    rows={5}

                    placeholder="
                      Describe your runtime system
                    "

                    className="
                      w-full
                      rounded-2xl
                      bg-black/40
                      border
                      border-white/10
                      px-5
                      py-4
                      outline-none
                      resize-none
                    "
                  />

                </div>

                <button

                  onClick={
                    createProject
                  }

                  disabled={loading}

                  className="
                    w-full
                    h-[64px]
                    rounded-2xl
                    bg-cyan-400
                    text-black
                    text-lg
                    font-semibold
                    mt-4
                  "
                >

                  {
                    loading

                      ? "Creating Project..."

                      : "Create Runtime Project"
                  }

                </button>

              </div>

            </div>

          </div>
        )
      }

      {/* DELETE CONFIRM MODAL */}

      {
        deleteTarget && (

          <div
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              flex
              items-center
              justify-center
              z-50
              px-4
            "
          >

            <div
              className="
                w-full
                max-w-md
                rounded-3xl
                border
                border-white/10
                bg-[#090909]
                p-8
                shadow-2xl
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-red-500/10
                  border
                  border-red-500/20
                  text-red-300
                  flex
                  items-center
                  justify-center
                "
              >
                <Trash2 size={24} />
              </div>

              <h2
                className="
                  text-2xl
                  font-bold
                  mt-6
                "
              >
                Delete project?
              </h2>

              <p
                className="
                  text-zinc-500
                  mt-3
                  leading-relaxed
                "
              >
                This will permanently delete
                {` ${deleteTarget.name} `}
                and its uploads/runtime data.
              </p>

              <div
                className="
                  mt-7
                  flex
                  justify-end
                  gap-3
                "
              >

                <button
                  type="button"
                  onClick={() =>
                    setDeleteTarget(null)
                  }
                  disabled={deleting}
                  className="
                    h-12
                    px-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    text-white
                    hover:bg-white/10
                    transition
                    disabled:opacity-50
                  "
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={deleteProject}
                  disabled={deleting}
                  className="
                    h-12
                    px-5
                    rounded-2xl
                    bg-red-500
                    text-white
                    font-semibold
                    hover:bg-red-400
                    transition
                    disabled:opacity-50
                  "
                >
                  {
                    deleting
                      ? "Deleting..."
                      : "Delete"
                  }
                </button>

              </div>

            </div>

          </div>
        )
      }

    </main>
  );
}
