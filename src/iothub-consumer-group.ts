// https://www.terraform.io/docs/providers/azurerm/r/iothub_consumer_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubConsumerGroupConfig extends cdktf.TerraformMetaArguments {
  readonly eventhubEndpointName: string;
  readonly iothubName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: IothubConsumerGroupTimeouts;
}
export interface IothubConsumerGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function iothubConsumerGroupTimeoutsToTerraform(struct?: IothubConsumerGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IothubConsumerGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubConsumerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_consumer_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubEndpointName = config.eventhubEndpointName;
    this._iothubName = config.iothubName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_endpoint_name - computed: false, optional: false, required: true
  private _eventhubEndpointName: string;
  public get eventhubEndpointName() {
    return this.getStringAttribute('eventhub_endpoint_name');
  }
  public set eventhubEndpointName(value: string) {
    this._eventhubEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubEndpointNameInput() {
    return this._eventhubEndpointName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this.getStringAttribute('iothub_name');
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNameInput() {
    return this._iothubName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubConsumerGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IothubConsumerGroupTimeouts ) {
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
      eventhub_endpoint_name: cdktf.stringToTerraform(this._eventhubEndpointName),
      iothub_name: cdktf.stringToTerraform(this._iothubName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: iothubConsumerGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
