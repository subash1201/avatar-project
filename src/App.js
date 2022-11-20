import "./App.css";
import { useEffect, useState } from "react";
import AvatarCards from "./components/AvatarCards";

export default function App() {
  const [avatars, setAvatars] = useState([]);
  const [filterAvatars, setFilterAvatars] = useState(avatars);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    let componentMounted = true;
    const fetchApi = async () => {
      setLoading(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/subash1201/avataars/main/avataars.json"
      );
      if (componentMounted === true) {
        const data = await response.json();
        setAvatars(data);
        setFilterAvatars(data);
        setLoading(false);
      }
      return () => {
        componentMounted = false
      }
    };
    fetchApi();
  }, []);

  const filterAvatarHandler = (category) => {
    const updatedList = avatars.filter((cate) => cate.type === category);
    setFilterAvatars(updatedList);
  };

  const Loading = () => {
    return <div className="loader">

    </div>;
  }

  return (
    <div className="App">
        <div className="filter-buttons">
          <button type="button" onClick={() => setFilterAvatars(avatars)}>
            All
          </button>
          <button type="button" onClick={() => filterAvatarHandler("adventurer")}>
            Adventurer
          </button>
          <button type="button" onClick={() => filterAvatarHandler("micah")}>
            Micah
          </button>
          <button type="button" onClick={() => filterAvatarHandler("openpeeps")}>
            Openpeeps
          </button>
          <button type="button" onClick={() => filterAvatarHandler("croodles")}>
            Croodles
          </button>
        </div>
        {loading ? <Loading /> :
        <div className="avatar-container">
          {filterAvatars.map((avatar) => (
            <AvatarCards key={avatar.id} avatar={avatar} />
          ))}
        </div>
      }
    </div>
  );
}
