import { createUser, createVinyl } from "../model/dbAdapter.js";

const initialUsers = async () => {
  let users = [
    {
      name: {
        first: "Jimmy",
        last: "Cohen",
      },
      phone: "0500000000",
      email: "jimmy@gmail.com",
      password: "$2a$10$Ek/zkVOxw.hbirTfNvpfQeBg79clkIXuweDi8zv4hN/vnDAMPqaSS",
      image: {
        alt: "default avatar",
      },
      address: {
        country: "Israel",
        city: "Tel Aviv",
        street: "HaShualim",
        houseNumber: 10,
        zip: 12345,
      },
      isAdmin: false,
    },
    {
      name: {
        first: "George",
        last: "Silverstone",
      },
      phone: "0500000000",
      email: "george@gmail.com",
      password: "$2a$10$Ek/zkVOxw.hbirTfNvpfQeBg79clkIXuweDi8zv4hN/vnDAMPqaSS",
      image: {
        alt: "default avatar",
      },
      address: {
        country: "Iceland",
        city: "Icecity",
        street: "Icestreet",
        houseNumber: 14,
        zip: 48985,
      },
      isAdmin: true,
    },
    {
      name: {
        first: "Robert",
        last: "Bandito",
      },
      phone: "0500000000",
      email: "robert@gmail.com",
      password: "$2a$10$Ek/zkVOxw.hbirTfNvpfQeBg79clkIXuweDi8zv4hN/vnDAMPqaSS",
      image: {
        alt: "default avatar",
      },
      address: {
        country: "Narnia",
        city: "Ashkelon",
        street: "Dokodemo",
        houseNumber: 32,
        zip: 49482,
      },
      isAdmin: false,
    },
  ];
  try {
    let userId = "";
    let count = 0;
    for (let user of users) {
      let userFromDB = await createUser(user);
      if (!user.isAdmin && count < 1) {
        userId = userFromDB._id;
        count++;
      }
    }
    return userId;
  } catch (err) {
    return "";
  }
};

const initialVinyls = async (userId) => {
  let vinyls = [
    {
      title: "COOOL",
      artistName: "Anri",
      label: "28K-70",
      genre: "Funk / Soul, Pop",
      yearReleased: 1984,
      vinylCondition: "Near Mint (NM or M-)",
      sleeveCondition: "Near Mint (NM or M-)",
      phone: "0507538944",
      email: "buyVinyls@gmail.com",
      price: 320,
      image: {
        url: "https://i.discogs.com/9MDsE1i2oujAIRNPdZz1XEVGQ0635ZpvWEnyG71Imv8/rs:fit/g:sm/q:90/h:595/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMjAy/NDEtMTQ2NDkzNTY5/Ny05NzAyLmpwZWc.jpeg",
        alt: "vinyl image",
      },
      user_id: userId,
    },
    {
      title: "Tasogare",
      artistName: "Mai Yamane",
      label: "HL-2005",
      genre: "Jazz, Rock, Funk / Soul, Pop",
      yearReleased: 1980,
      vinylCondition: "Very Good Plus (VG+)",
      sleeveCondition: "Near Mint (NM or M-)",
      phone: "0507538944",
      email: "buyVinyls@gmail.com",
      price: 200,
      image: {
        url: "https://i.discogs.com/70SAftln-R4BxzESb-5eExF5GzcM4RgWTSn7Uft5fIg/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2ODk1/NTQtMTQyNDY5MDQz/Ny04MzM3LmpwZWc.jpeg",
        alt: "vinyl image",
      },
      user_id: userId,
    },
    {
      title: "Sunshower",
      artistName: "Taeko Onuki",
      label: "GW-4029",
      genre: "Jazz, Funk / Soul, Pop",
      yearReleased: 1977,
      vinylCondition: "Mint (M)",
      sleeveCondition: "Mint (M)",
      phone: "0507538944",
      email: "buyVinyls@gmail.com",
      price: 500,
      image: {
        url: "https://i.discogs.com/bbK4AB3_r-wk-2hf5qiwseCQWfQHK3svHVVah2gIvOM/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NjQy/ODYtMTUyNjU3NTQ5/NC03NDMxLmpwZWc.jpeg",
        alt: "vinyl image",
      },
      user_id: userId,
    },
  ];
  try {
    for (let vinyl of vinyls) {
      await createVinyl(vinyl);
    }
  } catch (err) {
    return "";
  }
};
export { initialUsers, initialVinyls };
