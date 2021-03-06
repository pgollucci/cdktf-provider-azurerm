// https://www.terraform.io/docs/providers/azurerm/r/app_service_hybrid_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceHybridConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly appServiceName: string;
  readonly hostname: string;
  readonly port: number;
  readonly relayId: string;
  readonly resourceGroupName: string;
  readonly sendKeyName?: string;
  /** timeouts block */
  readonly timeouts?: AppServiceHybridConnectionTimeouts;
}
export interface AppServiceHybridConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServiceHybridConnectionTimeoutsToTerraform(struct?: AppServiceHybridConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceHybridConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceHybridConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_hybrid_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceName = config.appServiceName;
    this._hostname = config.hostname;
    this._port = config.port;
    this._relayId = config.relayId;
    this._resourceGroupName = config.resourceGroupName;
    this._sendKeyName = config.sendKeyName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_name - computed: false, optional: false, required: true
  private _appServiceName: string;
  public get appServiceName() {
    return this.getStringAttribute('app_service_name');
  }
  public set appServiceName(value: string) {
    this._appServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceNameInput() {
    return this._appServiceName
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // relay_id - computed: false, optional: false, required: true
  private _relayId: string;
  public get relayId() {
    return this.getStringAttribute('relay_id');
  }
  public set relayId(value: string) {
    this._relayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relayIdInput() {
    return this._relayId
  }

  // relay_name - computed: true, optional: false, required: false
  public get relayName() {
    return this.getStringAttribute('relay_name');
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

  // send_key_name - computed: false, optional: true, required: false
  private _sendKeyName?: string;
  public get sendKeyName() {
    return this.getStringAttribute('send_key_name');
  }
  public set sendKeyName(value: string ) {
    this._sendKeyName = value;
  }
  public resetSendKeyName() {
    this._sendKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendKeyNameInput() {
    return this._sendKeyName
  }

  // send_key_value - computed: true, optional: false, required: false
  public get sendKeyValue() {
    return this.getStringAttribute('send_key_value');
  }

  // service_bus_namespace - computed: true, optional: false, required: false
  public get serviceBusNamespace() {
    return this.getStringAttribute('service_bus_namespace');
  }

  // service_bus_suffix - computed: true, optional: false, required: false
  public get serviceBusSuffix() {
    return this.getStringAttribute('service_bus_suffix');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceHybridConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceHybridConnectionTimeouts ) {
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
      app_service_name: cdktf.stringToTerraform(this._appServiceName),
      hostname: cdktf.stringToTerraform(this._hostname),
      port: cdktf.numberToTerraform(this._port),
      relay_id: cdktf.stringToTerraform(this._relayId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      send_key_name: cdktf.stringToTerraform(this._sendKeyName),
      timeouts: appServiceHybridConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
