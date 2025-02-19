import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TripleSlashReferenceOption {
  lib?: 'always' | 'never';
  path?: 'always' | 'never';
  types?: 'always' | 'never' | 'prefer-import';
}

/**
 * Options.
 */
export type TripleSlashReferenceOptions = [TripleSlashReferenceOption?];

/**
 * Sets preference level for triple slash directives versus ES6-style import declarations.
 *
 * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
 */
export type TripleSlashReferenceRuleConfig =
  RuleConfig<TripleSlashReferenceOptions>;

/**
 * Sets preference level for triple slash directives versus ES6-style import declarations.
 *
 * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
 */
export interface TripleSlashReferenceRule {
  /**
   * Sets preference level for triple slash directives versus ES6-style import declarations.
   *
   * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
   */
  '@typescript-eslint/triple-slash-reference': TripleSlashReferenceRuleConfig;
}
