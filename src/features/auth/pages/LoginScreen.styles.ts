import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 64,
  },
  form: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 36,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoText: {
    color: colors.surface,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -1,
  },
  brand: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 24,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  field: {
    marginBottom: 20,
  },
  iconContainer: {
    paddingLeft: 16,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 0,
  },
  visibilityButton: {
    minHeight: 48,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  visibilityText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 8,
  },
  links: {
    alignItems: 'center',
    marginTop: 16,
  },
  linkButton: {
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkPressed: {
    opacity: 0.6,
  },
});