import { images } from "@/assets";
import { faker } from "@faker-js/faker";
import { ImageSourcePropType } from "react-native";

//https://randomuser.me/api/portraits/women/26.jpg

const genderCategory = faker.helpers.shuffle(["women", "men"])[0];
const randomNumber = faker.number.int(60); // Generate a random number between 0 and 99

faker.seed(10);
export const CHAT_LIST = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.string.uuid(),
    image: `https://randomuser.me/api/portraits/${
      faker.helpers.shuffle(["women", "men"])[i % 2]
    }/${i + 1}.jpg`,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    email: faker.internet.email(),
    lastMessage: faker.lorem.words(),
    release: faker.date.anytime(),
  };
});

export const PROFILE_ACTIONS = [
  {
    id: "001",
    name: "Account",
    icon: images.key,
  },
  {
    id: "002",
    name: "Privacy",
    icon: images.lock,
  },
  {
    id: "003",
    name: "Chat",
    icon: images.chat,
  },
  {
    id: "004",
    name: "Notifications",
    icon: images.bell,
  },
  {
    id: "005",
    name: "App Language",
    icon: images.world,
  },
  {
    id: "006",
    name: "Help",
    icon: images.help,
  },
  {
    id: "007",
    name: "Invite A Friend",
    icon: images.friend,
  },
];
