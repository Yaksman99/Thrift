import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./screens/Stack";
import { AppProvider } from "./Utils/globals";
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
          <StackNavigation />
      </NavigationContainer>
    </AppProvider>
  );
  }