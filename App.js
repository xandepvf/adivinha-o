import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.header}>🏀 NBA App</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Rank da Temporada */}
        <Text style={styles.sectionTitle}>Rank da Temporada</Text>
        <View style={styles.rankContainer}>
          {/* Conferência Leste */}
          <View style={styles.rankBox}>
            <Text style={styles.rankTitle}>Leste</Text>
            <Text style={styles.rankItem}>1. Celtics</Text>
            <Text style={styles.rankItem}>2. Bucks</Text>
            <Text style={styles.rankItem}>3. Cavaliers</Text>
            <Text style={styles.rankItem}>4. Knicks</Text>
          </View>

          {/* Conferência Oeste */}
          <View style={styles.rankBox}>
            <Text style={styles.rankTitle}>Oeste</Text>
            <Text style={styles.rankItem}>1. Nuggets</Text>
            <Text style={styles.rankItem}>2. Timberwolves</Text>
            <Text style={styles.rankItem}>3. Thunder</Text>
            <Text style={styles.rankItem}>4. Suns</Text>
          </View>
        </View>

        {/* Botões de Interação */}
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>📊 Estatísticas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>📅 Jogos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🏆 Playoffs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>⭐ Jogadores</Text>
          </TouchableOpacity>
        </View>

        {/* Destaques da Semana */}
        <Text style={styles.sectionTitle}>Destaques da Semana</Text>
        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>🔥 Jokic com triplo-duplo histórico!</Text>
          <Text style={styles.highlightText}>⚡ Antetokounmpo domina no garrafão</Text>
          <Text style={styles.highlightText}>🎯 Curry passa de 10 mil bolas de 3</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 15,
  },
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#f1c40f",
    fontWeight: "bold",
    marginBottom: 10,
  },
  rankContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  rankBox: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 12,
    width: "48%",
  },
  rankTitle: {
    fontSize: 18,
    color: "#00aaff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  rankItem: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  highlightBox: {
    backgroundColor: "#2c2c2c",
    padding: 15,
    borderRadius: 12,
  },
  highlightText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
  },
});
