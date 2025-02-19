import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MethodSignatureStyleOption = 'property' | 'method';

/**
 * Options.
 */
export type MethodSignatureStyleOptions = [MethodSignatureStyleOption?];

/**
 * Enforces using a particular method signature syntax.
 *
 * @see [method-signature-style](https://typescript-eslint.io/rules/method-signature-style)
 */
export type MethodSignatureStyleRuleConfig =
  RuleConfig<MethodSignatureStyleOptions>;

/**
 * Enforces using a particular method signature syntax.
 *
 * @see [method-signature-style](https://typescript-eslint.io/rules/method-signature-style)
 */
export interface MethodSignatureStyleRule {
  /**
   * Enforces using a particular method signature syntax.
   *
   * @see [method-signature-style](https://typescript-eslint.io/rules/method-signature-style)
   */
  '@typescript-eslint/method-signature-style': MethodSignatureStyleRuleConfig;
}
