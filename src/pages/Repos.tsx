import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RepoProps } from '../types/repo';

const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)

    useEffect(() => {
       const loadRepos = async function(username: string) {
           const res = await fetch(`https://api.github.com/users/${username}/repos`);

           const data = await res.json()

        //    setRepos(...repos, data)
       setRepos(data)
       };

      if(username){
          loadRepos(username);
      }
    }, [])
    return (
        <>
            <h3 className="text-white">Explore os repositórios do usuário</h3>
            {repos && repos.length === 0 && <p className="text-red-500">não há repositórios...</p>}
            {repos && repos.length > 0 && (
                <div>
                    <ul>
                    {repos.map((r: RepoProps) => (
                        <li className="text-white">
                            <p>{r.name}</p>
                            <p>{r.html_url}</p>
                            <hr></hr>
                        </li>
                       
                    ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Repos