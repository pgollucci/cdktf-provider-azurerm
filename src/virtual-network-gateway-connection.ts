// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly authorizationKey?: string;
  readonly connectionProtocol?: string;
  readonly dpdTimeoutSeconds?: number;
  readonly enableBgp?: boolean;
  readonly expressRouteCircuitId?: string;
  readonly expressRouteGatewayBypass?: boolean;
  readonly localAzureIpAddressEnabled?: boolean;
  readonly localNetworkGatewayId?: string;
  readonly location: string;
  readonly name: string;
  readonly peerVirtualNetworkGatewayId?: string;
  readonly resourceGroupName: string;
  readonly routingWeight?: number;
  readonly sharedKey?: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  readonly usePolicyBasedTrafficSelectors?: boolean;
  readonly virtualNetworkGatewayId: string;
  /** ipsec_policy block */
  readonly ipsecPolicy?: VirtualNetworkGatewayConnectionIpsecPolicy[];
  /** timeouts block */
  readonly timeouts?: VirtualNetworkGatewayConnectionTimeouts;
  /** traffic_selector_policy block */
  readonly trafficSelectorPolicy?: VirtualNetworkGatewayConnectionTrafficSelectorPolicy[];
}
export interface VirtualNetworkGatewayConnectionIpsecPolicy {
  readonly dhGroup: string;
  readonly ikeEncryption: string;
  readonly ikeIntegrity: string;
  readonly ipsecEncryption: string;
  readonly ipsecIntegrity: string;
  readonly pfsGroup: string;
  readonly saDatasize?: number;
  readonly saLifetime?: number;
}

function virtualNetworkGatewayConnectionIpsecPolicyToTerraform(struct?: VirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    ike_encryption: cdktf.stringToTerraform(struct!.ikeEncryption),
    ike_integrity: cdktf.stringToTerraform(struct!.ikeIntegrity),
    ipsec_encryption: cdktf.stringToTerraform(struct!.ipsecEncryption),
    ipsec_integrity: cdktf.stringToTerraform(struct!.ipsecIntegrity),
    pfs_group: cdktf.stringToTerraform(struct!.pfsGroup),
    sa_datasize: cdktf.numberToTerraform(struct!.saDatasize),
    sa_lifetime: cdktf.numberToTerraform(struct!.saLifetime),
  }
}

export interface VirtualNetworkGatewayConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualNetworkGatewayConnectionTimeoutsToTerraform(struct?: VirtualNetworkGatewayConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface VirtualNetworkGatewayConnectionTrafficSelectorPolicy {
  readonly localAddressCidrs: string[];
  readonly remoteAddressCidrs: string[];
}

function virtualNetworkGatewayConnectionTrafficSelectorPolicyToTerraform(struct?: VirtualNetworkGatewayConnectionTrafficSelectorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_address_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.localAddressCidrs),
    remote_address_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.remoteAddressCidrs),
  }
}


// Resource

export class VirtualNetworkGatewayConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationKey = config.authorizationKey;
    this._connectionProtocol = config.connectionProtocol;
    this._dpdTimeoutSeconds = config.dpdTimeoutSeconds;
    this._enableBgp = config.enableBgp;
    this._expressRouteCircuitId = config.expressRouteCircuitId;
    this._expressRouteGatewayBypass = config.expressRouteGatewayBypass;
    this._localAzureIpAddressEnabled = config.localAzureIpAddressEnabled;
    this._localNetworkGatewayId = config.localNetworkGatewayId;
    this._location = config.location;
    this._name = config.name;
    this._peerVirtualNetworkGatewayId = config.peerVirtualNetworkGatewayId;
    this._resourceGroupName = config.resourceGroupName;
    this._routingWeight = config.routingWeight;
    this._sharedKey = config.sharedKey;
    this._tags = config.tags;
    this._type = config.type;
    this._usePolicyBasedTrafficSelectors = config.usePolicyBasedTrafficSelectors;
    this._virtualNetworkGatewayId = config.virtualNetworkGatewayId;
    this._ipsecPolicy = config.ipsecPolicy;
    this._timeouts = config.timeouts;
    this._trafficSelectorPolicy = config.trafficSelectorPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: false, optional: true, required: false
  private _authorizationKey?: string;
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }
  public set authorizationKey(value: string ) {
    this._authorizationKey = value;
  }
  public resetAuthorizationKey() {
    this._authorizationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey
  }

  // connection_protocol - computed: true, optional: true, required: false
  private _connectionProtocol?: string;
  public get connectionProtocol() {
    return this.getStringAttribute('connection_protocol');
  }
  public set connectionProtocol(value: string) {
    this._connectionProtocol = value;
  }
  public resetConnectionProtocol() {
    this._connectionProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionProtocolInput() {
    return this._connectionProtocol
  }

  // dpd_timeout_seconds - computed: false, optional: true, required: false
  private _dpdTimeoutSeconds?: number;
  public get dpdTimeoutSeconds() {
    return this.getNumberAttribute('dpd_timeout_seconds');
  }
  public set dpdTimeoutSeconds(value: number ) {
    this._dpdTimeoutSeconds = value;
  }
  public resetDpdTimeoutSeconds() {
    this._dpdTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdTimeoutSecondsInput() {
    return this._dpdTimeoutSeconds
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean;
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }
  public set enableBgp(value: boolean) {
    this._enableBgp = value;
  }
  public resetEnableBgp() {
    this._enableBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpInput() {
    return this._enableBgp
  }

  // express_route_circuit_id - computed: false, optional: true, required: false
  private _expressRouteCircuitId?: string;
  public get expressRouteCircuitId() {
    return this.getStringAttribute('express_route_circuit_id');
  }
  public set expressRouteCircuitId(value: string ) {
    this._expressRouteCircuitId = value;
  }
  public resetExpressRouteCircuitId() {
    this._expressRouteCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitIdInput() {
    return this._expressRouteCircuitId
  }

  // express_route_gateway_bypass - computed: true, optional: true, required: false
  private _expressRouteGatewayBypass?: boolean;
  public get expressRouteGatewayBypass() {
    return this.getBooleanAttribute('express_route_gateway_bypass');
  }
  public set expressRouteGatewayBypass(value: boolean) {
    this._expressRouteGatewayBypass = value;
  }
  public resetExpressRouteGatewayBypass() {
    this._expressRouteGatewayBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteGatewayBypassInput() {
    return this._expressRouteGatewayBypass
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_azure_ip_address_enabled - computed: false, optional: true, required: false
  private _localAzureIpAddressEnabled?: boolean;
  public get localAzureIpAddressEnabled() {
    return this.getBooleanAttribute('local_azure_ip_address_enabled');
  }
  public set localAzureIpAddressEnabled(value: boolean ) {
    this._localAzureIpAddressEnabled = value;
  }
  public resetLocalAzureIpAddressEnabled() {
    this._localAzureIpAddressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAzureIpAddressEnabledInput() {
    return this._localAzureIpAddressEnabled
  }

  // local_network_gateway_id - computed: false, optional: true, required: false
  private _localNetworkGatewayId?: string;
  public get localNetworkGatewayId() {
    return this.getStringAttribute('local_network_gateway_id');
  }
  public set localNetworkGatewayId(value: string ) {
    this._localNetworkGatewayId = value;
  }
  public resetLocalNetworkGatewayId() {
    this._localNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworkGatewayIdInput() {
    return this._localNetworkGatewayId
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

  // peer_virtual_network_gateway_id - computed: false, optional: true, required: false
  private _peerVirtualNetworkGatewayId?: string;
  public get peerVirtualNetworkGatewayId() {
    return this.getStringAttribute('peer_virtual_network_gateway_id');
  }
  public set peerVirtualNetworkGatewayId(value: string ) {
    this._peerVirtualNetworkGatewayId = value;
  }
  public resetPeerVirtualNetworkGatewayId() {
    this._peerVirtualNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVirtualNetworkGatewayIdInput() {
    return this._peerVirtualNetworkGatewayId
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

  // routing_weight - computed: true, optional: true, required: false
  private _routingWeight?: number;
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }
  public set routingWeight(value: number) {
    this._routingWeight = value;
  }
  public resetRoutingWeight() {
    this._routingWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingWeightInput() {
    return this._routingWeight
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string;
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string ) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // use_policy_based_traffic_selectors - computed: true, optional: true, required: false
  private _usePolicyBasedTrafficSelectors?: boolean;
  public get usePolicyBasedTrafficSelectors() {
    return this.getBooleanAttribute('use_policy_based_traffic_selectors');
  }
  public set usePolicyBasedTrafficSelectors(value: boolean) {
    this._usePolicyBasedTrafficSelectors = value;
  }
  public resetUsePolicyBasedTrafficSelectors() {
    this._usePolicyBasedTrafficSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePolicyBasedTrafficSelectorsInput() {
    return this._usePolicyBasedTrafficSelectors
  }

  // virtual_network_gateway_id - computed: false, optional: false, required: true
  private _virtualNetworkGatewayId: string;
  public get virtualNetworkGatewayId() {
    return this.getStringAttribute('virtual_network_gateway_id');
  }
  public set virtualNetworkGatewayId(value: string) {
    this._virtualNetworkGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkGatewayIdInput() {
    return this._virtualNetworkGatewayId
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy?: VirtualNetworkGatewayConnectionIpsecPolicy[];
  public get ipsecPolicy() {
    return this.interpolationForAttribute('ipsec_policy') as any;
  }
  public set ipsecPolicy(value: VirtualNetworkGatewayConnectionIpsecPolicy[] ) {
    this._ipsecPolicy = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkGatewayConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualNetworkGatewayConnectionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // traffic_selector_policy - computed: false, optional: true, required: false
  private _trafficSelectorPolicy?: VirtualNetworkGatewayConnectionTrafficSelectorPolicy[];
  public get trafficSelectorPolicy() {
    return this.interpolationForAttribute('traffic_selector_policy') as any;
  }
  public set trafficSelectorPolicy(value: VirtualNetworkGatewayConnectionTrafficSelectorPolicy[] ) {
    this._trafficSelectorPolicy = value;
  }
  public resetTrafficSelectorPolicy() {
    this._trafficSelectorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorPolicyInput() {
    return this._trafficSelectorPolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      connection_protocol: cdktf.stringToTerraform(this._connectionProtocol),
      dpd_timeout_seconds: cdktf.numberToTerraform(this._dpdTimeoutSeconds),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      express_route_circuit_id: cdktf.stringToTerraform(this._expressRouteCircuitId),
      express_route_gateway_bypass: cdktf.booleanToTerraform(this._expressRouteGatewayBypass),
      local_azure_ip_address_enabled: cdktf.booleanToTerraform(this._localAzureIpAddressEnabled),
      local_network_gateway_id: cdktf.stringToTerraform(this._localNetworkGatewayId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peer_virtual_network_gateway_id: cdktf.stringToTerraform(this._peerVirtualNetworkGatewayId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      routing_weight: cdktf.numberToTerraform(this._routingWeight),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      use_policy_based_traffic_selectors: cdktf.booleanToTerraform(this._usePolicyBasedTrafficSelectors),
      virtual_network_gateway_id: cdktf.stringToTerraform(this._virtualNetworkGatewayId),
      ipsec_policy: cdktf.listMapper(virtualNetworkGatewayConnectionIpsecPolicyToTerraform)(this._ipsecPolicy),
      timeouts: virtualNetworkGatewayConnectionTimeoutsToTerraform(this._timeouts),
      traffic_selector_policy: cdktf.listMapper(virtualNetworkGatewayConnectionTrafficSelectorPolicyToTerraform)(this._trafficSelectorPolicy),
    };
  }
}
