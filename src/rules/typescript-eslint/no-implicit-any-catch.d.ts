import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoImplicitAnyCatchOption {
  allowExplicitAny?: boolean;
}

/**
 * Options.
 */
export type NoImplicitAnyCatchOptions = [NoImplicitAnyCatchOption?];

/**
 * Disallow usage of the implicit `any` type in catch clauses.
 *
 * @deprecated
 *
 * @see [no-implicit-any-catch](https://typescript-eslint.io/rules/no-implicit-any-catch)
 */
export type NoImplicitAnyCatchRuleConfig =
  RuleConfig<NoImplicitAnyCatchOptions>;

/**
 * Disallow usage of the implicit `any` type in catch clauses.
 *
 * @deprecated
 *
 * @see [no-implicit-any-catch](https://typescript-eslint.io/rules/no-implicit-any-catch)
 */
export interface NoImplicitAnyCatchRule {
  /**
   * Disallow usage of the implicit `any` type in catch clauses.
   *
   * @deprecated
   *
   * @see [no-implicit-any-catch](https://typescript-eslint.io/rules/no-implicit-any-catch)
   */
  '@typescript-eslint/no-implicit-any-catch': NoImplicitAnyCatchRuleConfig;
}
