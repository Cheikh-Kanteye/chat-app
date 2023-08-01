//@ts-ignore
import { useState } from "react";
import COLORS from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CHAT_LIST } from "@/utils/dummyData";
import moment from "moment";

//TODO: Fix the tabs navigation

type ChatItemProps = {
  url: string;
  name: string;
  lastMessage: string;
  release: Date;
  newMessages?: number;
};

const ChatItem = ({
  url,
  name,
  lastMessage,
  release,
  newMessages,
}: ChatItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 14,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: url }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "LatoBold",
            color: COLORS.darkGrey,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.lightGrey,
            fontFamily: "LatoRegular",
          }}
        >
          {lastMessage}
        </Text>
      </View>
      {newMessages ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: COLORS.grey,
              fontFamily: "LatoRegular",
            }}
          >
            New
          </Text>
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: COLORS.white,
                fontFamily: "LatoMedium",
              }}
            >
              {newMessages}
            </Text>
          </View>
        </View>
      ) : (
        <Text
          style={{
            fontSize: 10,
            color: COLORS.lightGrey,
            fontFamily: "LatoRegular",
          }}
        >
          {moment(release).fromNow()}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const Chat = () => {
  const [blur, isBlured] = useState(false);

  const SORTED_LIST = CHAT_LIST.sort(
    (a, b) => new Date(b.release).valueOf() - new Date(a.release).valueOf()
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <Ionicons
          name="search"
          size={22}
          color={blur ? COLORS.lightGrey : COLORS.darkGrey}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onFocus={() => isBlured(false)}
          onBlur={() => isBlured(true)}
          placeholderTextColor={COLORS.lightGrey}
        />
      </View>
      <FlatList
        data={SORTED_LIST}
        keyExtractor={(item) => `chat-${item.key}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingVertical: 28 }}
        renderItem={({ item, index }) => (
          <ChatItem
            url={item.image}
            lastMessage={item.lastMessage}
            name={item.name}
            release={item.release}
            newMessages={index < 3 ? 1 : undefined} //TODO: will make it dynamic
          />
        )}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
  searchInput: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    width: "100%",
    color: COLORS.darkGrey,
  },
});
