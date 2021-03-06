// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly customBlockResponseBody?: string;
  readonly customBlockResponseStatusCode?: number;
  readonly enabled?: boolean;
  readonly mode?: string;
  readonly name: string;
  readonly redirectUrl?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** custom_rule block */
  readonly customRule?: FrontdoorFirewallPolicyCustomRule[];
  /** managed_rule block */
  readonly managedRule?: FrontdoorFirewallPolicyManagedRule[];
  /** timeouts block */
  readonly timeouts?: FrontdoorFirewallPolicyTimeouts;
}
export interface FrontdoorFirewallPolicyCustomRuleMatchCondition {
  readonly matchValues: string[];
  readonly matchVariable: string;
  readonly negationCondition?: boolean;
  readonly operator: string;
  readonly selector?: string;
  readonly transforms?: string[];
}

function frontdoorFirewallPolicyCustomRuleMatchConditionToTerraform(struct?: FrontdoorFirewallPolicyCustomRuleMatchCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    negation_condition: cdktf.booleanToTerraform(struct!.negationCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface FrontdoorFirewallPolicyCustomRule {
  readonly action: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly priority?: number;
  readonly rateLimitDurationInMinutes?: number;
  readonly rateLimitThreshold?: number;
  readonly type: string;
  /** match_condition block */
  readonly matchCondition?: FrontdoorFirewallPolicyCustomRuleMatchCondition[];
}

function frontdoorFirewallPolicyCustomRuleToTerraform(struct?: FrontdoorFirewallPolicyCustomRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rate_limit_duration_in_minutes: cdktf.numberToTerraform(struct!.rateLimitDurationInMinutes),
    rate_limit_threshold: cdktf.numberToTerraform(struct!.rateLimitThreshold),
    type: cdktf.stringToTerraform(struct!.type),
    match_condition: cdktf.listMapper(frontdoorFirewallPolicyCustomRuleMatchConditionToTerraform)(struct!.matchCondition),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleExclusion {
  readonly matchVariable: string;
  readonly operator: string;
  readonly selector: string;
}

function frontdoorFirewallPolicyManagedRuleExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverrideExclusion {
  readonly matchVariable: string;
  readonly operator: string;
  readonly selector: string;
}

function frontdoorFirewallPolicyManagedRuleOverrideExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion {
  readonly matchVariable: string;
  readonly operator: string;
  readonly selector: string;
}

function frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverrideRule {
  readonly action: string;
  readonly enabled?: boolean;
  readonly ruleId: string;
  /** exclusion block */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
}

function frontdoorFirewallPolicyManagedRuleOverrideRuleToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToTerraform)(struct!.exclusion),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverride {
  readonly ruleGroupName: string;
  /** exclusion block */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
  /** rule block */
  readonly rule?: FrontdoorFirewallPolicyManagedRuleOverrideRule[];
}

function frontdoorFirewallPolicyManagedRuleOverrideToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverride): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideExclusionToTerraform)(struct!.exclusion),
    rule: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideRuleToTerraform)(struct!.rule),
  }
}

export interface FrontdoorFirewallPolicyManagedRule {
  readonly type: string;
  readonly version: string;
  /** exclusion block */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleExclusion[];
  /** override block */
  readonly override?: FrontdoorFirewallPolicyManagedRuleOverride[];
}

function frontdoorFirewallPolicyManagedRuleToTerraform(struct?: FrontdoorFirewallPolicyManagedRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleExclusionToTerraform)(struct!.exclusion),
    override: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideToTerraform)(struct!.override),
  }
}

export interface FrontdoorFirewallPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function frontdoorFirewallPolicyTimeoutsToTerraform(struct?: FrontdoorFirewallPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FrontdoorFirewallPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FrontdoorFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customBlockResponseBody = config.customBlockResponseBody;
    this._customBlockResponseStatusCode = config.customBlockResponseStatusCode;
    this._enabled = config.enabled;
    this._mode = config.mode;
    this._name = config.name;
    this._redirectUrl = config.redirectUrl;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._customRule = config.customRule;
    this._managedRule = config.managedRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_block_response_body - computed: false, optional: true, required: false
  private _customBlockResponseBody?: string;
  public get customBlockResponseBody() {
    return this.getStringAttribute('custom_block_response_body');
  }
  public set customBlockResponseBody(value: string ) {
    this._customBlockResponseBody = value;
  }
  public resetCustomBlockResponseBody() {
    this._customBlockResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseBodyInput() {
    return this._customBlockResponseBody
  }

  // custom_block_response_status_code - computed: false, optional: true, required: false
  private _customBlockResponseStatusCode?: number;
  public get customBlockResponseStatusCode() {
    return this.getNumberAttribute('custom_block_response_status_code');
  }
  public set customBlockResponseStatusCode(value: number ) {
    this._customBlockResponseStatusCode = value;
  }
  public resetCustomBlockResponseStatusCode() {
    this._customBlockResponseStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseStatusCodeInput() {
    return this._customBlockResponseStatusCode
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // frontend_endpoint_ids - computed: true, optional: false, required: false
  public get frontendEndpointIds() {
    return this.getListAttribute('frontend_endpoint_ids');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string ) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string;
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string ) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // custom_rule - computed: false, optional: true, required: false
  private _customRule?: FrontdoorFirewallPolicyCustomRule[];
  public get customRule() {
    return this.interpolationForAttribute('custom_rule') as any;
  }
  public set customRule(value: FrontdoorFirewallPolicyCustomRule[] ) {
    this._customRule = value;
  }
  public resetCustomRule() {
    this._customRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule
  }

  // managed_rule - computed: false, optional: true, required: false
  private _managedRule?: FrontdoorFirewallPolicyManagedRule[];
  public get managedRule() {
    return this.interpolationForAttribute('managed_rule') as any;
  }
  public set managedRule(value: FrontdoorFirewallPolicyManagedRule[] ) {
    this._managedRule = value;
  }
  public resetManagedRule() {
    this._managedRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleInput() {
    return this._managedRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FrontdoorFirewallPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FrontdoorFirewallPolicyTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_block_response_body: cdktf.stringToTerraform(this._customBlockResponseBody),
      custom_block_response_status_code: cdktf.numberToTerraform(this._customBlockResponseStatusCode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      custom_rule: cdktf.listMapper(frontdoorFirewallPolicyCustomRuleToTerraform)(this._customRule),
      managed_rule: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleToTerraform)(this._managedRule),
      timeouts: frontdoorFirewallPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
