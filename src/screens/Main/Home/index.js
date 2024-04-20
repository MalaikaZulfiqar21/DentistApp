import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../components/Layout";
import { className } from "../../../global-styles";
import HomeHeader from "./molecules/HomeHeader";
import SearchBar from "./molecules/SearchBar";
import SpecialistCard from "./molecules/SpecialistCard";
import AvailableDrCard from "./molecules/AvailableDrCard";
import CategoryCard from "./molecules/CategoryCard";
import Icon from "react-native-vector-icons/Entypo";
import { COLORS } from "../../../utils/config";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import Geolocation from "react-native-geolocation-service";
import {
  setUserLocation,
  locationReceived,
} from "../../../store/reducer/userLocationSlice";
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    console.log("granted", granted);
    if (granted === "granted") {
      console.log("You can use Geolocation");
      return true;
    } else {
      console.log("You cannot use Geolocation");
      return false;
    }
  } catch (err) {
    return false;
  }
};
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getLocation();
  }, []);
  const [location, setLocation] = useState(false);
  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then((res) => {
      console.log("res is:", res);
      if (res) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            dispatch(
              setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              })
            );
            setLocation(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
    console.log(location);
  };
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const data = [
    {
      name: "Dr. Kawasar",
      img: require("../../../assets/images/pngs/dr1.png"),
      avl_date: "Jun 25-March 28",
    },
    {
      name: "Dr. Misbah",
      img: require("../../../assets/images/pngs/dr2.png"),
      avl_date: "July 25-March 28",
    },
    {
      name: "Dr. Ali",
      img: require("../../../assets/images/pngs/dr3.png"),
      avl_date: "Jun 25-March 28",
    },
  ];
  const categories = [
    {
      img: require("../../../assets/images/pngs/doctor.png"),
      cat_name: "Doctor",
    },
    {
      img: require("../../../assets/images/pngs/booking.png"),
      cat_name: "Appointment",
    },
    {
      img: require("../../../assets/images/pngs/drugs.png"),
      cat_name: "Medicine",
    },
  ];
  return (
    <Layout
      isSafeAreaView={true}
      showNavBar={false}
      containerStyle={className("bg-white")}
    >
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={className("mb-2 ml-4")}
      >
        <Icon name="menu" color={COLORS.darkGray} size={20} />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={className("mb-4 flex-1 flex-grow")}
      >
        <View style={className("mx-4")}>
          <HomeHeader />
          <SearchBar />
        </View>
        <Text style={className("text-14 text-dark-grey text-semi ml-4")}>
          Specialist
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(_, index) => {
              index.toString();
            }}
            renderItem={({ item, index }) => (
              <SpecialistCard
                img={item.img}
                name={item.name}
                isFirst={index === 0}
                isLast={index === data.length - 1}
              />
            )}
          />
        </View>
        <Text style={className("text-14 text-dark-grey text-semi ml-4")}>
          Categories
        </Text>
        <View style={className("align-center")}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(_, index) => {
              index.toString();
            }}
            renderItem={({ item, index }) => (
              <CategoryCard img={item.img} cat_name={item.cat_name} />
            )}
          />
        </View>

        <Text style={className("text-14 text-dark-grey text-semi ml-4")}>
          Availabe doctor
        </Text>
        <View style={className("mb-4")}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(_, index) => {
              index.toString();
            }}
            renderItem={({ item, index }) => (
              <AvailableDrCard
                img={item.img}
                name={item.name}
                isFirst={index === 0}
                isLast={index === data.length - 1}
                date={item.avl_date}
              />
            )}
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
