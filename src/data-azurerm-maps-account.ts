// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_maps_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMapsAccountConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DataAzurermMapsAccountTimeouts;
}
export interface DataAzurermMapsAccountTimeouts {
  readonly read?: string;
}

function dataAzurermMapsAccountTimeoutsToTerraform(struct?: DataAzurermMapsAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermMapsAccount extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermMapsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maps_account',
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
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
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

  // x_ms_client_id - computed: true, optional: false, required: false
  public get xMsClientId() {
    return this.getStringAttribute('x_ms_client_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMapsAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermMapsAccountTimeouts ) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: dataAzurermMapsAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
