import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import "moment/locale/el";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/Authorization/LoginScreen";
import HomeScreen from "./src/HomeTab/HomeScreen";
import ReportsScreen from "./src/ReportsTab/ReportsScreen";
import HomeReportsScreen from "./src/HomeTab/HomeReportsScreen";
import CalendarScreen from "./src/HomeTab/CalendarScreen";
import TasksScreen from "./src/TasksTab/TasksScreen";
import SettingsScreen from "./src/InfoTab/SettingsScreen";
import ProfileScreen from "./src/Authorization/ProfileScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import InOutScreen from "./src/ReportsTab/InOutScreen";
import Scanner from "./src/ScannerAction/Scanner";
import SelectRequestScreen from "./src/ScannerAction/SelectRequestScreen";
import { theme } from "./components/theme";
import RequestListScreen from "./src/ScannerAction/RequestListScreen";
import TaskListScreen from "./src/ScannerAction/TaskListScreen";
import RequestListSuccess from "./src/ScannerAction/RequestListSuccess";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "Εργασίες":
      return "MaMoSS";
    case "Ημερολόγιο":
      return "Ημερολόγιο";
    case "Αναφορές":
      return "Αναφορές";
    default:
      return "MaMoSS";
  }
}

function getHeaderIcon(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "Εργασίες":
      return "menu";
    case "Ημερολόγιο":
      return "arrow-back-outline";
    case "Αναφορές":
      return "arrow-back-outline";
    default:
      return "menu";
  }
}

function getHeaderNav(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "Εργασίες":
      return "Προφίλ";
    case "Ημερολόγιο":
      return "Εργασίες";
    case "Αναφορές":
      return "Εργασίες";
    default:
      return "Προφίλ";
  }
}

function TopTabs() {
  return (
    <Top.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "none",
        },
      }}
    >
      <Top.Screen name="Εργασίες" component={HomeScreen} />
      <Top.Screen name="Ημερολόγιο" component={CalendarScreen} />
      <Top.Screen name="Αναφορές" component={HomeReportsScreen} />
    </Top.Navigator>
  );
}

function InfoTopTabs() {
  return (
    <Top.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "none",
        },
      }}
    >
      <Top.Screen name="Εκπαίδευση" component={SettingsScreen} />
      <Top.Screen name="Ανάθεση μηχανημάτων" component={SettingsScreen} />
      <Top.Screen name="Εμβολιασμοί / Εξετάσεις" component={SettingsScreen} />
    </Top.Navigator>
  );
}

function SelectTopTabs() {
  return (
    <Top.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "none",
        },
      }}
    >
      <Top.Screen name="Νέα αναφορά" component={RequestListScreen} />

      <Top.Screen name="Όλα εντάξει" component={RequestListScreen} />
      <Top.Screen name="Μη έλεγχος" component={RequestListScreen} />
      <Top.Screen name="Λίστα εργασιών" component={TaskListScreen} />
    </Top.Navigator>
  );
}

