type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <div className="w-96 bg-gray-700 h-48 mt-3 rounded-md p-5 items-center flex flex-col justify-center">
      <h2 className="text-white">Busca por um usuário</h2>
      <p className="text-white">conheça seus melhores repositórios</p>
      <div className="flex mt-5 items-center justify-center">
        <input
          type="text"
          className="rounded-md h-8 p-2 text-gray-400"
          placeholder="digite o nome do usuário aqui"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <button
          className="text-white ml-3 flex items-center justify-center m-auto rounded-md bg-orange-800 hover:bg-orange-900 duration-200 w-8 h-8 text-center"
          onClick={() => loadUser(userName)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
