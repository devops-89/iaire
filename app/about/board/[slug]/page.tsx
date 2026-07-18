import React from "react";
import { Box } from "@mui/material";
import BoardMemberDetail from "@/components/layouts/about/board/BoardMemberDetail";
import {
  boardMembers,
  getBoardMemberBySlug,
} from "@/utils/boardMembers";
import { notFound } from "next/navigation";

interface BoardMemberPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  boardMembers.map((member) => ({ slug: member.slug }));

export const generateMetadata = async ({ params }: BoardMemberPageProps) => {
  const { slug } = await params;
  const member = getBoardMemberBySlug(slug);

  if (!member) {
    return { title: "Board Member Not Found | IAIRE" };
  }

  return {
    title: `${member.name} | IAIRE Board`,
    description: `${member.role} — ${member.title}`,
  };
};

const BoardMemberPage = async ({ params }: BoardMemberPageProps) => {
  const { slug } = await params;
  const member = getBoardMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <Box>
      <BoardMemberDetail member={member} />
    </Box>
  );
};

export default BoardMemberPage;
