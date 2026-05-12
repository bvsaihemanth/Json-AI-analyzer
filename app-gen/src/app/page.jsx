"use client";

import Link from "next/link";

import {
  ArrowRight,
  Database,
  Sparkles,
  GitBranch,
  BarChart3,
  Upload,
  Cpu,
  Mail,
} from "lucide-react";

export default function HomePage() {

  const features = [

    {
      title:
        "Relational Extraction",

      description:
        "Convert deeply nested JSON into normalized PostgreSQL-ready relational structures automatically.",

      icon: Database,
    },

    {
      title:
        "Relationship Intelligence",

      description:
        "Detect entity dependencies, foreign keys, and runtime relationships dynamically.",

      icon: GitBranch,
    },

    {
      title:
        "Runtime Analytics",

      description:
        "Generate runtime dashboards and analytics directly from uploaded JSON datasets.",

      icon: BarChart3,
    },

    {
      title:
        "AI Runtime Engine",

      description:
        "Transform arbitrary JSON into runtime database systems with live PostgreSQL.",

      icon: Cpu,
    },
  ];

  const workflow = [

    "Upload JSON",

    "Analyze Structure",

    "Generate Relations",

    "Create PostgreSQL Tables",

    "Populate Runtime Data",

    "Visualize Runtime",
  ];

  return (

    <main
      className="
        min-h-screen
        bg-[#050505]
        text-white
        overflow-hidden
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          fixed
          inset-0
          -z-10
        "
      >

        <div
          className="
            absolute
            top-0
            left-1/3
            w-[600px]
            h-[600px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

      </div>

      {/* NAVBAR */}

      <header
        className="
          sticky
          top-0
          z-50
          backdrop-blur-xl
          border-b
          border-white/5
          bg-black/20
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            h-[80px]
            flex
            items-center
            justify-between
          "
        >

          {/* LOGO */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-cyan-400/10
                border
                border-cyan-400/20
                flex
                items-center
                justify-center
                text-cyan-400
              "
            >

              <Database size={22} />

            </div>

            <div>

              <h1
                className="
                  text-xl
                  font-bold
                "
              >
                RuntimeForge
              </h1>

              <p
                className="
                  text-xs
                  text-zinc-500
                "
              >
                AI Runtime Engine
              </p>

            </div>

          </div>

          {/* NAV */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-10
              text-sm
              text-zinc-400
            "
          >

            <a
              href="#features"
              className="
                hover:text-white
                transition
              "
            >
              Features
            </a>

            <a
              href="#workflow"
              className="
                hover:text-white
                transition
              "
            >
              Workflow
            </a>

          </nav>

          {/* BUTTONS */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <Link
              href="/login"
              className="
                h-[46px]
                px-6
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                flex
                items-center
                justify-center
                text-sm
              "
            >
              Login
            </Link>

          </div>

        </div>

      </header>

      {/* HERO */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pt-28
          pb-24
        "
      >

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-20
            items-center
          "
        >

          {/* LEFT */}

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-cyan-400/10
                border
                border-cyan-400/20
                text-cyan-300
                text-sm
                mb-8
              "
            >

              <Sparkles size={16} />

              AI Runtime Infrastructure Platform

            </div>

            <h1
              className="
                text-6xl
                md:text-7xl
                font-black
                leading-[1]
                tracking-tight
              "
            >
              Transform
              <span className="text-cyan-400">
                {" "}Nested JSON
              </span>
              <br />
              Into Runtime
              Database Systems
            </h1>

            <p
              className="
                mt-8
                text-xl
                text-zinc-400
                leading-relaxed
                max-w-2xl
              "
            >
              Upload arbitrary JSON and automatically generate
              PostgreSQL schemas, runtime tables, entity relations,
              and analytics dashboards dynamically.
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-5
              "
            >

              <Link
                href="/login"
                className="
                  h-[60px]
                  px-8
                  rounded-2xl
                  bg-cyan-400
                  text-black
                  font-semibold
                  text-lg
                  flex
                  items-center
                  gap-3
                  hover:scale-[1.02]
                  transition
                "
              >

                Create Runtime

                <ArrowRight size={20} />

              </Link>

            </div>

            {/* STATS */}

            <div
              className="
                mt-16
                grid
                grid-cols-3
                gap-6
              "
            >

              {
                [

                  {
                    value: "10x",
                    label:
                      "Faster Runtime Generation",
                  },

                  {
                    value: "100%",
                    label:
                      "Automated Relation Extraction",
                  },

                  {
                    value: "AI",
                    label:
                      "Powered Runtime Intelligence",
                  },

                ].map(
                  (
                    stat,
                    index
                  ) => (

                    <div
                      key={index}
                    >

                      <h3
                        className="
                          text-4xl
                          font-bold
                          text-cyan-400
                        "
                      >
                        {
                          stat.value
                        }
                      </h3>

                      <p
                        className="
                          text-zinc-500
                          mt-2
                          text-sm
                        "
                      >
                        {
                          stat.label
                        }
                      </p>

                    </div>
                  )
                )
              }

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              relative
            "
          >

            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                overflow-hidden
                shadow-2xl
              "
            >

              {/* TOP */}

              <div
                className="
                  h-[70px]
                  border-b
                  border-white/10
                  flex
                  items-center
                  px-6
                  gap-3
                "
              >

                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />

              </div>

              {/* CONTENT */}

              <div className="p-8 space-y-8">

                {/* JSON */}

                <div
                  className="
                    rounded-3xl
                    bg-black/40
                    border
                    border-white/5
                    p-6
                    overflow-auto
                  "
                >

                  <p
                    className="
                      text-cyan-300
                      text-sm
                      mb-4
                    "
                  >
                    input.json
                  </p>

                  <pre
                    className="
                      text-zinc-300
                      text-sm
                      leading-7
                    "
                  >
{`{
  "hospital": {
    "departments": [
      {
        "patients": []
      }
    ]
  }
}`}
                  </pre>

                </div>

                {/* FLOW */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-4
                    text-sm
                    text-zinc-400
                  "
                >

                  <Upload
                    className="
                      text-cyan-400
                    "
                    size={18}
                  />

                  JSON Upload

                  <ArrowRight
                    size={16}
                  />

                  <GitBranch
                    className="
                      text-cyan-400
                    "
                    size={18}
                  />

                  Relations

                  <ArrowRight
                    size={16}
                  />

                  <Database
                    className="
                      text-cyan-400
                    "
                    size={18}
                  />

                  PostgreSQL

                </div>

                {/* TABLE */}

                <div
                  className="
                    rounded-3xl
                    overflow-hidden
                    border
                    border-white/10
                  "
                >

                  <table
                    className="
                      w-full
                      text-sm
                    "
                  >

                    <thead
                      className="
                        bg-white/5
                      "
                    >

                      <tr>

                        <th className="px-4 py-3 text-left text-zinc-400">
                          patient_id
                        </th>

                        <th className="px-4 py-3 text-left text-zinc-400">
                          name
                        </th>

                        <th className="px-4 py-3 text-left text-zinc-400">
                          age
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="border-t border-white/5">

                        <td className="px-4 py-3">
                          PAT201
                        </td>

                        <td className="px-4 py-3">
                          Arjun
                        </td>

                        <td className="px-4 py-3">
                          45
                        </td>

                      </tr>

                      <tr className="border-t border-white/5">

                        <td className="px-4 py-3">
                          PAT202
                        </td>

                        <td className="px-4 py-3">
                          Sneha
                        </td>

                        <td className="px-4 py-3">
                          32
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="
          max-w-7xl
          mx-auto
          px-6
          py-28
        "
      >

        <div className="mb-16">

          <h2
            className="
              text-5xl
              font-bold
            "
          >
            Runtime Infrastructure Features
          </h2>

          <p
            className="
              text-zinc-500
              mt-5
              text-lg
              max-w-3xl
            "
          >
            Powerful relational intelligence tools
            for transforming arbitrary JSON into
            runtime database systems.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {
            features.map(
              (
                feature,
                index
              ) => {

                const Icon =
                  feature.icon;

                return (

                  <div
                    key={index}

                    className="
                      rounded-[32px]
                      border
                      border-white/10
                      bg-white/5
                      p-10
                      hover:-translate-y-2
                      transition
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
                      "
                    >

                      <Icon size={28} />

                    </div>

                    <h3
                      className="
                        text-3xl
                        font-semibold
                        mt-8
                      "
                    >
                      {
                        feature.title
                      }
                    </h3>

                    <p
                      className="
                        text-zinc-500
                        mt-5
                        leading-8
                      "
                    >
                      {
                        feature.description
                      }
                    </p>

                  </div>
                );
              }
            )
          }

        </div>

      </section>

      {/* WORKFLOW */}

      <section
        id="workflow"
        className="
          max-w-7xl
          mx-auto
          px-6
          py-28
        "
      >

        <div className="mb-20">

          <h2
            className="
              text-5xl
              font-bold
            "
          >
            Runtime Workflow
          </h2>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            xl:grid-cols-6
            gap-6
          "
        >

          {
            workflow.map(
              (
                step,
                index
              ) => (

                <div
                  key={index}

                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    relative
                  "
                >

                  <div
                    className="
                      text-cyan-400
                      text-sm
                      font-semibold
                    "
                  >
                    STEP {index + 1}
                  </div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-semibold
                    "
                  >
                    {
                      step
                    }
                  </h3>

                </div>
              )
            )
          }

        </div>

      </section>

      {/* FOOTER */}

      <footer
        id="contact"
        className="
          border-t
          border-white/5
          mt-20
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-12
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >

          <div>

            <h3
              className="
                text-2xl
                font-bold
              "
            >
              RuntimeForge
            </h3>

            <p
              className="
                text-zinc-500
                mt-3
              "
            >
              AI-powered relational runtime infrastructure.
            </p>

          </div>

          <div
            className="
              flex
              items-center
              gap-4
              text-zinc-400
            "
          >

            <a
              href="https://www.linkedin.com/in/b-v-s-hemanth-reddy-5a88a32b8"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-2xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                hover:border-cyan-400/40
                hover:text-cyan-300
                transition
              "
              aria-label="LinkedIn profile"
            >
              <span
                className="
                  text-lg
                  font-bold
                  leading-none
                "
              >
                in
              </span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bvshreddy@mail.com"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-2xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                hover:border-cyan-400/40
                hover:text-cyan-300
                transition
              "
              aria-label="Email bvshreddy@mail.com"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
