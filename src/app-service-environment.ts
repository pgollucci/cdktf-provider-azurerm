// https://www.terraform.io/docs/providers/azurerm/r/app_service_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceEnvironmentConfig extends cdktf.TerraformMetaArguments {
  readonly allowedUserIpCidrs?: string[];
  readonly frontEndScaleFactor?: number;
  readonly internalLoadBalancingMode?: string;
  readonly name: string;
  readonly pricingTier?: string;
  readonly resourceGroupName?: string;
  readonly subnetId: string;
  readonly tags?: { [key: string]: string };
  readonly userWhitelistedIpRanges?: string[];
  /** timeouts block */
  readonly timeouts?: AppServiceEnvironmentTimeouts;
}
export interface AppServiceEnvironmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServiceEnvironmentTimeoutsToTerraform(struct?: AppServiceEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedUserIpCidrs = config.allowedUserIpCidrs;
    this._frontEndScaleFactor = config.frontEndScaleFactor;
    this._internalLoadBalancingMode = config.internalLoadBalancingMode;
    this._name = config.name;
    this._pricingTier = config.pricingTier;
    this._resourceGroupName = config.resourceGroupName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._userWhitelistedIpRanges = config.userWhitelistedIpRanges;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_user_ip_cidrs - computed: true, optional: true, required: false
  private _allowedUserIpCidrs?: string[];
  public get allowedUserIpCidrs() {
    return this.getListAttribute('allowed_user_ip_cidrs');
  }
  public set allowedUserIpCidrs(value: string[]) {
    this._allowedUserIpCidrs = value;
  }
  public resetAllowedUserIpCidrs() {
    this._allowedUserIpCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUserIpCidrsInput() {
    return this._allowedUserIpCidrs
  }

  // front_end_scale_factor - computed: false, optional: true, required: false
  private _frontEndScaleFactor?: number;
  public get frontEndScaleFactor() {
    return this.getNumberAttribute('front_end_scale_factor');
  }
  public set frontEndScaleFactor(value: number ) {
    this._frontEndScaleFactor = value;
  }
  public resetFrontEndScaleFactor() {
    this._frontEndScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontEndScaleFactorInput() {
    return this._frontEndScaleFactor
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_load_balancing_mode - computed: false, optional: true, required: false
  private _internalLoadBalancingMode?: string;
  public get internalLoadBalancingMode() {
    return this.getStringAttribute('internal_load_balancing_mode');
  }
  public set internalLoadBalancingMode(value: string ) {
    this._internalLoadBalancingMode = value;
  }
  public resetInternalLoadBalancingMode() {
    this._internalLoadBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancingModeInput() {
    return this._internalLoadBalancingMode
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // pricing_tier - computed: false, optional: true, required: false
  private _pricingTier?: string;
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
  }
  public set pricingTier(value: string ) {
    this._pricingTier = value;
  }
  public resetPricingTier() {
    this._pricingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingTierInput() {
    return this._pricingTier
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // user_whitelisted_ip_ranges - computed: true, optional: true, required: false
  private _userWhitelistedIpRanges?: string[];
  public get userWhitelistedIpRanges() {
    return this.getListAttribute('user_whitelisted_ip_ranges');
  }
  public set userWhitelistedIpRanges(value: string[]) {
    this._userWhitelistedIpRanges = value;
  }
  public resetUserWhitelistedIpRanges() {
    this._userWhitelistedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userWhitelistedIpRangesInput() {
    return this._userWhitelistedIpRanges
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceEnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceEnvironmentTimeouts ) {
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
      allowed_user_ip_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedUserIpCidrs),
      front_end_scale_factor: cdktf.numberToTerraform(this._frontEndScaleFactor),
      internal_load_balancing_mode: cdktf.stringToTerraform(this._internalLoadBalancingMode),
      name: cdktf.stringToTerraform(this._name),
      pricing_tier: cdktf.stringToTerraform(this._pricingTier),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_whitelisted_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._userWhitelistedIpRanges),
      timeouts: appServiceEnvironmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
