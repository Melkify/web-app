import React from "react";

const ProfilePicture = ({ fullName }: { fullName: string }) => {
  // Function to get initials
  const getInitials = (name: string) => {
    if (!name) return "";
    const nameArray = name.split(" ");
    const initials = nameArray.map((part) => part[0]).join(".");
    return initials;
  };

  const initials = getInitials(fullName);

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-xl font-bold uppercase text-white">
      {initials}
    </div>
  );
};

export default ProfilePicture;
