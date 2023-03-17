import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TampilanUtama from "./Screen/TampilanUtama";
import TampilanMain from "./Screen/TampilanMain";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tampilan Utama">
        <Stack.Screen
          name="Tampilan Utama"
          component={TampilanUtama}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main Screen"
          component={TampilanMain}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
