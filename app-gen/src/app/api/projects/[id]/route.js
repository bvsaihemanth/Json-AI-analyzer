import {
  prisma,
} from "@/lib/prisma";

import {
  getServerSession,
} from "next-auth";

import {
  authOptions,
} from "@/lib/auth";

import {
  rm,
} from "node:fs/promises";

import path
from "node:path";

export async function DELETE(
  request,
  context
) {

  try {

    const session =
      await getServerSession(
        authOptions
      );

    if (!session?.user?.id) {

      return Response.json(
        {
          success: false,
          message:
            "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const params =
      await context.params;

    const projectId =
      Number(params.id);

    if (!Number.isInteger(projectId)) {

      return Response.json(
        {
          success: false,
          message:
            "Invalid project id",
        },
        {
          status: 400,
        }
      );
    }

    const project =
      await prisma.project.findFirst({

        where: {
          id: projectId,
          userId:
            Number(session.user.id),
        },
      });

    if (!project) {

      return Response.json(
        {
          success: false,
          message:
            "Project not found",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.$transaction([

      prisma.projectUpload.deleteMany({
        where: {
          projectId,
        },
      }),

      prisma.runtimeData.deleteMany({
        where: {
          projectId,
        },
      }),

      prisma.project.delete({
        where: {
          id: projectId,
        },
      }),
    ]);

    try {

      await rm(
        path.join(
          process.cwd(),
          ".data",
          "projects",
          String(projectId)
        ),
        {
          recursive: true,
          force: true,
        }
      );

    } catch (error) {

      console.error(
        "PROJECT FILE DELETE ERROR:",
        error
      );
    }

    return Response.json({

      success: true,
    });

  } catch (error) {

    console.error(
      "PROJECT DELETE ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          error.message ||
          "Project delete failed",
      },
      {
        status: 500,
      }
    );
  }
}
