import React from "react";

type UserOverviewProps = {
  username: string;
  email: string;
  joined: string;
  plan: string;
  profilePicture: string;
};
// User Overview Component
const UserOverview: React.FC<UserOverviewProps> = ({
  username,
  email,
  joined,
  plan,
  profilePicture,
}) => (
  <div className=" bg-white p-6 rounded-lg shadow-md flex justify-between items-center h-fit">
    {/* Profile Picture */}
    <div className="flex items-center space-x-4">
      <img
        src={profilePicture}
        alt={`${username}'s profile`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-700">{username}</h2>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>

    {/* User Info */}
    <div className="space-y-2 flex flex-col justify-center">
      <p>
        <span className="font-semibold text-gray-600">Joined: </span>
        {joined}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Plan: </span>
        {plan}
      </p>
    </div>
  </div>
);

// Array of users with static data
const users = [
  {
    username: "JohnDoe",
    email: "johndoe@example.com",
    joined: "Jan 15, 2023",
    plan: "Pro Plan",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    username: "JaneSmith",
    email: "janesmith@example.com",
    joined: "Feb 12, 2023",
    plan: "Free Plan",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    username: "MichaelBrown",
    email: "michaelbrown@example.com",
    joined: "Mar 9, 2023",
    plan: "Premium Plan",
    profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    username: "EmilyWhite",
    email: "emilywhite@example.com",
    joined: "Apr 7, 2023",
    plan: "Pro Plan",
    profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    username: "JaneSmith",
    email: "janesmith@example.com",
    joined: "Feb 12, 2023",
    plan: "Free Plan",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    username: "MichaelBrown",
    email: "michaelbrown@example.com",
    joined: "Mar 9, 2023",
    plan: "Premium Plan",
    profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    username: "EmilyWhite",
    email: "emilywhite@example.com",
    joined: "Apr 7, 2023",
    plan: "Pro Plan",
    profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export const UserOverviewCard = () => {
  return (
    <div className="grid grid-cols-1 gap-3 overflow-auto h-full p-2">
      {users.map((user, index) => (
        <UserOverview
          key={index}
          username={user.username}
          email={user.email}
          joined={user.joined}
          plan={user.plan}
          profilePicture={user.profilePicture}
        />
      ))}
    </div>
  );
};
