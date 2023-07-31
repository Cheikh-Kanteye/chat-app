import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import COLORS from "@/constants/Colors";
import { PROFILE_ACTIONS } from "@/utils/dummyData";
import { images } from "@/assets";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "@/config/firebaseConfig";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 18,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={{ ...styles.rowBetween, height: 80 }}>
        <View style={styles.row}>
          <View style={styles.profileContainer}>
            <Image
              source={images.default}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.usermail}>johndoe@gmail.com</Text>
          </View>
        </View>
        <Feather name="edit-3" size={22} color={COLORS.primary} />
      </View>
      <View style={{ gap: 24, paddingTop: 24 }}>
        {PROFILE_ACTIONS.map((item) => {
          return (
            <View style={styles.rowBetween} key={item.id}>
              <View style={styles.row}>
                <View
                  style={{
                    ...styles.iconContainer,
                    backgroundColor: COLORS.lightGray,
                  }}
                >
                  <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{ width: 18, height: 18, tintColor: COLORS.primary }}
                  />
                </View>
                <Text>{item.name}</Text>
              </View>
              <Entypo name="chevron-thin-right" size={18} color={COLORS.grey} />
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => signOut(FIREBASE_AUTH).catch((err) => console.log(err))}
        activeOpacity={0.6}
        style={styles.row}
      >
        <View
          style={{ ...styles.iconContainer, backgroundColor: COLORS.lightGray }}
        >
          <Image
            source={images.logout}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: COLORS.primary }}
          />
        </View>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.brightGray,
  },
  username: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.darkGrey,
  },
  usermail: {
    fontSize: 12,
    color: COLORS.grey,
  },
});
