// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_redis_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermRedisCacheConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: DataAzurermRedisCacheTimeouts;
}
export class DataAzurermRedisCachePatchSchedule extends cdktf.ComplexComputedList {

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // start_hour_utc - computed: true, optional: false, required: false
  public get startHourUtc() {
    return this.getNumberAttribute('start_hour_utc');
  }
}
export class DataAzurermRedisCacheRedisConfiguration extends cdktf.ComplexComputedList {

  // aof_backup_enabled - computed: true, optional: false, required: false
  public get aofBackupEnabled() {
    return this.getBooleanAttribute('aof_backup_enabled');
  }

  // aof_storage_connection_string_0 - computed: true, optional: false, required: false
  public get aofStorageConnectionString0() {
    return this.getStringAttribute('aof_storage_connection_string_0');
  }

  // aof_storage_connection_string_1 - computed: true, optional: false, required: false
  public get aofStorageConnectionString1() {
    return this.getStringAttribute('aof_storage_connection_string_1');
  }

  // enable_authentication - computed: true, optional: false, required: false
  public get enableAuthentication() {
    return this.getBooleanAttribute('enable_authentication');
  }

  // maxclients - computed: true, optional: false, required: false
  public get maxclients() {
    return this.getNumberAttribute('maxclients');
  }

  // maxfragmentationmemory_reserved - computed: true, optional: false, required: false
  public get maxfragmentationmemoryReserved() {
    return this.getNumberAttribute('maxfragmentationmemory_reserved');
  }

  // maxmemory_delta - computed: true, optional: false, required: false
  public get maxmemoryDelta() {
    return this.getNumberAttribute('maxmemory_delta');
  }

  // maxmemory_policy - computed: true, optional: false, required: false
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }

  // maxmemory_reserved - computed: true, optional: false, required: false
  public get maxmemoryReserved() {
    return this.getNumberAttribute('maxmemory_reserved');
  }

  // notify_keyspace_events - computed: true, optional: false, required: false
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }

  // rdb_backup_enabled - computed: true, optional: false, required: false
  public get rdbBackupEnabled() {
    return this.getBooleanAttribute('rdb_backup_enabled');
  }

  // rdb_backup_frequency - computed: true, optional: false, required: false
  public get rdbBackupFrequency() {
    return this.getNumberAttribute('rdb_backup_frequency');
  }

  // rdb_backup_max_snapshot_count - computed: true, optional: false, required: false
  public get rdbBackupMaxSnapshotCount() {
    return this.getNumberAttribute('rdb_backup_max_snapshot_count');
  }

  // rdb_storage_connection_string - computed: true, optional: false, required: false
  public get rdbStorageConnectionString() {
    return this.getStringAttribute('rdb_storage_connection_string');
  }
}
export interface DataAzurermRedisCacheTimeouts {
  readonly read?: string;
}

function dataAzurermRedisCacheTimeoutsToTerraform(struct?: DataAzurermRedisCacheTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermRedisCache extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermRedisCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_cache',
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
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // enable_non_ssl_port - computed: true, optional: false, required: false
  public get enableNonSslPort() {
    return this.getBooleanAttribute('enable_non_ssl_port');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // minimum_tls_version - computed: true, optional: false, required: false
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
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

  // patch_schedule - computed: true, optional: false, required: false
  public patchSchedule(index: string) {
    return new DataAzurermRedisCachePatchSchedule(this, 'patch_schedule', index);
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // private_static_ip_address - computed: true, optional: false, required: false
  public get privateStaticIpAddress() {
    return this.getStringAttribute('private_static_ip_address');
  }

  // redis_configuration - computed: true, optional: false, required: false
  public redisConfiguration(index: string) {
    return new DataAzurermRedisCacheRedisConfiguration(this, 'redis_configuration', index);
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // ssl_port - computed: true, optional: false, required: false
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermRedisCacheTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermRedisCacheTimeouts ) {
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
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      timeouts: dataAzurermRedisCacheTimeoutsToTerraform(this._timeouts),
    };
  }
}
