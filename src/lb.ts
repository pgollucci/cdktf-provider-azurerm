// https://www.terraform.io/docs/providers/azurerm/r/lb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku?: string;
  readonly tags?: { [key: string]: string };
  /** frontend_ip_configuration block */
  readonly frontendIpConfiguration?: LbFrontendIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: LbTimeouts;
}
export interface LbFrontendIpConfiguration {
  readonly name: string;
  readonly privateIpAddress?: string;
  readonly privateIpAddressAllocation?: string;
  readonly privateIpAddressVersion?: string;
  readonly publicIpAddressId?: string;
  readonly publicIpPrefixId?: string;
  readonly subnetId?: string;
  readonly zones?: string[];
}

function lbFrontendIpConfigurationToTerraform(struct?: LbFrontendIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    private_ip_address_version: cdktf.stringToTerraform(struct!.privateIpAddressVersion),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    public_ip_prefix_id: cdktf.stringToTerraform(struct!.publicIpPrefixId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.zones),
  }
}

export interface LbTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function lbTimeoutsToTerraform(struct?: LbTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Lb extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb',
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
    this._sku = config.sku;
    this._tags = config.tags;
    this._frontendIpConfiguration = config.frontendIpConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
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

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string ) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // frontend_ip_configuration - computed: false, optional: true, required: false
  private _frontendIpConfiguration?: LbFrontendIpConfiguration[];
  public get frontendIpConfiguration() {
    return this.interpolationForAttribute('frontend_ip_configuration') as any;
  }
  public set frontendIpConfiguration(value: LbFrontendIpConfiguration[] ) {
    this._frontendIpConfiguration = value;
  }
  public resetFrontendIpConfiguration() {
    this._frontendIpConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationInput() {
    return this._frontendIpConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LbTimeouts ) {
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
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      frontend_ip_configuration: cdktf.listMapper(lbFrontendIpConfigurationToTerraform)(this._frontendIpConfiguration),
      timeouts: lbTimeoutsToTerraform(this._timeouts),
    };
  }
}
