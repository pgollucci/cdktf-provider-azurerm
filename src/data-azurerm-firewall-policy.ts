// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermFirewallPolicyTimeouts;
}
export class DataAzurermFirewallPolicyDns extends cdktf.ComplexComputedList {

  // network_rule_fqdn_enabled - computed: true, optional: false, required: false
  public get networkRuleFqdnEnabled() {
    return this.getBooleanAttribute('network_rule_fqdn_enabled');
  }

  // proxy_enabled - computed: true, optional: false, required: false
  public get proxyEnabled() {
    return this.getBooleanAttribute('proxy_enabled');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return this.getListAttribute('servers');
  }
}
export class DataAzurermFirewallPolicyThreatIntelligenceAllowlist extends cdktf.ComplexComputedList {

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export interface DataAzurermFirewallPolicyTimeouts {
  readonly read?: string;
}

function dataAzurermFirewallPolicyTimeoutsToTerraform(struct?: DataAzurermFirewallPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermFirewallPolicy extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_policy_id - computed: true, optional: false, required: false
  public get basePolicyId() {
    return this.getStringAttribute('base_policy_id');
  }

  // child_policies - computed: true, optional: false, required: false
  public get childPolicies() {
    return this.getListAttribute('child_policies');
  }

  // dns - computed: true, optional: false, required: false
  public dns(index: string) {
    return new DataAzurermFirewallPolicyDns(this, 'dns', index);
  }

  // firewalls - computed: true, optional: false, required: false
  public get firewalls() {
    return this.getListAttribute('firewalls');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rule_collection_groups - computed: true, optional: false, required: false
  public get ruleCollectionGroups() {
    return this.getListAttribute('rule_collection_groups');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // threat_intelligence_allowlist - computed: true, optional: false, required: false
  public threatIntelligenceAllowlist(index: string) {
    return new DataAzurermFirewallPolicyThreatIntelligenceAllowlist(this, 'threat_intelligence_allowlist', index);
  }

  // threat_intelligence_mode - computed: true, optional: false, required: false
  public get threatIntelligenceMode() {
    return this.getStringAttribute('threat_intelligence_mode');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermFirewallPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermFirewallPolicyTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermFirewallPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
