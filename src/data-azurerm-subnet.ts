// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSubnetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly virtualNetworkName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSubnetTimeouts;
}
export interface DataAzurermSubnetTimeouts {
  readonly read?: string;
}

function dataAzurermSubnetTimeoutsToTerraform(struct?: DataAzurermSubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermSubnet extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet',
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
    this._virtualNetworkName = config.virtualNetworkName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: true, optional: false, required: false
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }

  // address_prefixes - computed: true, optional: false, required: false
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }

  // enforce_private_link_endpoint_network_policies - computed: true, optional: false, required: false
  public get enforcePrivateLinkEndpointNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_endpoint_network_policies');
  }

  // enforce_private_link_service_network_policies - computed: true, optional: false, required: false
  public get enforcePrivateLinkServiceNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_service_network_policies');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_security_group_id - computed: true, optional: false, required: false
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
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

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // service_endpoints - computed: true, optional: false, required: false
  public get serviceEndpoints() {
    return this.getListAttribute('service_endpoints');
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName: string;
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSubnetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermSubnetTimeouts ) {
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
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      timeouts: dataAzurermSubnetTimeoutsToTerraform(this._timeouts),
    };
  }
}
