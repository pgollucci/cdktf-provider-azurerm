// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_private_link_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermPrivateLinkServiceConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermPrivateLinkServiceTimeouts;
}
export class DataAzurermPrivateLinkServiceNatIpConfiguration extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: true
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_address_version - computed: true, optional: false, required: true
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export interface DataAzurermPrivateLinkServiceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermPrivateLinkService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermPrivateLinkServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_link_service',
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

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // auto_approval_subscription_ids - computed: true, optional: false, required: true
  public get autoApprovalSubscriptionIds() {
    return this.getListAttribute('auto_approval_subscription_ids');
  }

  // enable_proxy_protocol - computed: true, optional: false, required: true
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_frontend_ip_configuration_ids - computed: true, optional: false, required: true
  public get loadBalancerFrontendIpConfigurationIds() {
    return this.getListAttribute('load_balancer_frontend_ip_configuration_ids');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // nat_ip_configuration - computed: true, optional: false, required: true
  public natIpConfiguration(index: string) {
    return new DataAzurermPrivateLinkServiceNatIpConfiguration(this, 'nat_ip_configuration', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // visibility_subscription_ids - computed: true, optional: false, required: true
  public get visibilitySubscriptionIds() {
    return this.getListAttribute('visibility_subscription_ids');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPrivateLinkServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermPrivateLinkServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}