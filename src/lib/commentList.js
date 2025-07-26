// this code is for who from fill up data
export const fromUser = async (data) => {
  const res = await fetch("http://localhost:8000/getcommentUser", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const commentGivers = await res.json();

  return commentGivers;
};

// this code is for comment user list
export const gettingList = async (data) => {
  const res = await fetch("http://localhost:8000/getcommentUser");
  const user = await res.json();

  return user;
};
