// https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestWindowsVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  readonly allowClaim?: boolean;
  readonly disallowPublicIpAddress?: boolean;
  readonly labName: string;
  readonly labSubnetName: string;
  readonly labVirtualNetworkId: string;
  readonly location: string;
  readonly name: string;
  readonly notes?: string;
  readonly password: string;
  readonly resourceGroupName: string;
  readonly size: string;
  readonly storageType: string;
  readonly tags?: { [key: string]: string };
  readonly username: string;
  /** gallery_image_reference block */
  readonly galleryImageReference: DevTestWindowsVirtualMachineGalleryImageReference[];
  /** inbound_nat_rule block */
  readonly inboundNatRule?: DevTestWindowsVirtualMachineInboundNatRule[];
  /** timeouts block */
  readonly timeouts?: DevTestWindowsVirtualMachineTimeouts;
}
export interface DevTestWindowsVirtualMachineGalleryImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}

function devTestWindowsVirtualMachineGalleryImageReferenceToTerraform(struct?: DevTestWindowsVirtualMachineGalleryImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface DevTestWindowsVirtualMachineInboundNatRule {
  readonly backendPort: number;
  readonly protocol: string;
}

function devTestWindowsVirtualMachineInboundNatRuleToTerraform(struct?: DevTestWindowsVirtualMachineInboundNatRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface DevTestWindowsVirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function devTestWindowsVirtualMachineTimeoutsToTerraform(struct?: DevTestWindowsVirtualMachineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DevTestWindowsVirtualMachine extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevTestWindowsVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_windows_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowClaim = config.allowClaim;
    this._disallowPublicIpAddress = config.disallowPublicIpAddress;
    this._labName = config.labName;
    this._labSubnetName = config.labSubnetName;
    this._labVirtualNetworkId = config.labVirtualNetworkId;
    this._location = config.location;
    this._name = config.name;
    this._notes = config.notes;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._size = config.size;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._username = config.username;
    this._galleryImageReference = config.galleryImageReference;
    this._inboundNatRule = config.inboundNatRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_claim - computed: false, optional: true, required: false
  private _allowClaim?: boolean;
  public get allowClaim() {
    return this.getBooleanAttribute('allow_claim');
  }
  public set allowClaim(value: boolean ) {
    this._allowClaim = value;
  }
  public resetAllowClaim() {
    this._allowClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClaimInput() {
    return this._allowClaim
  }

  // disallow_public_ip_address - computed: false, optional: true, required: false
  private _disallowPublicIpAddress?: boolean;
  public get disallowPublicIpAddress() {
    return this.getBooleanAttribute('disallow_public_ip_address');
  }
  public set disallowPublicIpAddress(value: boolean ) {
    this._disallowPublicIpAddress = value;
  }
  public resetDisallowPublicIpAddress() {
    this._disallowPublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowPublicIpAddressInput() {
    return this._disallowPublicIpAddress
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName: string;
  public get labName() {
    return this.getStringAttribute('lab_name');
  }
  public set labName(value: string) {
    this._labName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labNameInput() {
    return this._labName
  }

  // lab_subnet_name - computed: false, optional: false, required: true
  private _labSubnetName: string;
  public get labSubnetName() {
    return this.getStringAttribute('lab_subnet_name');
  }
  public set labSubnetName(value: string) {
    this._labSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labSubnetNameInput() {
    return this._labSubnetName
  }

  // lab_virtual_network_id - computed: false, optional: false, required: true
  private _labVirtualNetworkId: string;
  public get labVirtualNetworkId() {
    return this.getStringAttribute('lab_virtual_network_id');
  }
  public set labVirtualNetworkId(value: string) {
    this._labVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labVirtualNetworkIdInput() {
    return this._labVirtualNetworkId
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string;
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string ) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
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

  // size - computed: false, optional: false, required: true
  private _size: string;
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType: string;
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType
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

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // gallery_image_reference - computed: false, optional: false, required: true
  private _galleryImageReference: DevTestWindowsVirtualMachineGalleryImageReference[];
  public get galleryImageReference() {
    return this.interpolationForAttribute('gallery_image_reference') as any;
  }
  public set galleryImageReference(value: DevTestWindowsVirtualMachineGalleryImageReference[]) {
    this._galleryImageReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryImageReferenceInput() {
    return this._galleryImageReference
  }

  // inbound_nat_rule - computed: false, optional: true, required: false
  private _inboundNatRule?: DevTestWindowsVirtualMachineInboundNatRule[];
  public get inboundNatRule() {
    return this.interpolationForAttribute('inbound_nat_rule') as any;
  }
  public set inboundNatRule(value: DevTestWindowsVirtualMachineInboundNatRule[] ) {
    this._inboundNatRule = value;
  }
  public resetInboundNatRule() {
    this._inboundNatRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNatRuleInput() {
    return this._inboundNatRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestWindowsVirtualMachineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DevTestWindowsVirtualMachineTimeouts ) {
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
      allow_claim: cdktf.booleanToTerraform(this._allowClaim),
      disallow_public_ip_address: cdktf.booleanToTerraform(this._disallowPublicIpAddress),
      lab_name: cdktf.stringToTerraform(this._labName),
      lab_subnet_name: cdktf.stringToTerraform(this._labSubnetName),
      lab_virtual_network_id: cdktf.stringToTerraform(this._labVirtualNetworkId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      password: cdktf.stringToTerraform(this._password),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      size: cdktf.stringToTerraform(this._size),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      username: cdktf.stringToTerraform(this._username),
      gallery_image_reference: cdktf.listMapper(devTestWindowsVirtualMachineGalleryImageReferenceToTerraform)(this._galleryImageReference),
      inbound_nat_rule: cdktf.listMapper(devTestWindowsVirtualMachineInboundNatRuleToTerraform)(this._inboundNatRule),
      timeouts: devTestWindowsVirtualMachineTimeoutsToTerraform(this._timeouts),
    };
  }
}
