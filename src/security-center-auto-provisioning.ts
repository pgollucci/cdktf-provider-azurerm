// https://www.terraform.io/docs/providers/azurerm/r/security_center_auto_provisioning.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAutoProvisioningConfig extends cdktf.TerraformMetaArguments {
  readonly autoProvision: string;
  /** timeouts block */
  readonly timeouts?: SecurityCenterAutoProvisioningTimeouts;
}
export interface SecurityCenterAutoProvisioningTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function securityCenterAutoProvisioningTimeoutsToTerraform(struct?: SecurityCenterAutoProvisioningTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SecurityCenterAutoProvisioning extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityCenterAutoProvisioningConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_auto_provisioning',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoProvision = config.autoProvision;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_provision - computed: false, optional: false, required: true
  private _autoProvision: string;
  public get autoProvision() {
    return this.getStringAttribute('auto_provision');
  }
  public set autoProvision(value: string) {
    this._autoProvision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisionInput() {
    return this._autoProvision
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterAutoProvisioningTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityCenterAutoProvisioningTimeouts ) {
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
      auto_provision: cdktf.stringToTerraform(this._autoProvision),
      timeouts: securityCenterAutoProvisioningTimeoutsToTerraform(this._timeouts),
    };
  }
}
