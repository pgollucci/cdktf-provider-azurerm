// https://www.terraform.io/docs/providers/azurerm/r/network_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkProfileConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** container_network_interface block */
  readonly containerNetworkInterface: NetworkProfileContainerNetworkInterface[];
  /** timeouts block */
  readonly timeouts?: NetworkProfileTimeouts;
}
export interface NetworkProfileContainerNetworkInterfaceIpConfiguration {
  readonly name: string;
  readonly subnetId: string;
}

function networkProfileContainerNetworkInterfaceIpConfigurationToTerraform(struct?: NetworkProfileContainerNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface NetworkProfileContainerNetworkInterface {
  readonly name: string;
  /** ip_configuration block */
  readonly ipConfiguration: NetworkProfileContainerNetworkInterfaceIpConfiguration[];
}

function networkProfileContainerNetworkInterfaceToTerraform(struct?: NetworkProfileContainerNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ip_configuration: cdktf.listMapper(networkProfileContainerNetworkInterfaceIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface NetworkProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function networkProfileTimeoutsToTerraform(struct?: NetworkProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class NetworkProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._containerNetworkInterface = config.containerNetworkInterface;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_network_interface_ids - computed: true, optional: false, required: false
  public get containerNetworkInterfaceIds() {
    return this.getListAttribute('container_network_interface_ids');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // container_network_interface - computed: false, optional: false, required: true
  private _containerNetworkInterface: NetworkProfileContainerNetworkInterface[];
  public get containerNetworkInterface() {
    return this.interpolationForAttribute('container_network_interface') as any;
  }
  public set containerNetworkInterface(value: NetworkProfileContainerNetworkInterface[]) {
    this._containerNetworkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNetworkInterfaceInput() {
    return this._containerNetworkInterface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkProfileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkProfileTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      container_network_interface: cdktf.listMapper(networkProfileContainerNetworkInterfaceToTerraform)(this._containerNetworkInterface),
      timeouts: networkProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
