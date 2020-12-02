// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_management_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermManagementGroupConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly groupId?: string;
  readonly name?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermManagementGroupTimeouts;
}
export interface DataAzurermManagementGroupTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermManagementGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermManagementGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_management_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._groupId = config.groupId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string;
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parent_management_group_id - computed: true, optional: false, required: false
  public get parentManagementGroupId() {
    return this.getStringAttribute('parent_management_group_id');
  }

  // subscription_ids - computed: true, optional: false, required: false
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermManagementGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermManagementGroupTimeouts ) {
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
      display_name: this._displayName,
      group_id: this._groupId,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
