// https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedImageVersionConfig extends cdktf.TerraformMetaArguments {
  readonly excludeFromLatest?: boolean;
  readonly galleryName: string;
  readonly imageName: string;
  readonly location: string;
  readonly managedImageId?: string;
  readonly name: string;
  readonly osDiskSnapshotId?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** target_region block */
  readonly targetRegion: SharedImageVersionTargetRegion[];
  /** timeouts block */
  readonly timeouts?: SharedImageVersionTimeouts;
}
export interface SharedImageVersionTargetRegion {
  readonly name: string;
  readonly regionalReplicaCount: number;
  readonly storageAccountType?: string;
}

function sharedImageVersionTargetRegionToTerraform(struct?: SharedImageVersionTargetRegion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regional_replica_count: cdktf.numberToTerraform(struct!.regionalReplicaCount),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
  }
}

export interface SharedImageVersionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function sharedImageVersionTimeoutsToTerraform(struct?: SharedImageVersionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SharedImageVersion extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SharedImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image_version',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._excludeFromLatest = config.excludeFromLatest;
    this._galleryName = config.galleryName;
    this._imageName = config.imageName;
    this._location = config.location;
    this._managedImageId = config.managedImageId;
    this._name = config.name;
    this._osDiskSnapshotId = config.osDiskSnapshotId;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._targetRegion = config.targetRegion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_from_latest - computed: false, optional: true, required: false
  private _excludeFromLatest?: boolean;
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest');
  }
  public set excludeFromLatest(value: boolean ) {
    this._excludeFromLatest = value;
  }
  public resetExcludeFromLatest() {
    this._excludeFromLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLatestInput() {
    return this._excludeFromLatest
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName: string;
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName: string;
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName
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

  // managed_image_id - computed: false, optional: true, required: false
  private _managedImageId?: string;
  public get managedImageId() {
    return this.getStringAttribute('managed_image_id');
  }
  public set managedImageId(value: string ) {
    this._managedImageId = value;
  }
  public resetManagedImageId() {
    this._managedImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedImageIdInput() {
    return this._managedImageId
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

  // os_disk_snapshot_id - computed: false, optional: true, required: false
  private _osDiskSnapshotId?: string;
  public get osDiskSnapshotId() {
    return this.getStringAttribute('os_disk_snapshot_id');
  }
  public set osDiskSnapshotId(value: string ) {
    this._osDiskSnapshotId = value;
  }
  public resetOsDiskSnapshotId() {
    this._osDiskSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSnapshotIdInput() {
    return this._osDiskSnapshotId
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

  // target_region - computed: false, optional: false, required: true
  private _targetRegion: SharedImageVersionTargetRegion[];
  public get targetRegion() {
    return this.interpolationForAttribute('target_region') as any;
  }
  public set targetRegion(value: SharedImageVersionTargetRegion[]) {
    this._targetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SharedImageVersionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SharedImageVersionTimeouts ) {
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
      exclude_from_latest: cdktf.booleanToTerraform(this._excludeFromLatest),
      gallery_name: cdktf.stringToTerraform(this._galleryName),
      image_name: cdktf.stringToTerraform(this._imageName),
      location: cdktf.stringToTerraform(this._location),
      managed_image_id: cdktf.stringToTerraform(this._managedImageId),
      name: cdktf.stringToTerraform(this._name),
      os_disk_snapshot_id: cdktf.stringToTerraform(this._osDiskSnapshotId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_region: cdktf.listMapper(sharedImageVersionTargetRegionToTerraform)(this._targetRegion),
      timeouts: sharedImageVersionTimeoutsToTerraform(this._timeouts),
    };
  }
}
