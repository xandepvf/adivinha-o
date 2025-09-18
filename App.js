import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

// --- Constantes de Logo e Dados ---
const CORINTHIANS_LOGO = "https://cdn.ssref.net/req/202407181/tlogo/fb/2049.png";

const proximoJogo = {
  timeCasa: {
    nome: "Corinthians",
    logo: CORINTHIANS_LOGO,
  },
  timeVisitante: {
    nome: "Palmeiras",
    logo: "https://cdn.ssref.net/req/202407181/tlogo/fb/2056.png",
  },
  detalhes: "Brasileirão | Neo Química Arena",
};

const elenco = [
  {
    id: "1",
    nome: "Cássio",
    posicao: "Goleiro",
    foto: "https://s.sde.globo.com/media/person_role/2023/03/02/cassio_1_Copia_2.png",
  },
  {
    id: "2",
    nome: "Fagner",
    posicao: "Lateral Direito",
    foto: "https://s.sde.globo.com/media/person_role/2023/03/02/fagner_1_Copia_2.png",
  },
  {
    id: "3",
    nome: "Yuri Alberto",
    posicao: "Atacante",
    foto: "https://s.sde.globo.com/media/person_role/2023/08/29/yuri_alberto_corinthians_foto_marcos_ribolli_2023_1_1.png",
  },
   {
    id: "4",
    nome: "Rodrigo Garro",
    posicao: "Meio-Campo",
    foto: "https://s.sde.globo.com/media/person_role/2024/02/09/rodrigo-garro-corinthians-2024-foto-rodrigo-coca-ag-corinthians_1.png",
  },
];

const destaques = [
  {
    foto: "https://s.sde.globo.com/media/person_role/2023/08/29/yuri_alberto_corinthians_foto_marcos_ribolli_2023_1_1.png",
    nome: "Yuri Alberto",
    descricao: "Artilheiro do time na temporada.",
  },
  {
    foto: "https://s.sde.globo.com/media/person_role/2023/03/02/cassio_1_Copia_2.png",
    nome: "Cássio",
    descricao: "O Gigante da Fiel, ídolo histórico.",
  },
];

// --- Componente Principal ---
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Cabeçalho com Logo */}
          <View style={styles.headerContainer}>
             <Image source={{ uri: CORINTHIANS_LOGO }} style={styles.headerLogo} />
             <Text style={styles.header}>Central do Timão</Text>
          </View>

          {/* Card de Próximo Jogo */}
          <Text style={styles.sectionTitle}>Próximo Jogo</Text>
          <View style={styles.featuredGameCard}>
            {/* ... (código do card de jogo inalterado) ... */}
          </View>

          {/* Elenco Principal com Foto e Logo */}
          <Text style={styles.sectionTitle}>Elenco Principal</Text>
          {elenco.map((jogador) => (
            <TouchableOpacity key={jogador.id} style={styles.playerItem}>
              <Image source={{ uri: jogador.foto }} style={styles.playerPhoto} />
              <View style={styles.playerInfoContainer}>
                 <Text style={styles.playerName}>{jogador.nome}</Text>
                 <Text style={styles.playerPosition}>{jogador.posicao}</Text>
              </View>
              <Image source={{ uri: CORINTHIANS_LOGO }} style={styles.playerItemLogo} />
            </TouchableOpacity>
          ))}

          {/* Craques do Time com Foto */}
          <Text style={styles.sectionTitle}>Craques do Time</Text>
          {destaques.map((jogador, index) => (
            <View key={index} style={styles.performerCard}>
              <Image source={{ uri: jogador.foto }} style={styles.performerImage} />
              <View style={styles.performerInfo}>
                <Text style={styles.performerName}>{jogador.nome}</Text>
                <Text style={styles.performerDesc}>{jogador.descricao}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  content: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 25,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FFFFFF',
    paddingLeft: 10,
  },
  featuredGameCard: {
    backgroundColor: "#1C1C1C",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  // ... (outros estilos do card de jogo inalterados) ...
  
  // Elenco
  playerItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  playerPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  playerInfoContainer: {
    flex: 1, // Faz o container de texto ocupar o espaço disponível
    marginLeft: 15,
  },
  playerName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerPosition: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  playerItemLogo: {
    width: 30,
    height: 30,
    marginLeft: 10, // margem para não ficar colado
  },

  // Destaques
  performerCard: {
    backgroundColor: '#1C1C1C',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  performerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  performerInfo: {
    marginLeft: 15,
    flex: 1,
  },
  performerName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  performerDesc: {
    color: '#A0A0A0',
    fontSize: 14,
    marginTop: 4,
  },
});