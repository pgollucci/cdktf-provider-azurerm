// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_mysql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMysqlServerConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermMysqlServerTimeouts;
}
export class DataAzurermMysqlServerIdentity extends cdktf.ComplexComputedList {

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzurermMysqlServerThreatDetectionPolicy extends cdktf.ComplexComputedList {

  // disabled_alerts - computed: true, optional: false, required: false
  public get disabledAlerts() {
    return this.getListAttribute('disabled_alerts');
  }

  // email_account_admins - computed: true, optional: false, required: false
  public get emailAccountAdmins() {
    return this.getBooleanAttribute('email_account_admins');
  }

  // email_addresses - computed: true, optional: false, required: false
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }

  // storage_account_access_key - computed: true, optional: false, required: false
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }

  // storage_endpoint - computed: true, optional: false, required: false
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
}
export interface DataAzurermMysqlServerTimeouts {
  readonly read?: string;
}

function dataAzurermMysqlServerTimeoutsToTerraform(struct?: DataAzurermMysqlServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermMysqlServer extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermMysqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mysql_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: false, required: false
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }

  // auto_grow_enabled - computed: true, optional: false, required: false
  public get autoGrowEnabled() {
    return this.getBooleanAttribute('auto_grow_enabled');
  }

  // backup_retention_days - computed: true, optional: false, required: false
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // geo_redundant_backup_enabled - computed: true, optional: false, required: false
  public get geoRedundantBackupEnabled() {
    return this.getBooleanAttribute('geo_redundant_backup_enabled');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new DataAzurermMysqlServerIdentity(this, 'identity', index);
  }

  // infrastructure_encryption_enabled - computed: true, optional: false, required: false
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // public_network_access_enabled - computed: true, optional: false, required: false
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
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

  // restore_point_in_time - computed: true, optional: false, required: false
  public get restorePointInTime() {
    return this.getStringAttribute('restore_point_in_time');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // ssl_enforcement_enabled - computed: true, optional: false, required: false
  public get sslEnforcementEnabled() {
    return this.getBooleanAttribute('ssl_enforcement_enabled');
  }

  // ssl_minimal_tls_version_enforced - computed: true, optional: false, required: false
  public get sslMinimalTlsVersionEnforced() {
    return this.getStringAttribute('ssl_minimal_tls_version_enforced');
  }

  // storage_mb - computed: true, optional: false, required: false
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // threat_detection_policy - computed: true, optional: false, required: false
  public threatDetectionPolicy(index: string) {
    return new DataAzurermMysqlServerThreatDetectionPolicy(this, 'threat_detection_policy', index);
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMysqlServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermMysqlServerTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermMysqlServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
