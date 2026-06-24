"use client";
import { teacherController } from "@/app/api/teacherController";
import useSnackbar from "@/store/useSnackbar";
import { TEACHER_SELF_INNOVATION } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useCreateTeacherInnovation = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setSnackbar } = useSnackbar();

  const createTeacherInnovation = async (data: any, isDraft: boolean) => {
    setLoading(true);

    const payload: TEACHER_SELF_INNOVATION = {
      title: data.title,
      problemDescription: data.problemDescription,
      solution: data.solutionDescription,
      attomeyFinalTemplate: data.file,
    };
    if (isDraft) {
      payload.isDraft = true;
    }

    try {
      const res = await teacherController.innovationCreateByTeacher(payload);
      setSnackbar(
        res?.data?.message || "Innovation created successfully!",
        "success",
      );
      router.back();
    } catch (err: any) {
      console.log("Error creating teacher innovation:", err);
      const errMsg = err?.response?.data?.message || "Something went wrong";
      setSnackbar(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, createTeacherInnovation };
};
