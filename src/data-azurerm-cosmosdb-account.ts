// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_cosmosdb_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermCosmosdbAccountConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermCosmosdbAccountTimeouts;
}
export class DataAzurermCosmosdbAccountCapabilities extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermCosmosdbAccountConsistencyPolicy extends cdktf.ComplexComputedList {

  // consistency_level - computed: true, optional: false, required: false
  public get consistencyLevel() {
    return this.getStringAttribute('consistency_level');
  }

  // max_interval_in_seconds - computed: true, optional: false, required: false
  public get maxIntervalInSeconds() {
    return this.getNumberAttribute('max_interval_in_seconds');
  }

  // max_staleness_prefix - computed: true, optional: false, required: false
  public get maxStalenessPrefix() {
    return this.getNumberAttribute('max_staleness_prefix');
  }
}
export class DataAzurermCosmosdbAccountGeoLocation extends cdktf.ComplexComputedList {

  // failover_priority - computed: true, optional: false, required: false
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }
}
export class DataAzurermCosmosdbAccountVirtualNetworkRule extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAzurermCosmosdbAccountTimeouts {
  readonly read?: string;
}

function dataAzurermCosmosdbAccountTimeoutsToTerraform(struct?: DataAzurermCosmosdbAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermCosmosdbAccount extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermCosmosdbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_account',
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

  // capabilities - computed: true, optional: false, required: false
  public capabilities(index: string) {
    return new DataAzurermCosmosdbAccountCapabilities(this, 'capabilities', index);
  }

  // consistency_policy - computed: true, optional: false, required: false
  public consistencyPolicy(index: string) {
    return new DataAzurermCosmosdbAccountConsistencyPolicy(this, 'consistency_policy', index);
  }

  // enable_automatic_failover - computed: true, optional: false, required: false
  public get enableAutomaticFailover() {
    return this.getBooleanAttribute('enable_automatic_failover');
  }

  // enable_free_tier - computed: true, optional: false, required: false
  public get enableFreeTier() {
    return this.getBooleanAttribute('enable_free_tier');
  }

  // enable_multiple_write_locations - computed: true, optional: false, required: false
  public get enableMultipleWriteLocations() {
    return this.getBooleanAttribute('enable_multiple_write_locations');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // geo_location - computed: true, optional: false, required: false
  public geoLocation(index: string) {
    return new DataAzurermCosmosdbAccountGeoLocation(this, 'geo_location', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_range_filter - computed: true, optional: false, required: false
  public get ipRangeFilter() {
    return this.getStringAttribute('ip_range_filter');
  }

  // is_virtual_network_filter_enabled - computed: true, optional: false, required: false
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled');
  }

  // key_vault_key_id - computed: true, optional: false, required: false
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // offer_type - computed: true, optional: false, required: false
  public get offerType() {
    return this.getStringAttribute('offer_type');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // primary_master_key - computed: true, optional: false, required: false
  public get primaryMasterKey() {
    return this.getStringAttribute('primary_master_key');
  }

  // primary_readonly_key - computed: true, optional: false, required: false
  public get primaryReadonlyKey() {
    return this.getStringAttribute('primary_readonly_key');
  }

  // primary_readonly_master_key - computed: true, optional: false, required: false
  public get primaryReadonlyMasterKey() {
    return this.getStringAttribute('primary_readonly_master_key');
  }

  // read_endpoints - computed: true, optional: false, required: false
  public get readEndpoints() {
    return this.getListAttribute('read_endpoints');
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

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // secondary_master_key - computed: true, optional: false, required: false
  public get secondaryMasterKey() {
    return this.getStringAttribute('secondary_master_key');
  }

  // secondary_readonly_key - computed: true, optional: false, required: false
  public get secondaryReadonlyKey() {
    return this.getStringAttribute('secondary_readonly_key');
  }

  // secondary_readonly_master_key - computed: true, optional: false, required: false
  public get secondaryReadonlyMasterKey() {
    return this.getStringAttribute('secondary_readonly_master_key');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // virtual_network_rule - computed: true, optional: false, required: false
  public virtualNetworkRule(index: string) {
    return new DataAzurermCosmosdbAccountVirtualNetworkRule(this, 'virtual_network_rule', index);
  }

  // write_endpoints - computed: true, optional: false, required: false
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermCosmosdbAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermCosmosdbAccountTimeouts ) {
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
      timeouts: dataAzurermCosmosdbAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
