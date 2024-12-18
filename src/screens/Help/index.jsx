import { Header } from "@components/Header";
import theme from "@theme/index";
import { ScrollView, View } from "react-native";
import { TitleWithDescription } from "@components/TitleWithDescription";
import { Container } from "./styles";
import { Post } from "./components/Post";
import { useTranslation } from "react-i18next";
import "@utils/i18n";

export function Help() {
  const { t, i18n } = useTranslation();
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <TitleWithDescription
          title={t("Precisa de ajuda com o Aplicativo?")}
          description={t("Dirija-se a um dos postos de atendimento presencial")}
        />

        <Container>
          <Post
            title={"Posto Center Lapa"}
            descriptionLocation={
              "R. Portão da Piedade, 155 - Dois de Julho, Salvador - BA, 40070-045"
            }
            descriptionPhone={"(71) 0 0000-0000"}
            linkLocation={"https://maps.app.goo.gl/BriTHVfyRZkivL1u6"}
            linkPhone={"(71) 9 0000-0000"}
          />
          <Post
            title={"Posto Salvador Norte"}
            descriptionLocation={
              "R. Portão da Piedade, 155 - Dois de Julho, Salvador - BA, 40070-045"
            }
            descriptionPhone={"(71) 0 0000-0000"}
            linkLocation={"https://maps.app.goo.gl/BriTHVfyRZkivL1u6"}
            linkPhone={"(71) 9 0000-0000"}
          />
        </Container>
      </ScrollView>
    </View>
  );
}
