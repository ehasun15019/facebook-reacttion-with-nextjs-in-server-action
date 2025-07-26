"use server";

export async function commentUp(fromData) {
  const commentData = {
    name: fromData.get("name"),
    email: fromData.get("email"),
    Comment: fromData.get("comment"),
  };
}
