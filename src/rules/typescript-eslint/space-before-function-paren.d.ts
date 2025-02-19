import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpaceBeforeFunctionParenOption =
  | ('always' | 'never')
  | {
      anonymous?: 'always' | 'never' | 'ignore';
      named?: 'always' | 'never' | 'ignore';
      asyncArrow?: 'always' | 'never' | 'ignore';
    };

/**
 * Options.
 */
export type SpaceBeforeFunctionParenOptions = [SpaceBeforeFunctionParenOption?];

/**
 * Enforces consistent spacing before function parenthesis.
 *
 * @see [space-before-function-paren](https://typescript-eslint.io/rules/space-before-function-paren)
 */
export type SpaceBeforeFunctionParenRuleConfig =
  RuleConfig<SpaceBeforeFunctionParenOptions>;

/**
 * Enforces consistent spacing before function parenthesis.
 *
 * @see [space-before-function-paren](https://typescript-eslint.io/rules/space-before-function-paren)
 */
export interface SpaceBeforeFunctionParenRule {
  /**
   * Enforces consistent spacing before function parenthesis.
   *
   * @see [space-before-function-paren](https://typescript-eslint.io/rules/space-before-function-paren)
   */
  '@typescript-eslint/space-before-function-paren': SpaceBeforeFunctionParenRuleConfig;
}
