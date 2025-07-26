"use server";

import { fromUser, gettingList } from "@/lib/commentList";
import { revalidatePath } from "next/cache";

export async function commentUp(fromData) {
  const commentData = {
    name: fromData.get("name"),
    email: fromData.get("email"),
    comment: fromData.get("comment"),
  };

  try {
    const endOfGivingComment = await fromUser(commentData);
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

// this code is for comment user list
export const lists = async () => {
  const allUsers = await gettingList();

  return allUsers;
};
