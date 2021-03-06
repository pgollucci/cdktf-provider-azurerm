// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_client_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermClientConfigConfig extends cdktf.TerraformMetaArguments {
  /** timeouts block */
  readonly timeouts?: DataAzurermClientConfigTimeouts;
}
export interface DataAzurermClientConfigTimeouts {
  readonly read?: string;
}

function dataAzurermClientConfigTimeoutsToTerraform(struct?: DataAzurermClientConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermClientConfig extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermClientConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_client_config',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermClientConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermClientConfigTimeouts ) {
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
      timeouts: dataAzurermClientConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
