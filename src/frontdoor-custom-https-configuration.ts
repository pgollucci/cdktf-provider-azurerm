// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FrontdoorCustomHttpsConfigurationConfig extends TerraformMetaArguments {
  readonly customHttpsProvisioningEnabled: boolean;
  readonly frontendEndpointId: string;
  readonly resourceGroupName?: string;
  /** custom_https_configuration block */
  readonly customHttpsConfiguration?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration[];
  /** timeouts block */
  readonly timeouts?: FrontdoorCustomHttpsConfigurationTimeouts;
}
export interface FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration {
  readonly azureKeyVaultCertificateSecretName?: string;
  readonly azureKeyVaultCertificateSecretVersion?: string;
  readonly azureKeyVaultCertificateVaultId?: string;
  readonly certificateSource?: string;
}
export interface FrontdoorCustomHttpsConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class FrontdoorCustomHttpsConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FrontdoorCustomHttpsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_custom_https_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customHttpsProvisioningEnabled = config.customHttpsProvisioningEnabled;
    this._frontendEndpointId = config.frontendEndpointId;
    this._resourceGroupName = config.resourceGroupName;
    this._customHttpsConfiguration = config.customHttpsConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_https_provisioning_enabled - computed: false, optional: false, required: true
  private _customHttpsProvisioningEnabled: boolean;
  public get customHttpsProvisioningEnabled() {
    return this.getBooleanAttribute('custom_https_provisioning_enabled');
  }
  public set customHttpsProvisioningEnabled(value: boolean) {
    this._customHttpsProvisioningEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsProvisioningEnabledInput() {
    return this._customHttpsProvisioningEnabled
  }

  // frontend_endpoint_id - computed: false, optional: false, required: true
  private _frontendEndpointId: string;
  public get frontendEndpointId() {
    return this.getStringAttribute('frontend_endpoint_id');
  }
  public set frontendEndpointId(value: string) {
    this._frontendEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendEndpointIdInput() {
    return this._frontendEndpointId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string ) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // custom_https_configuration - computed: false, optional: true, required: false
  private _customHttpsConfiguration?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration[];
  public get customHttpsConfiguration() {
    return this.interpolationForAttribute('custom_https_configuration') as any;
  }
  public set customHttpsConfiguration(value: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration[] ) {
    this._customHttpsConfiguration = value;
  }
  public resetCustomHttpsConfiguration() {
    this._customHttpsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsConfigurationInput() {
    return this._customHttpsConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FrontdoorCustomHttpsConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FrontdoorCustomHttpsConfigurationTimeouts ) {
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
      custom_https_provisioning_enabled: this._customHttpsProvisioningEnabled,
      frontend_endpoint_id: this._frontendEndpointId,
      resource_group_name: this._resourceGroupName,
      custom_https_configuration: this._customHttpsConfiguration,
      timeouts: this._timeouts,
    };
  }
}