export default function App({ navigation }) {
  const [antonLoaded] = useFonts({
    Anton_400Regular,
  });

  if (antonLoaded) {
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={(props) => {
              //console.log(getFocusedRouteNameFromRoute(props.route));
              return {
                tabBarStyle: {
                  display:
                    getFocusedRouteNameFromRoute(props.route) ===
                      "Ημερολόγιο" ||
                    getFocusedRouteNameFromRoute(props.route) === "Αναφορές"
                      ? "none"
                      : "flex",
                },

                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
              };
            }}
          >
            <Tab.Screen
              name="Login"
              component={LoginScreen}
              options={({ navigation }) => ({
                tabBarStyle: { display: "none" },
                tabBarButton: (props) => null,
                tabBarVisible: false,
              })}
            />
            <Tab.Screen
              name="Aρχική"
              component={TopTabs}
              options={({ route, navigation }) => ({
                headerTitle: getHeaderTitle(route),
                headerLeft: () => (
                  <Ionicons
                    onPress={() => navigation.navigate(getHeaderNav(route))}
                    name={getHeaderIcon(route)}
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name={"home"} size={size} color={color} />
                ),
                tabBarActiveTintColor: `${theme.colors.ui.darkPrimary}`,
                tabBarInactiveTintColor: `#8b95b3`,
              })}
            />
            <Tab.Screen
              name="Αναφορές"
              component={ReportsScreen}
              options={({ navigation }) => ({
                headerTitle: "Λίστα Εργων",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() => navigation.navigate("Aρχική")}
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name={"md-bug"} size={size} color={color} />
                ),
                tabBarActiveTintColor: `${theme.colors.ui.darkPrimary}`,
                tabBarInactiveTintColor: `#8b95b3`,
              })}
            />
            <Tab.Screen
              name="Εργασίες1"
              component={TasksScreen}
              options={({ navigation }) => ({
                title: "Εργασίες",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() => navigation.navigate("Aρχική")}
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name={"md-calendar"} size={size} color={color} />
                ),
                tabBarActiveTintColor: `${theme.colors.ui.darkPrimary}`,
                tabBarInactiveTintColor: `#8b95b3`,
              })}
            />
            <Tab.Screen
              name="Πληροφορίες"
              component={InfoTopTabs}
              options={({ navigation }) => ({
                title: "Πληροφορίες",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() => navigation.navigate("Aρχική")}
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name={"information"} size={size} color={color} />
                ),
                tabBarActiveTintColor: `${theme.colors.ui.darkPrimary}`,
                tabBarInactiveTintColor: `#8b95b3`,
              })}
            />

            <Tab.Screen
              name="Προφίλ"
              component={ProfileScreen}
              options={({ navigation }) => ({
                tabBarStyle: { display: "none" },
                tabBarButton: (props) => null,
                tabBarVisible: false,
              })}
            />

            <Tab.Screen
              name="Νεα Αναφορά"
              component={Scanner}
              options={({ navigation }) => ({
                tabBarStyle: { display: "none" },
                tabBarButton: (props) => null,
                tabBarVisible: false,
                title: "Scanner",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() => navigation.navigate("Αναφορές")}
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
              })}
            />

            <Tab.Screen
              name="SelectRequest"
              component={SelectRequestScreen}
              options={({ navigation, route }) => ({
                tabBarStyle: { display: "none" },
                tabBarButton: (props) => null,
                tabBarVisible: false,
                title: "ΚΑΡΕΝΤΑ Α.Ε, Κεντρικά",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() => navigation.navigate("Αναφορές")}
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
              })}
            />

            <Tab.Screen
              name="In_out"
              component={InOutScreen}
              options={({ navigation, route }) => ({
                tabBarStyle: { display: "none" },
                tabBarButton: (props) => null,
                tabBarVisible: false,
                title: "Select Requests",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() => navigation.navigate("Αναφορές")}
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
              })}
            />
            <Tab.Screen
              name="top-tabs"
              component={SelectTopTabs}
              options={({ navigation, route }) => ({
                //headerShown: false,
                tabBarStyle: { display: "none" },
                tabBarButton: (props) => null,
                tabBarVisible: false,
                //title: "ΚΑΡΕΝΤΑ Α.Ε, Κεντρικά",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitle: "ΚΑΡΕΝΤΑ Α.Ε, Κεντρικά",
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() =>
                      navigation.navigate("SelectRequest", {
                        name: route.params,
                      })
                    }
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
              })}
            />

            <Tab.Screen
              name="success"
              component={RequestListSuccess}
              options={({ navigation, route }) => ({
                //headerShown: false,
                tabBarStyle: { display: "none" },
                tabBarButton: (props) => null,
                tabBarVisible: false,
                //title: "ΚΑΡΕΝΤΑ Α.Ε, Κεντρικά",
                headerStyle: {
                  backgroundColor: `${theme.colors.ui.darkPrimary}`,
                },
                headerTitle: "ΚΑΡΕΝΤΑ Α.Ε, Κεντρικά",
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Ionicons
                    onPress={() =>
                      navigation.navigate("SelectRequest", {
                        name: route.params,
                      })
                    }
                    name="arrow-back-outline"
                    size={24}
                    color={"white"}
                    style={{ paddingLeft: 20 }}
                  />
                ),
              })}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  } else {
    return null;
  }
}
