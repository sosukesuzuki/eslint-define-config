import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ObjectCurlyNewlineOption =
  | (
      | ('always' | 'never')
      | {
          multiline?: boolean;
          minProperties?: number;
          consistent?: boolean;
        }
    )
  | {
      ObjectExpression?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ObjectPattern?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ImportDeclaration?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ExportDeclaration?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
    };

/**
 * Options.
 */
export type ObjectCurlyNewlineOptions = [ObjectCurlyNewlineOption?];

/**
 * Enforce consistent line breaks after opening and before closing braces.
 *
 * @see [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)
 */
export type ObjectCurlyNewlineRuleConfig =
  RuleConfig<ObjectCurlyNewlineOptions>;

/**
 * Enforce consistent line breaks after opening and before closing braces.
 *
 * @see [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)
 */
export interface ObjectCurlyNewlineRule {
  /**
   * Enforce consistent line breaks after opening and before closing braces.
   *
   * @see [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)
   */
  'object-curly-newline': ObjectCurlyNewlineRuleConfig;
}
