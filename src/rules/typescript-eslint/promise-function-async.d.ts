import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PromiseFunctionAsyncOption {
  allowAny?: boolean;
  allowedPromiseNames?: string[];
  checkArrowFunctions?: boolean;
  checkFunctionDeclarations?: boolean;
  checkFunctionExpressions?: boolean;
  checkMethodDeclarations?: boolean;
}

/**
 * Options.
 */
export type PromiseFunctionAsyncOptions = [PromiseFunctionAsyncOption?];

/**
 * Requires any function or method that returns a Promise to be marked async.
 *
 * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
 */
export type PromiseFunctionAsyncRuleConfig =
  RuleConfig<PromiseFunctionAsyncOptions>;

/**
 * Requires any function or method that returns a Promise to be marked async.
 *
 * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
 */
export interface PromiseFunctionAsyncRule {
  /**
   * Requires any function or method that returns a Promise to be marked async.
   *
   * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
   */
  '@typescript-eslint/promise-function-async': PromiseFunctionAsyncRuleConfig;
}
