import type { ArrayBracketNewlineRule } from './array-bracket-newline';
import type { ArrayBracketSpacingRule } from './array-bracket-spacing';
import type { ArrowSpacingRule } from './arrow-spacing';
import type { AttributeHyphenationRule } from './attribute-hyphenation';
import type { AttributesOrderRule } from './attributes-order';
import type { BlockLangRule } from './block-lang';
import type { BlockSpacingRule } from './block-spacing';
import type { BlockTagNewlineRule } from './block-tag-newline';
import type { BraceStyleRule } from './brace-style';
import type { CamelcaseRule } from './camelcase';
import type { CommaDangleRule } from './comma-dangle';
import type { CommaSpacingRule } from './comma-spacing';
import type { CommaStyleRule } from './comma-style';
import type { CommentDirectiveRule } from './comment-directive';
import type { ComponentApiStyleRule } from './component-api-style';
import type { ComponentDefinitionNameCasingRule } from './component-definition-name-casing';
import type { ComponentNameInTemplateCasingRule } from './component-name-in-template-casing';
import type { ComponentOptionsNameCasingRule } from './component-options-name-casing';
import type { ComponentTagsOrderRule } from './component-tags-order';
import type { CustomEventNameCasingRule } from './custom-event-name-casing';
import type { DefineMacrosOrderRule } from './define-macros-order';
import type { DotLocationRule } from './dot-location';
import type { DotNotationRule } from './dot-notation';
import type { EqeqeqRule } from './eqeqeq';
import type { ExperimentalScriptSetupVarsRule } from './experimental-script-setup-vars';
import type { FirstAttributeLinebreakRule } from './first-attribute-linebreak';
import type { FuncCallSpacingRule } from './func-call-spacing';
import type { HtmlButtonHasTypeRule } from './html-button-has-type';
import type { HtmlClosingBracketNewlineRule } from './html-closing-bracket-newline';
import type { HtmlClosingBracketSpacingRule } from './html-closing-bracket-spacing';
import type { HtmlCommentContentNewlineRule } from './html-comment-content-newline';
import type { HtmlCommentContentSpacingRule } from './html-comment-content-spacing';
import type { HtmlCommentIndentRule } from './html-comment-indent';
import type { HtmlEndTagsRule } from './html-end-tags';
import type { HtmlIndentRule } from './html-indent';
import type { HtmlQuotesRule } from './html-quotes';
import type { HtmlSelfClosingRule } from './html-self-closing';
import type { JsxUsesVarsRule } from './jsx-uses-vars';
import type { KeySpacingRule } from './key-spacing';
import type { KeywordSpacingRule } from './keyword-spacing';
import type { MatchComponentFileNameRule } from './match-component-file-name';
import type { MatchComponentImportNameRule } from './match-component-import-name';
import type { MaxAttributesPerLineRule } from './max-attributes-per-line';
import type { MaxLenRule } from './max-len';
import type { MultiWordComponentNamesRule } from './multi-word-component-names';
import type { MultilineHtmlElementContentNewlineRule } from './multiline-html-element-content-newline';
import type { MustacheInterpolationSpacingRule } from './mustache-interpolation-spacing';
import type { NamePropertyCasingRule } from './name-property-casing';
import type { NewLineBetweenMultiLinePropertyRule } from './new-line-between-multi-line-property';
import type { NextTickStyleRule } from './next-tick-style';
import type { NoArrowFunctionsInWatchRule } from './no-arrow-functions-in-watch';
import type { NoAsyncInComputedPropertiesRule } from './no-async-in-computed-properties';
import type { NoBooleanDefaultRule } from './no-boolean-default';
import type { NoChildContentRule } from './no-child-content';
import type { NoComputedPropertiesInDataRule } from './no-computed-properties-in-data';
import type { NoConfusingVForVIfRule } from './no-confusing-v-for-v-if';
import type { NoConstantConditionRule } from './no-constant-condition';
import type { NoCustomModifiersOnVModelRule } from './no-custom-modifiers-on-v-model';
import type { NoDeprecatedDataObjectDeclarationRule } from './no-deprecated-data-object-declaration';
import type { NoDeprecatedDestroyedLifecycleRule } from './no-deprecated-destroyed-lifecycle';
import type { NoDeprecatedDollarListenersApiRule } from './no-deprecated-dollar-listeners-api';
import type { NoDeprecatedDollarScopedslotsApiRule } from './no-deprecated-dollar-scopedslots-api';
import type { NoDeprecatedEventsApiRule } from './no-deprecated-events-api';
import type { NoDeprecatedFilterRule } from './no-deprecated-filter';
import type { NoDeprecatedFunctionalTemplateRule } from './no-deprecated-functional-template';
import type { NoDeprecatedHtmlElementIsRule } from './no-deprecated-html-element-is';
import type { NoDeprecatedInlineTemplateRule } from './no-deprecated-inline-template';
import type { NoDeprecatedPropsDefaultThisRule } from './no-deprecated-props-default-this';
import type { NoDeprecatedRouterLinkTagPropRule } from './no-deprecated-router-link-tag-prop';
import type { NoDeprecatedScopeAttributeRule } from './no-deprecated-scope-attribute';
import type { NoDeprecatedSlotAttributeRule } from './no-deprecated-slot-attribute';
import type { NoDeprecatedSlotScopeAttributeRule } from './no-deprecated-slot-scope-attribute';
import type { NoDeprecatedVBindSyncRule } from './no-deprecated-v-bind-sync';
import type { NoDeprecatedVIsRule } from './no-deprecated-v-is';
import type { NoDeprecatedVOnNativeModifierRule } from './no-deprecated-v-on-native-modifier';
import type { NoDeprecatedVOnNumberModifiersRule } from './no-deprecated-v-on-number-modifiers';
import type { NoDeprecatedVueConfigKeycodesRule } from './no-deprecated-vue-config-keycodes';
import type { NoDupeKeysRule } from './no-dupe-keys';
import type { NoDupeVElseIfRule } from './no-dupe-v-else-if';
import type { NoDuplicateAttrInheritanceRule } from './no-duplicate-attr-inheritance';
import type { NoDuplicateAttributesRule } from './no-duplicate-attributes';
import type { NoEmptyComponentBlockRule } from './no-empty-component-block';
import type { NoEmptyPatternRule } from './no-empty-pattern';
import type { NoExportInScriptSetupRule } from './no-export-in-script-setup';
import type { NoExposeAfterAwaitRule } from './no-expose-after-await';
import type { NoExtraParensRule } from './no-extra-parens';
import type { NoInvalidModelKeysRule } from './no-invalid-model-keys';
import type { NoIrregularWhitespaceRule } from './no-irregular-whitespace';
import type { NoLifecycleAfterAwaitRule } from './no-lifecycle-after-await';
import type { NoLoneTemplateRule } from './no-lone-template';
import type { NoLossOfPrecisionRule } from './no-loss-of-precision';
import type { NoMultiSpacesRule } from './no-multi-spaces';
import type { NoMultipleObjectsInClassRule } from './no-multiple-objects-in-class';
import type { NoMultipleSlotArgsRule } from './no-multiple-slot-args';
import type { NoMultipleTemplateRootRule } from './no-multiple-template-root';
import type { NoMutatingPropsRule } from './no-mutating-props';
import type { NoParsingErrorRule } from './no-parsing-error';
import type { NoPotentialComponentOptionTypoRule } from './no-potential-component-option-typo';
import type { NoRefAsOperandRule } from './no-ref-as-operand';
import type { NoReservedComponentNamesRule } from './no-reserved-component-names';
import type { NoReservedKeysRule } from './no-reserved-keys';
import type { NoReservedPropsRule } from './no-reserved-props';
import type { NoRestrictedBlockRule } from './no-restricted-block';
import type { NoRestrictedCallAfterAwaitRule } from './no-restricted-call-after-await';
import type { NoRestrictedClassRule } from './no-restricted-class';
import type { NoRestrictedComponentOptionsRule } from './no-restricted-component-options';
import type { NoRestrictedCustomEventRule } from './no-restricted-custom-event';
import type { NoRestrictedHtmlElementsRule } from './no-restricted-html-elements';
import type { NoRestrictedPropsRule } from './no-restricted-props';
import type { NoRestrictedStaticAttributeRule } from './no-restricted-static-attribute';
import type { NoRestrictedSyntaxRule } from './no-restricted-syntax';
import type { NoRestrictedVBindRule } from './no-restricted-v-bind';
import type { NoSetupPropsDestructureRule } from './no-setup-props-destructure';
import type { NoSharedComponentDataRule } from './no-shared-component-data';
import type { NoSideEffectsInComputedPropertiesRule } from './no-side-effects-in-computed-properties';
import type { NoSpacesAroundEqualSignsInAttributeRule } from './no-spaces-around-equal-signs-in-attribute';
import type { NoSparseArraysRule } from './no-sparse-arrays';
import type { NoStaticInlineStylesRule } from './no-static-inline-styles';
import type { NoTemplateKeyRule } from './no-template-key';
import type { NoTemplateShadowRule } from './no-template-shadow';
import type { NoTemplateTargetBlankRule } from './no-template-target-blank';
import type { NoTextareaMustacheRule } from './no-textarea-mustache';
import type { NoThisInBeforeRouteEnterRule } from './no-this-in-before-route-enter';
import type { NoUndefComponentsRule } from './no-undef-components';
import type { NoUndefPropertiesRule } from './no-undef-properties';
import type { NoUnregisteredComponentsRule } from './no-unregistered-components';
import type { NoUnsupportedFeaturesRule } from './no-unsupported-features';
import type { NoUnusedComponentsRule } from './no-unused-components';
import type { NoUnusedPropertiesRule } from './no-unused-properties';
import type { NoUnusedRefsRule } from './no-unused-refs';
import type { NoUnusedVarsRule } from './no-unused-vars';
import type { NoUseComputedPropertyLikeMethodRule } from './no-use-computed-property-like-method';
import type { NoUseVIfWithVForRule } from './no-use-v-if-with-v-for';
import type { NoUselessConcatRule } from './no-useless-concat';
import type { NoUselessMustachesRule } from './no-useless-mustaches';
import type { NoUselessTemplateAttributesRule } from './no-useless-template-attributes';
import type { NoUselessVBindRule } from './no-useless-v-bind';
import type { NoVForTemplateKeyRule } from './no-v-for-template-key';
import type { NoVForTemplateKeyOnChildRule } from './no-v-for-template-key-on-child';
import type { NoVHtmlRule } from './no-v-html';
import type { NoVModelArgumentRule } from './no-v-model-argument';
import type { NoVTextRule } from './no-v-text';
import type { NoVTextVHtmlOnComponentRule } from './no-v-text-v-html-on-component';
import type { NoWatchAfterAwaitRule } from './no-watch-after-await';
import type { ObjectCurlyNewlineRule } from './object-curly-newline';
import type { ObjectCurlySpacingRule } from './object-curly-spacing';
import type { ObjectPropertyNewlineRule } from './object-property-newline';
import type { ObjectShorthandRule } from './object-shorthand';
import type { OneComponentPerFileRule } from './one-component-per-file';
import type { OperatorLinebreakRule } from './operator-linebreak';
import type { OrderInComponentsRule } from './order-in-components';
import type { PaddingLineBetweenBlocksRule } from './padding-line-between-blocks';
import type { PreferImportFromVueRule } from './prefer-import-from-vue';
import type { PreferPropTypeBooleanFirstRule } from './prefer-prop-type-boolean-first';
import type { PreferSeparateStaticClassRule } from './prefer-separate-static-class';
import type { PreferTemplateRule } from './prefer-template';
import type { PreferTrueAttributeShorthandRule } from './prefer-true-attribute-shorthand';
import type { PropNameCasingRule } from './prop-name-casing';
import type { QuotePropsRule } from './quote-props';
import type { RequireComponentIsRule } from './require-component-is';
import type { RequireDefaultPropRule } from './require-default-prop';
import type { RequireDirectExportRule } from './require-direct-export';
import type { RequireEmitValidatorRule } from './require-emit-validator';
import type { RequireExplicitEmitsRule } from './require-explicit-emits';
import type { RequireExposeRule } from './require-expose';
import type { RequireNamePropertyRule } from './require-name-property';
import type { RequirePropTypeConstructorRule } from './require-prop-type-constructor';
import type { RequirePropTypesRule } from './require-prop-types';
import type { RequireRenderReturnRule } from './require-render-return';
import type { RequireSlotsAsFunctionsRule } from './require-slots-as-functions';
import type { RequireToggleInsideTransitionRule } from './require-toggle-inside-transition';
import type { RequireVForKeyRule } from './require-v-for-key';
import type { RequireValidDefaultPropRule } from './require-valid-default-prop';
import type { ReturnInComputedPropertyRule } from './return-in-computed-property';
import type { ReturnInEmitsValidatorRule } from './return-in-emits-validator';
import type { ScriptIndentRule } from './script-indent';
import type { ScriptSetupUsesVarsRule } from './script-setup-uses-vars';
import type { SinglelineHtmlElementContentNewlineRule } from './singleline-html-element-content-newline';
import type { SortKeysRule } from './sort-keys';
import type { SpaceInParensRule } from './space-in-parens';
import type { SpaceInfixOpsRule } from './space-infix-ops';
import type { SpaceUnaryOpsRule } from './space-unary-ops';
import type { StaticClassNamesOrderRule } from './static-class-names-order';
import type { TemplateCurlySpacingRule } from './template-curly-spacing';
import type { ThisInTemplateRule } from './this-in-template';
import type { UseVOnExactRule } from './use-v-on-exact';
import type { VBindStyleRule } from './v-bind-style';
import type { VForDelimiterStyleRule } from './v-for-delimiter-style';
import type { VOnEventHyphenationRule } from './v-on-event-hyphenation';
import type { VOnFunctionCallRule } from './v-on-function-call';
import type { VOnStyleRule } from './v-on-style';
import type { VSlotStyleRule } from './v-slot-style';
import type { ValidDefineEmitsRule } from './valid-define-emits';
import type { ValidDefinePropsRule } from './valid-define-props';
import type { ValidNextTickRule } from './valid-next-tick';
import type { ValidTemplateRootRule } from './valid-template-root';
import type { ValidVBindRule } from './valid-v-bind';
import type { ValidVBindSyncRule } from './valid-v-bind-sync';
import type { ValidVCloakRule } from './valid-v-cloak';
import type { ValidVElseRule } from './valid-v-else';
import type { ValidVElseIfRule } from './valid-v-else-if';
import type { ValidVForRule } from './valid-v-for';
import type { ValidVHtmlRule } from './valid-v-html';
import type { ValidVIfRule } from './valid-v-if';
import type { ValidVIsRule } from './valid-v-is';
import type { ValidVMemoRule } from './valid-v-memo';
import type { ValidVModelRule } from './valid-v-model';
import type { ValidVOnRule } from './valid-v-on';
import type { ValidVOnceRule } from './valid-v-once';
import type { ValidVPreRule } from './valid-v-pre';
import type { ValidVShowRule } from './valid-v-show';
import type { ValidVSlotRule } from './valid-v-slot';
import type { ValidVTextRule } from './valid-v-text';

