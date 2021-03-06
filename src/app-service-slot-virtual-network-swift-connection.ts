// https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_virtual_network_swift_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceSlotVirtualNetworkSwiftConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly appServiceId: string;
  readonly slotName: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: AppServiceSlotVirtualNetworkSwiftConnectionTimeouts;
}
export interface AppServiceSlotVirtualNetworkSwiftConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServiceSlotVirtualNetworkSwiftConnectionTimeoutsToTerraform(struct?: AppServiceSlotVirtualNetworkSwiftConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceSlotVirtualNetworkSwiftConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceSlotVirtualNetworkSwiftConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_slot_virtual_network_swift_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceId = config.appServiceId;
    this._slotName = config.slotName;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId: string;
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // slot_name - computed: false, optional: false, required: true
  private _slotName: string;
  public get slotName() {
    return this.getStringAttribute('slot_name');
  }
  public set slotName(value: string) {
    this._slotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNameInput() {
    return this._slotName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceSlotVirtualNetworkSwiftConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceSlotVirtualNetworkSwiftConnectionTimeouts ) {
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
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      slot_name: cdktf.stringToTerraform(this._slotName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: appServiceSlotVirtualNetworkSwiftConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
