// https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkWatcherFlowLogConfig extends cdktf.TerraformMetaArguments {
  readonly enabled: boolean;
  readonly networkSecurityGroupId: string;
  readonly networkWatcherName: string;
  readonly resourceGroupName: string;
  readonly storageAccountId: string;
  readonly version?: number;
  /** retention_policy block */
  readonly retentionPolicy: NetworkWatcherFlowLogRetentionPolicy[];
  /** timeouts block */
  readonly timeouts?: NetworkWatcherFlowLogTimeouts;
  /** traffic_analytics block */
  readonly trafficAnalytics?: NetworkWatcherFlowLogTrafficAnalytics[];
}
export interface NetworkWatcherFlowLogRetentionPolicy {
  readonly days: number;
  readonly enabled: boolean;
}

function networkWatcherFlowLogRetentionPolicyToTerraform(struct?: NetworkWatcherFlowLogRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface NetworkWatcherFlowLogTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function networkWatcherFlowLogTimeoutsToTerraform(struct?: NetworkWatcherFlowLogTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface NetworkWatcherFlowLogTrafficAnalytics {
  readonly enabled: boolean;
  readonly intervalInMinutes?: number;
  readonly workspaceId: string;
  readonly workspaceRegion: string;
  readonly workspaceResourceId: string;
}

function networkWatcherFlowLogTrafficAnalyticsToTerraform(struct?: NetworkWatcherFlowLogTrafficAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_in_minutes: cdktf.numberToTerraform(struct!.intervalInMinutes),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_region: cdktf.stringToTerraform(struct!.workspaceRegion),
    workspace_resource_id: cdktf.stringToTerraform(struct!.workspaceResourceId),
  }
}


// Resource

export class NetworkWatcherFlowLog extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkWatcherFlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_watcher_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._networkWatcherName = config.networkWatcherName;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._version = config.version;
    this._retentionPolicy = config.retentionPolicy;
    this._timeouts = config.timeouts;
    this._trafficAnalytics = config.trafficAnalytics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId: string;
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdInput() {
    return this._networkSecurityGroupId
  }

  // network_watcher_name - computed: false, optional: false, required: true
  private _networkWatcherName: string;
  public get networkWatcherName() {
    return this.getStringAttribute('network_watcher_name');
  }
  public set networkWatcherName(value: string) {
    this._networkWatcherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherNameInput() {
    return this._networkWatcherName
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // retention_policy - computed: false, optional: false, required: true
  private _retentionPolicy: NetworkWatcherFlowLogRetentionPolicy[];
  public get retentionPolicy() {
    return this.interpolationForAttribute('retention_policy') as any;
  }
  public set retentionPolicy(value: NetworkWatcherFlowLogRetentionPolicy[]) {
    this._retentionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkWatcherFlowLogTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkWatcherFlowLogTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // traffic_analytics - computed: false, optional: true, required: false
  private _trafficAnalytics?: NetworkWatcherFlowLogTrafficAnalytics[];
  public get trafficAnalytics() {
    return this.interpolationForAttribute('traffic_analytics') as any;
  }
  public set trafficAnalytics(value: NetworkWatcherFlowLogTrafficAnalytics[] ) {
    this._trafficAnalytics = value;
  }
  public resetTrafficAnalytics() {
    this._trafficAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficAnalyticsInput() {
    return this._trafficAnalytics
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      network_security_group_id: cdktf.stringToTerraform(this._networkSecurityGroupId),
      network_watcher_name: cdktf.stringToTerraform(this._networkWatcherName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      version: cdktf.numberToTerraform(this._version),
      retention_policy: cdktf.listMapper(networkWatcherFlowLogRetentionPolicyToTerraform)(this._retentionPolicy),
      timeouts: networkWatcherFlowLogTimeoutsToTerraform(this._timeouts),
      traffic_analytics: cdktf.listMapper(networkWatcherFlowLogTrafficAnalyticsToTerraform)(this._trafficAnalytics),
    };
  }
}
