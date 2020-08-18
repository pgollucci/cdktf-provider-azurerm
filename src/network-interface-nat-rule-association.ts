// https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkInterfaceNatRuleAssociationConfig extends TerraformMetaArguments {
  readonly ipConfigurationName: string;
  readonly natRuleId: string;
  readonly networkInterfaceId: string;
  /** timeouts block */
  readonly timeouts?: NetworkInterfaceNatRuleAssociationTimeouts;
}
export interface NetworkInterfaceNatRuleAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkInterfaceNatRuleAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceNatRuleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface_nat_rule_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipConfigurationName = config.ipConfigurationName;
    this._natRuleId = config.natRuleId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_configuration_name - computed: false, optional: false, required: true
  private _ipConfigurationName: string;
  public get ipConfigurationName() {
    return this._ipConfigurationName;
  }
  public set ipConfigurationName(value: string) {
    this._ipConfigurationName = value;
  }

  // nat_rule_id - computed: false, optional: false, required: true
  private _natRuleId: string;
  public get natRuleId() {
    return this._natRuleId;
  }
  public set natRuleId(value: string) {
    this._natRuleId = value;
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceNatRuleAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkInterfaceNatRuleAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ip_configuration_name: this._ipConfigurationName,
      nat_rule_id: this._natRuleId,
      network_interface_id: this._networkInterfaceId,
      timeouts: this._timeouts,
    };
  }
}