import IconCheck from "../assets/check";
import IconX from "../assets/x";

type Props = {
  firstName: string;
  lastName: string;
  longHair: boolean;
  gender: boolean;
  age: number;
};

const Profile = ({ age, firstName, gender, lastName, longHair }: Props) => {
  return (
    <>
      <div className="profile">
        <img
          className="profile__img"
          src="https://source.unsplash.com/random/?man-portrait"
          alt="Profile image"
        />
        <div>
          <div className="profile__field">
            <span>{firstName}</span>
            <span>{lastName}</span>,&nbsp;<span>{age}</span>
          </div>
          <div className="profile__field">
            <span>duga kosa</span>
            <span>{longHair ? <IconCheck /> : <IconX />}</span>
          </div>
          <div className="profile__field">
            <span>gender</span>
            <span>{gender ? "👨" : "👩"}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
