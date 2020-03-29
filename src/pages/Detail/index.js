import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Logo,
  BackButton,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText
} from './styles';

export default function Detail({ navigation }) {
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropoelada" com o valor de R$120,00';

  function navigateback() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['caiowfavoretto@gmail.com'],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5511984227739&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <BackButton onPress={navigateback}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </BackButton>
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>APAD</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>Cadelinha atropelada</IncidentValue>

        <IncidentProperty>Valor:</IncidentProperty>
        <IncidentValue>R$ 120,00</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Save o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>

          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
