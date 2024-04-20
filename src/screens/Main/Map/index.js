import React, { useEffect, useState, useRef } from "react";
import Layout from "../../../components/Layout";
import { className } from "../../../global-styles";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from "react-native-maps";
import { useIsFocused } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import fonts from "../../../utils/fonts";
import { COLORS } from "../../../utils/config";
import CustomHeader from "../../../components/CustomHeader";
const Map = () => {
  const lat = useSelector((state) => state.locations.latitude);
  const lng = useSelector((state) => state.locations.longitude);
  const [address, setAddress] = useState("");
  const isFocused = useIsFocused();
  const mapRef = useRef(null);
  const circleRadius = 500;

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();
        const { address } = data;
        setAddress(
          `${address.road || ""}, ${address.city || ""}, ${
            address.state || ""
          }, ${address.country || ""}`
        );
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    fetchAddress();
  }, [lat, lng]);

  return (
    <Layout isSafeAreaView={false} showNavBar={false}>
      {isFocused ? (
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
      ) : null}

      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        rotateEnabled={true}
        zoomEnabled={true}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
        >
          <Image
            source={require("../../../assets/images/pngs/pin.png")}
            style={{
              width: 40,
              height: 40,
              tintColor: COLORS.primaryColor,
            }}
          />
        </Marker>

        <Circle
          center={{
            latitude: lat,
            longitude: lng,
          }}
          radius={circleRadius}
          fillColor="rgba(0,0,0,0.1)"
          strokeColor={COLORS.primaryColor}
          strokeWidth={2}
        />
      </MapView>

      <View style={styles.constainer}>
        <CustomHeader showLable={false} showIcon={true} />
        <View style={styles.infoContainer}>
          <View>
            <Image
              alt="Not find"
              source={require("../../../assets/images/pngs/user.jpg")}
              style={styles.userAvatar}
            />
          </View>
          <View>
            <Text style={styles.nameStyle}>John Doe</Text>
            <Text style={styles.addressStyle}>{address}</Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  constainer: {
    marginTop: getStatusBarHeight() + 20,
    paddingHorizontal: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 20,
  },
  userAvatar: {
    height: 50,
    width: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  nameStyle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: COLORS.black,
  },
  addressStyle: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    color: COLORS.black80,
  },
});
