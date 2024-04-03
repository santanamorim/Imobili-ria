import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function AboutPage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Descubra a Imobiliária Prime</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nosso Propósito</Text>
        <Text style={styles.sectionText}>
          Na Imobiliária Prime, nossa missão vai além de simplesmente fechar negócios. Estamos aqui para ajudar você a encontrar o lar dos seus sonhos, um lugar onde você possa criar memórias preciosas e construir seu futuro.
        </Text>
      </View>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/loja-1ce3e.appspot.com/o/pexels-photo-8293778.jpeg?alt=media&token=b2d2ff9c-abf1-4dc8-92c2-c224802f271b",
        }}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compromisso com a Qualidade</Text>
        <Text style={styles.sectionText}>
          Na Imobiliária Prime, a excelência é o nosso padrão. Nossos consultores especializados garantem que cada imóvel em nosso catálogo seja cuidadosamente selecionado para atender aos mais altos critérios de qualidade e valor.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência do Cliente</Text>
        <Text style={styles.sectionText}>
          Sua satisfação é nossa prioridade número um. Nossa equipe está aqui para guiá-lo em cada passo do caminho, oferecendo um atendimento personalizado e soluções sob medida para suas necessidades imobiliárias.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore Nossas Oportunidades</Text>
        <Text style={styles.sectionText}>
          Oferecemos uma ampla gama de opções imobiliárias, desde apartamentos urbanos elegantes até casas espaçosas em bairros tranquilos. Seja qual for o seu estilo de vida, temos o imóvel perfeito para você.
        </Text>
      </View>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/loja-1ce3e.appspot.com/o/pexels-photo-7579042.jpeg?alt=media&token=e04bce58-bad9-4b84-a97c-8f9f7bd4c9b1",          
        }}
        style={styles.imageEquipe}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Entre em Contato</Text>
        <Text style={styles.sectionText}>
          Estamos aqui para ajudar você a transformar seus sonhos em realidade. Entre em contato conosco hoje mesmo para agendar uma visita, obter mais informações ou simplesmente conversar sobre suas aspirações imobiliárias.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.contact}>Contato:</Text>
        <Text style={styles.contactInfo}>Telefone: (XX) XXXX-XXXX</Text>
        <Text style={styles.contactInfo}>
          Email: contato@imobiliariaprime.com
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 30,
    paddingHorizontal: "5%",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#444",
    textTransform: "uppercase",
  },
  sectionText: {
    fontSize: 18,
    lineHeight: 24,
    color: "#666",
  },
  image: {
    width: "100%",
    aspectRatio: 16/9,
    marginBottom: 40,
    borderRadius: 10,
  },
  imageEquipe: {
    width: "100%",
    aspectRatio: 16/9,
    marginBottom: 40,
    borderRadius: 10,
  },
  footer: {
    backgroundColor: "#7a7d80",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  contact: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 18,
    color: "#ccc",
  },
});
