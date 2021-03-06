// https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_order.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceCertificateOrderConfig extends cdktf.TerraformMetaArguments {
  readonly autoRenew?: boolean;
  readonly csr?: string;
  readonly distinguishedName?: string;
  readonly keySize?: number;
  readonly location: string;
  readonly name: string;
  readonly productType?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly validityInYears?: number;
  /** timeouts block */
  readonly timeouts?: AppServiceCertificateOrderTimeouts;
}
export class AppServiceCertificateOrderCertificates extends cdktf.ComplexComputedList {

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // key_vault_secret_name - computed: true, optional: false, required: false
  public get keyVaultSecretName() {
    return this.getStringAttribute('key_vault_secret_name');
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }
}
export interface AppServiceCertificateOrderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServiceCertificateOrderTimeoutsToTerraform(struct?: AppServiceCertificateOrderTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceCertificateOrder extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceCertificateOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_certificate_order',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoRenew = config.autoRenew;
    this._csr = config.csr;
    this._distinguishedName = config.distinguishedName;
    this._keySize = config.keySize;
    this._location = config.location;
    this._name = config.name;
    this._productType = config.productType;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._validityInYears = config.validityInYears;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_certificate_not_renewable_reasons - computed: true, optional: false, required: false
  public get appServiceCertificateNotRenewableReasons() {
    return this.getListAttribute('app_service_certificate_not_renewable_reasons');
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean;
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean ) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew
  }

  // certificates - computed: true, optional: false, required: false
  public certificates(index: string) {
    return new AppServiceCertificateOrderCertificates(this, 'certificates', index);
  }

  // csr - computed: true, optional: true, required: false
  private _csr?: string;
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string;
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName
  }

  // domain_verification_token - computed: true, optional: false, required: false
  public get domainVerificationToken() {
    return this.getStringAttribute('domain_verification_token');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intermediate_thumbprint - computed: true, optional: false, required: false
  public get intermediateThumbprint() {
    return this.getStringAttribute('intermediate_thumbprint');
  }

  // is_private_key_external - computed: true, optional: false, required: false
  public get isPrivateKeyExternal() {
    return this.getBooleanAttribute('is_private_key_external');
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number;
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number ) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize
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

  // product_type - computed: false, optional: true, required: false
  private _productType?: string;
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string ) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType
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

  // root_thumbprint - computed: true, optional: false, required: false
  public get rootThumbprint() {
    return this.getStringAttribute('root_thumbprint');
  }

  // signed_certificate_thumbprint - computed: true, optional: false, required: false
  public get signedCertificateThumbprint() {
    return this.getStringAttribute('signed_certificate_thumbprint');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // validity_in_years - computed: false, optional: true, required: false
  private _validityInYears?: number;
  public get validityInYears() {
    return this.getNumberAttribute('validity_in_years');
  }
  public set validityInYears(value: number ) {
    this._validityInYears = value;
  }
  public resetValidityInYears() {
    this._validityInYears = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInYearsInput() {
    return this._validityInYears
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceCertificateOrderTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceCertificateOrderTimeouts ) {
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
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      csr: cdktf.stringToTerraform(this._csr),
      distinguished_name: cdktf.stringToTerraform(this._distinguishedName),
      key_size: cdktf.numberToTerraform(this._keySize),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      product_type: cdktf.stringToTerraform(this._productType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      validity_in_years: cdktf.numberToTerraform(this._validityInYears),
      timeouts: appServiceCertificateOrderTimeoutsToTerraform(this._timeouts),
    };
  }
}
