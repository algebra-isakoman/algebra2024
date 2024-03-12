import Addresses from "./components/addresses";
import Colors from "./components/colors";
import Grid from "./components/grid";
import Header from "./components/header";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Section from "./components/section";
import { data } from "./data/global";
import { ProfileType } from "./types/global";

const profileData: ProfileType = {
  firstName: "Ivan",
  lastName: "Sakoman",
  age: 30,
  gender: true,
  longHair: false,
  favoriteColors: ["#c0392b", "#8e44ad", "#2980b9"],
  addresses: [
    {
      country: "Hrvatska",
      city: "Osijek",
      postCode: 31000,
      street: "Vukovarska 36",
    },
    {
      country: "Hrvatska",
      city: "Osijek",
      postCode: 31000,
      street: "Vijenac Ivana Meštrovića 1c",
    },
  ],
};

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Profile
          firstName={profileData.firstName}
          lastName={profileData.lastName}
          age={profileData.age}
          gender={profileData.gender}
          longHair={profileData.longHair}
        />
        <h1>Adrese</h1>
        <Grid marginBottom={4}>
          <Addresses addresses={profileData.addresses} />
        </Grid>
        <h1>Boje</h1>
        <Grid marginBottom={2} columns={3}>
          <Colors colors={profileData.favoriteColors} />
        </Grid>
        {data.map((section, index) => {
          return (
            <Section
              imgUrl={section.imgUrl}
              text={section.text}
              isReversed={index % 2 === 0 ? true : false}
            />
          );
        })}
      </Layout>
    </>
  );
};

export default App;
