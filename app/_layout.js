import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Filmes",
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerTitle: "Detalhes",
        }}
      />
    </Stack>
  );
}
