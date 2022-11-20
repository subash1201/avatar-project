import { BiRun } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";
import { TbFriends } from "react-icons/tb";
import { BsEmojiSmileFill } from "react-icons/bs";

const AvatarCards = ({ avatar }) => {
  const backgroundHandler = () => {
    let colors = [
      "#FAD4D4",
      "#B3FFAE",
      "#FFD6EC",
      "#B9E0FF",
      "#FFE6F7",
      "#FBFACD"
    ];
    let random = Math.floor(Math.random() * 6);
    return colors[random];
  };

  const categoryHandler = (type) => {
    if (type === "adventurer") {
      return <BiRun />;
    } else if (type === "micah") {
      return <GiMicrophone />;
    } else if (type === "openpeeps") {
      return <TbFriends />;
    } else if (type === "croodles") {
      return <BsEmojiSmileFill />;
    }
  };
  return (
    <div className="avatar-card">
      <img
        style={{ backgroundColor: backgroundHandler() }}
        className="avatar-image"
        src={avatar.avatar}
        alt={avatar.name}
      />
      <div className="avatar-info">
        <h2>{avatar.name}</h2>
        <h1>{categoryHandler(avatar.type)}</h1>
      </div>
    </div>
  );
};

export default AvatarCards;
