import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from './Theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    marginBottom: SPACING.lg,
    borderRadius: SPACING.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    gap: SPACING.md,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SPACING.sm,
    backgroundColor: COLORS.border
  },
  content: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs
  },
  timestamp: {
    fontSize: FONTS.small,
    color: COLORS.secondary,
  },
  category: {
    fontSize: FONTS.small,
    fontWeight: FONTS.bold,
    color: COLORS.accent2
  },
  title: {
    fontSize: FONTS.standard,
    fontWeight: FONTS.semiBold,
    color: COLORS.primary,
    marginBottom: SPACING.xs,
    lineHeight: FONTS.lineHeight
  },
  snippet: {
    fontSize: FONTS.small,
    color: COLORS.secondary,
    marginBottom: SPACING.xs
  },
  readMoreText: {
    fontSize: FONTS.small,
    fontWeight: FONTS.bold,
    color: COLORS.secondary,
    letterSpacing: 1
  }
});