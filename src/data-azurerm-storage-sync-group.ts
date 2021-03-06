// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_sync_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageSyncGroupConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly storageSyncId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermStorageSyncGroupTimeouts;
}
export interface DataAzurermStorageSyncGroupTimeouts {
  readonly read?: string;
}

function dataAzurermStorageSyncGroupTimeoutsToTerraform(struct?: DataAzurermStorageSyncGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermStorageSyncGroup extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermStorageSyncGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_sync_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._storageSyncId = config.storageSyncId;
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

  // storage_sync_id - computed: false, optional: false, required: true
  private _storageSyncId: string;
  public get storageSyncId() {
    return this.getStringAttribute('storage_sync_id');
  }
  public set storageSyncId(value: string) {
    this._storageSyncId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSyncIdInput() {
    return this._storageSyncId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageSyncGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermStorageSyncGroupTimeouts ) {
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
      storage_sync_id: cdktf.stringToTerraform(this._storageSyncId),
      timeouts: dataAzurermStorageSyncGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
