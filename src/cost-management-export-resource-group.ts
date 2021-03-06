// https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostManagementExportResourceGroupConfig extends cdktf.TerraformMetaArguments {
  readonly active?: boolean;
  readonly name: string;
  readonly recurrencePeriodEnd: string;
  readonly recurrencePeriodStart: string;
  readonly recurrenceType: string;
  readonly resourceGroupId: string;
  /** delivery_info block */
  readonly deliveryInfo: CostManagementExportResourceGroupDeliveryInfo[];
  /** query block */
  readonly query: CostManagementExportResourceGroupQuery[];
  /** timeouts block */
  readonly timeouts?: CostManagementExportResourceGroupTimeouts;
}
export interface CostManagementExportResourceGroupDeliveryInfo {
  readonly containerName: string;
  readonly rootFolderPath: string;
  readonly storageAccountId: string;
}

function costManagementExportResourceGroupDeliveryInfoToTerraform(struct?: CostManagementExportResourceGroupDeliveryInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    root_folder_path: cdktf.stringToTerraform(struct!.rootFolderPath),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface CostManagementExportResourceGroupQuery {
  readonly timeFrame: string;
  readonly type: string;
}

function costManagementExportResourceGroupQueryToTerraform(struct?: CostManagementExportResourceGroupQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    time_frame: cdktf.stringToTerraform(struct!.timeFrame),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CostManagementExportResourceGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function costManagementExportResourceGroupTimeoutsToTerraform(struct?: CostManagementExportResourceGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CostManagementExportResourceGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CostManagementExportResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cost_management_export_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._name = config.name;
    this._recurrencePeriodEnd = config.recurrencePeriodEnd;
    this._recurrencePeriodStart = config.recurrencePeriodStart;
    this._recurrenceType = config.recurrenceType;
    this._resourceGroupId = config.resourceGroupId;
    this._deliveryInfo = config.deliveryInfo;
    this._query = config.query;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean;
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean ) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recurrence_period_end - computed: false, optional: false, required: true
  private _recurrencePeriodEnd: string;
  public get recurrencePeriodEnd() {
    return this.getStringAttribute('recurrence_period_end');
  }
  public set recurrencePeriodEnd(value: string) {
    this._recurrencePeriodEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodEndInput() {
    return this._recurrencePeriodEnd
  }

  // recurrence_period_start - computed: false, optional: false, required: true
  private _recurrencePeriodStart: string;
  public get recurrencePeriodStart() {
    return this.getStringAttribute('recurrence_period_start');
  }
  public set recurrencePeriodStart(value: string) {
    this._recurrencePeriodStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodStartInput() {
    return this._recurrencePeriodStart
  }

  // recurrence_type - computed: false, optional: false, required: true
  private _recurrenceType: string;
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId: string;
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId
  }

  // delivery_info - computed: false, optional: false, required: true
  private _deliveryInfo: CostManagementExportResourceGroupDeliveryInfo[];
  public get deliveryInfo() {
    return this.interpolationForAttribute('delivery_info') as any;
  }
  public set deliveryInfo(value: CostManagementExportResourceGroupDeliveryInfo[]) {
    this._deliveryInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryInfoInput() {
    return this._deliveryInfo
  }

  // query - computed: false, optional: false, required: true
  private _query: CostManagementExportResourceGroupQuery[];
  public get query() {
    return this.interpolationForAttribute('query') as any;
  }
  public set query(value: CostManagementExportResourceGroupQuery[]) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CostManagementExportResourceGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CostManagementExportResourceGroupTimeouts ) {
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
      active: cdktf.booleanToTerraform(this._active),
      name: cdktf.stringToTerraform(this._name),
      recurrence_period_end: cdktf.stringToTerraform(this._recurrencePeriodEnd),
      recurrence_period_start: cdktf.stringToTerraform(this._recurrencePeriodStart),
      recurrence_type: cdktf.stringToTerraform(this._recurrenceType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      delivery_info: cdktf.listMapper(costManagementExportResourceGroupDeliveryInfoToTerraform)(this._deliveryInfo),
      query: cdktf.listMapper(costManagementExportResourceGroupQueryToTerraform)(this._query),
      timeouts: costManagementExportResourceGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
