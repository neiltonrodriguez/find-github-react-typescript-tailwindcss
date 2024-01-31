import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

const User = ({
  avatar_url,
  html_url,
  bio,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className="bg-gray-700 rounded-lg mt-5 py-5 flex flex-col items-center justify-center">
      <img
        className="hover:scale-105 duration-200 w-60 rounded-full border-2 border-orange-800 shadow-md"
        src={avatar_url}
        alt={login}
      />
      <div className="flex gap-6 flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-bold">{login}</h2>
        <p className="text-gray-500 text-sm max-w-sm text-center">{bio}</p>
        {location && (
          <div className="flex text-orange-800 text-2xl items-center justify-center">
            <MdLocationPin />
            <span>{location}</span>
          </div>
        )}
        <div className="flex gap-5">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white">Seguidores:</p>
            <p className="text-orange-800  bg-white w-16 rounded-md flex items-center justify-center font-bold ml-2">
              {followers}
            </p>
          </div>
          <div className="border-e-2"></div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-white">Seguindo:</p>
            <p className="text-orange-800 bg-white w-16 flex rounded-md items-center justify-center font-bold ml-2">
              {following}
            </p>
          </div>
        </div>
        <div className="mt-5 text-white">
          <a
            className="bg-orange-800 flex items-center justify-center h-8 w-32 hover:bg-orange-900 duration-200  rounded-md "
            href={html_url}
          >
            Ver mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
