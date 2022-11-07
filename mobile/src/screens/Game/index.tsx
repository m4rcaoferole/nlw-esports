import { SafeAreaView } from "react-native";
import { useRoute } from '@react-navigation/native'

import { Background } from "../../components/Background";
import { GameParams } from "../../@types/navigation";

export function Game() {

  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView>

      </SafeAreaView>
    </Background>
  )
}