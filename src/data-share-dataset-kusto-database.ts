// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataShareDatasetKustoDatabaseConfig extends cdktf.TerraformMetaArguments {
  readonly kustoDatabaseId: string;
  readonly name: string;
  readonly shareId: string;
  /** timeouts block */
  readonly timeouts?: DataShareDatasetKustoDatabaseTimeouts;
}
export interface DataShareDatasetKustoDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function dataShareDatasetKustoDatabaseTimeoutsToTerraform(struct?: DataShareDatasetKustoDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataShareDatasetKustoDatabase extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataShareDatasetKustoDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_kusto_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kustoDatabaseId = config.kustoDatabaseId;
    this._name = config.name;
    this._shareId = config.shareId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kusto_cluster_location - computed: true, optional: false, required: false
  public get kustoClusterLocation() {
    return this.getStringAttribute('kusto_cluster_location');
  }

  // kusto_database_id - computed: false, optional: false, required: true
  private _kustoDatabaseId: string;
  public get kustoDatabaseId() {
    return this.getStringAttribute('kusto_database_id');
  }
  public set kustoDatabaseId(value: string) {
    this._kustoDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoDatabaseIdInput() {
    return this._kustoDatabaseId
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

  // share_id - computed: false, optional: false, required: true
  private _shareId: string;
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareDatasetKustoDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataShareDatasetKustoDatabaseTimeouts ) {
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
      kusto_database_id: cdktf.stringToTerraform(this._kustoDatabaseId),
      name: cdktf.stringToTerraform(this._name),
      share_id: cdktf.stringToTerraform(this._shareId),
      timeouts: dataShareDatasetKustoDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