/**
 * All Vue rules.
 */
export type VueRules = ArrayBracketNewlineRule &
  ArrayBracketSpacingRule &
  ArrowSpacingRule &
  AttributeHyphenationRule &
  AttributesOrderRule &
  BlockLangRule &
  BlockSpacingRule &
  BlockTagNewlineRule &
  BraceStyleRule &
  CamelcaseRule &
  CommaDangleRule &
  CommaSpacingRule &
  CommaStyleRule &
  CommentDirectiveRule &
  ComponentApiStyleRule &
  ComponentDefinitionNameCasingRule &
  ComponentNameInTemplateCasingRule &
  ComponentOptionsNameCasingRule &
  ComponentTagsOrderRule &
  CustomEventNameCasingRule &
  DefineMacrosOrderRule &
  DotLocationRule &
  DotNotationRule &
  EqeqeqRule &
  ExperimentalScriptSetupVarsRule &
  FirstAttributeLinebreakRule &
  FuncCallSpacingRule &
  HtmlButtonHasTypeRule &
  HtmlClosingBracketNewlineRule &
  HtmlClosingBracketSpacingRule &
  HtmlCommentContentNewlineRule &
  HtmlCommentContentSpacingRule &
  HtmlCommentIndentRule &
  HtmlEndTagsRule &
  HtmlIndentRule &
  HtmlQuotesRule &
  HtmlSelfClosingRule &
  JsxUsesVarsRule &
  KeySpacingRule &
  KeywordSpacingRule &
  MatchComponentFileNameRule &
  MatchComponentImportNameRule &
  MaxAttributesPerLineRule &
  MaxLenRule &
  MultiWordComponentNamesRule &
  MultilineHtmlElementContentNewlineRule &
  MustacheInterpolationSpacingRule &
  NamePropertyCasingRule &
  NewLineBetweenMultiLinePropertyRule &
  NextTickStyleRule &
  NoArrowFunctionsInWatchRule &
  NoAsyncInComputedPropertiesRule &
  NoBooleanDefaultRule &
  NoChildContentRule &
  NoComputedPropertiesInDataRule &
  NoConfusingVForVIfRule &
  NoConstantConditionRule &
  NoCustomModifiersOnVModelRule &
  NoDeprecatedDataObjectDeclarationRule &
  NoDeprecatedDestroyedLifecycleRule &
  NoDeprecatedDollarListenersApiRule &
  NoDeprecatedDollarScopedslotsApiRule &
  NoDeprecatedEventsApiRule &
  NoDeprecatedFilterRule &
  NoDeprecatedFunctionalTemplateRule &
  NoDeprecatedHtmlElementIsRule &
  NoDeprecatedInlineTemplateRule &
  NoDeprecatedPropsDefaultThisRule &
  NoDeprecatedRouterLinkTagPropRule &
  NoDeprecatedScopeAttributeRule &
  NoDeprecatedSlotAttributeRule &
  NoDeprecatedSlotScopeAttributeRule &
  NoDeprecatedVBindSyncRule &
  NoDeprecatedVIsRule &
  NoDeprecatedVOnNativeModifierRule &
  NoDeprecatedVOnNumberModifiersRule &
  NoDeprecatedVueConfigKeycodesRule &
  NoDupeKeysRule &
  NoDupeVElseIfRule &
  NoDuplicateAttrInheritanceRule &
  NoDuplicateAttributesRule &
  NoEmptyComponentBlockRule &
  NoEmptyPatternRule &
  NoExportInScriptSetupRule &
  NoExposeAfterAwaitRule &
  NoExtraParensRule &
  NoInvalidModelKeysRule &
  NoIrregularWhitespaceRule &
  NoLifecycleAfterAwaitRule &
  NoLoneTemplateRule &
  NoLossOfPrecisionRule &
  NoMultiSpacesRule &
  NoMultipleObjectsInClassRule &
  NoMultipleSlotArgsRule &
  NoMultipleTemplateRootRule &
  NoMutatingPropsRule &
  NoParsingErrorRule &
  NoPotentialComponentOptionTypoRule &
  NoRefAsOperandRule &
  NoReservedComponentNamesRule &
  NoReservedKeysRule &
  NoReservedPropsRule &
  NoRestrictedBlockRule &
  NoRestrictedCallAfterAwaitRule &
  NoRestrictedClassRule &
  NoRestrictedComponentOptionsRule &
  NoRestrictedCustomEventRule &
  NoRestrictedHtmlElementsRule &
  NoRestrictedPropsRule &
  NoRestrictedStaticAttributeRule &
  NoRestrictedSyntaxRule &
  NoRestrictedVBindRule &
  NoSetupPropsDestructureRule &
  NoSharedComponentDataRule &
  NoSideEffectsInComputedPropertiesRule &
  NoSpacesAroundEqualSignsInAttributeRule &
  NoSparseArraysRule &
  NoStaticInlineStylesRule &
  NoTemplateKeyRule &
  NoTemplateShadowRule &
  NoTemplateTargetBlankRule &
  NoTextareaMustacheRule &
  NoThisInBeforeRouteEnterRule &
  NoUndefComponentsRule &
  NoUndefPropertiesRule &
  NoUnregisteredComponentsRule &
  NoUnsupportedFeaturesRule &
  NoUnusedComponentsRule &
  NoUnusedPropertiesRule &
  NoUnusedRefsRule &
  NoUnusedVarsRule &
  NoUseComputedPropertyLikeMethodRule &
  NoUseVIfWithVForRule &
  NoUselessConcatRule &
  NoUselessMustachesRule &
  NoUselessTemplateAttributesRule &
  NoUselessVBindRule &
  NoVForTemplateKeyOnChildRule &
  NoVForTemplateKeyRule &
  NoVHtmlRule &
  NoVModelArgumentRule &
  NoVTextVHtmlOnComponentRule &
  NoVTextRule &
  NoWatchAfterAwaitRule &
  ObjectCurlyNewlineRule &
  ObjectCurlySpacingRule &
  ObjectPropertyNewlineRule &
  ObjectShorthandRule &
  OneComponentPerFileRule &
  OperatorLinebreakRule &
  OrderInComponentsRule &
  PaddingLineBetweenBlocksRule &
  PreferImportFromVueRule &
  PreferPropTypeBooleanFirstRule &
  PreferSeparateStaticClassRule &
  PreferTemplateRule &
  PreferTrueAttributeShorthandRule &
  PropNameCasingRule &
  QuotePropsRule &
  RequireComponentIsRule &
  RequireDefaultPropRule &
  RequireDirectExportRule &
  RequireEmitValidatorRule &
  RequireExplicitEmitsRule &
  RequireExposeRule &
  RequireNamePropertyRule &
  RequirePropTypeConstructorRule &
  RequirePropTypesRule &
  RequireRenderReturnRule &
  RequireSlotsAsFunctionsRule &
  RequireToggleInsideTransitionRule &
  RequireVForKeyRule &
  RequireValidDefaultPropRule &
  ReturnInComputedPropertyRule &
  ReturnInEmitsValidatorRule &
  ScriptIndentRule &
  ScriptSetupUsesVarsRule &
  SinglelineHtmlElementContentNewlineRule &
  SortKeysRule &
  SpaceInParensRule &
  SpaceInfixOpsRule &
  SpaceUnaryOpsRule &
  StaticClassNamesOrderRule &
  TemplateCurlySpacingRule &
  ThisInTemplateRule &
  UseVOnExactRule &
  VBindStyleRule &
  VForDelimiterStyleRule &
  VOnEventHyphenationRule &
  VOnFunctionCallRule &
  VOnStyleRule &
  VSlotStyleRule &
  ValidDefineEmitsRule &
  ValidDefinePropsRule &
  ValidNextTickRule &
  ValidTemplateRootRule &
  ValidVBindSyncRule &
  ValidVBindRule &
  ValidVCloakRule &
  ValidVElseIfRule &
  ValidVElseRule &
  ValidVForRule &
  ValidVHtmlRule &
  ValidVIfRule &
  ValidVIsRule &
  ValidVMemoRule &
  ValidVModelRule &
  ValidVOnRule &
  ValidVOnceRule &
  ValidVPreRule &
  ValidVShowRule &
  ValidVSlotRule &
  ValidVTextRule;
