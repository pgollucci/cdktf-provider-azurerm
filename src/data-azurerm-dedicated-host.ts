// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_dedicated_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDedicatedHostConfig extends cdktf.TerraformMetaArguments {
  readonly dedicatedHostGroupName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDedicatedHostTimeouts;
}
export interface DataAzurermDedicatedHostTimeouts {
  readonly read?: string;
}

function dataAzurermDedicatedHostTimeoutsToTerraform(struct?: DataAzurermDedicatedHostTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermDedicatedHost extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDedicatedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dedicated_host',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dedicatedHostGroupName = config.dedicatedHostGroupName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_host_group_name - computed: false, optional: false, required: true
  private _dedicatedHostGroupName: string;
  public get dedicatedHostGroupName() {
    return this.getStringAttribute('dedicated_host_group_name');
  }
  public set dedicatedHostGroupName(value: string) {
    this._dedicatedHostGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostGroupNameInput() {
    return this._dedicatedHostGroupName
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDedicatedHostTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermDedicatedHostTimeouts ) {
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
      dedicated_host_group_name: cdktf.stringToTerraform(this._dedicatedHostGroupName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermDedicatedHostTimeoutsToTerraform(this._timeouts),
    };
  }
}
