import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../../../../theme/colors';
import { globalStyles } from '../../../../theme/global.styles';
import { styles } from '../styles/Login.styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    Alert.alert(
      'Cloud Games',
      'A conexão com a API será implementada na próxima etapa.',
    );
  }

  function handleForgotPassword() {
    Alert.alert(
      'Recuperar senha',
      'A tela de recuperação de senha será criada em breve.',
    );
  }

  function handleRegister() {
    Alert.alert(
      'Cadastro',
      'A tela de cadastro será criada em breve.',
    );
  }

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <View style={styles.header}>
            <View
              style={styles.logo}
              accessible={false}
              accessibilityElementsHidden
              importantForAccessibility="no-hide-descendants"
            >
              <Text style={styles.logoText}>CG</Text>
            </View>

            <Text style={styles.brand}>Cloud Games</Text>

            <Text style={styles.title}>Entre na sua conta</Text>

            <Text style={styles.subtitle}>
              Seu próximo jogo começa aqui.
            </Text>
          </View>

          <View style={styles.field}>
            <View style={globalStyles.inputContainer}>
              <View
                style={styles.iconContainer}
                accessible={false}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
                pointerEvents="none"
              >
                <Ionicons
                  name="mail-outline"
                  size={22}
                  color={colors.placeholder}
                />
              </View>

              <TextInput
                style={[globalStyles.input, styles.input]}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
                placeholderTextColor={colors.placeholder}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                accessibilityLabel="E-mail"
              />
            </View>
          </View>

          <View style={styles.field}>
            <View style={globalStyles.inputContainer}>
              <View
                style={styles.iconContainer}
                accessible={false}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
                pointerEvents="none"
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color={colors.placeholder}
                />
              </View>

              <TextInput
                style={[globalStyles.input, styles.input]}
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.placeholder}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="current-password"
                accessibilityLabel="Senha"
                onSubmitEditing={handleLogin}
                returnKeyType="go"
              />

              <Pressable
                onPress={() => setShowPassword((current) => !current)}
                accessibilityRole="button"
                accessibilityLabel={
                  showPassword ? 'Ocultar senha' : 'Mostrar senha'
                }
                style={styles.visibilityButton}
              >
                <Text style={styles.visibilityText}>
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </Text>
              </Pressable>
            </View>
          </View>

          <Pressable
            onPress={handleLogin}
            accessibilityRole="button"
            style={({ pressed }) => [
              globalStyles.button,
              styles.loginButton,
              pressed && globalStyles.buttonPressed,
            ]}
          >
            <Text style={globalStyles.buttonText}>Entrar</Text>
          </Pressable>

          <View style={styles.links}>
            <Pressable
              onPress={handleForgotPassword}
              accessibilityRole="link"
              style={({ pressed }) => [
                styles.linkButton,
                pressed && styles.linkPressed,
              ]}
            >
              <Text style={globalStyles.linkText}>
                Esqueceu a senha?
              </Text>
            </Pressable>

            <Pressable
              onPress={handleRegister}
              accessibilityRole="link"
              style={({ pressed }) => [
                styles.linkButton,
                pressed && styles.linkPressed,
              ]}
            >
              <Text style={globalStyles.linkText}>
                Cadastrar novo usuário
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}