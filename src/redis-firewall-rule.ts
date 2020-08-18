// https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedisFirewallRuleConfig extends TerraformMetaArguments {
  readonly endIp: string;
  readonly name: string;
  readonly redisCacheName: string;
  readonly resourceGroupName: string;
  readonly startIp: string;
  /** timeouts block */
  readonly timeouts?: RedisFirewallRuleTimeouts;
}
export interface RedisFirewallRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class RedisFirewallRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedisFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endIp = config.endIp;
    this._name = config.name;
    this._redisCacheName = config.redisCacheName;
    this._resourceGroupName = config.resourceGroupName;
    this._startIp = config.startIp;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_ip - computed: false, optional: false, required: true
  private _endIp: string;
  public get endIp() {
    return this._endIp;
  }
  public set endIp(value: string) {
    this._endIp = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // redis_cache_name - computed: false, optional: false, required: true
  private _redisCacheName: string;
  public get redisCacheName() {
    return this._redisCacheName;
  }
  public set redisCacheName(value: string) {
    this._redisCacheName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // start_ip - computed: false, optional: false, required: true
  private _startIp: string;
  public get startIp() {
    return this._startIp;
  }
  public set startIp(value: string) {
    this._startIp = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisFirewallRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RedisFirewallRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      end_ip: this._endIp,
      name: this._name,
      redis_cache_name: this._redisCacheName,
      resource_group_name: this._resourceGroupName,
      start_ip: this._startIp,
      timeouts: this._timeouts,
    };
  }
}