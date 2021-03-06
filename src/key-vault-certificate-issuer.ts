// https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultCertificateIssuerConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly keyVaultId: string;
  readonly name: string;
  readonly orgId?: string;
  readonly password?: string;
  readonly providerName: string;
  /** admin block */
  readonly admin?: KeyVaultCertificateIssuerAdmin[];
  /** timeouts block */
  readonly timeouts?: KeyVaultCertificateIssuerTimeouts;
}
export interface KeyVaultCertificateIssuerAdmin {
  readonly emailAddress: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phone?: string;
}

function keyVaultCertificateIssuerAdminToTerraform(struct?: KeyVaultCertificateIssuerAdmin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}

export interface KeyVaultCertificateIssuerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function keyVaultCertificateIssuerTimeoutsToTerraform(struct?: KeyVaultCertificateIssuerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class KeyVaultCertificateIssuer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KeyVaultCertificateIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate_issuer',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._orgId = config.orgId;
    this._password = config.password;
    this._providerName = config.providerName;
    this._admin = config.admin;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string ) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string;
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string ) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string ) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName: string;
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName
  }

  // admin - computed: false, optional: true, required: false
  private _admin?: KeyVaultCertificateIssuerAdmin[];
  public get admin() {
    return this.interpolationForAttribute('admin') as any;
  }
  public set admin(value: KeyVaultCertificateIssuerAdmin[] ) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultCertificateIssuerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KeyVaultCertificateIssuerTimeouts ) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      password: cdktf.stringToTerraform(this._password),
      provider_name: cdktf.stringToTerraform(this._providerName),
      admin: cdktf.listMapper(keyVaultCertificateIssuerAdminToTerraform)(this._admin),
      timeouts: keyVaultCertificateIssuerTimeoutsToTerraform(this._timeouts),
    };
  }
}
