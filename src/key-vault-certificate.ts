// https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly keyVaultId: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** certificate block */
  readonly certificate?: KeyVaultCertificateCertificate[];
  /** certificate_policy block */
  readonly certificatePolicy: KeyVaultCertificateCertificatePolicy[];
  /** timeouts block */
  readonly timeouts?: KeyVaultCertificateTimeouts;
}
export class KeyVaultCertificateCertificateAttribute extends cdktf.ComplexComputedList {

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // recovery_level - computed: true, optional: false, required: false
  public get recoveryLevel() {
    return this.getStringAttribute('recovery_level');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }
}
export interface KeyVaultCertificateCertificate {
  readonly contents: string;
  readonly password?: string;
}

function keyVaultCertificateCertificateToTerraform(struct?: KeyVaultCertificateCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    password: cdktf.stringToTerraform(struct!.password),
  }
}

export interface KeyVaultCertificateCertificatePolicyIssuerParameters {
  readonly name: string;
}

function keyVaultCertificateCertificatePolicyIssuerParametersToTerraform(struct?: KeyVaultCertificateCertificatePolicyIssuerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface KeyVaultCertificateCertificatePolicyKeyProperties {
  readonly exportable: boolean;
  readonly keySize: number;
  readonly keyType: string;
  readonly reuseKey: boolean;
}

function keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyKeyProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exportable: cdktf.booleanToTerraform(struct!.exportable),
    key_size: cdktf.numberToTerraform(struct!.keySize),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    reuse_key: cdktf.booleanToTerraform(struct!.reuseKey),
  }
}

export interface KeyVaultCertificateCertificatePolicyLifetimeActionAction {
  readonly actionType: string;
}

function keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
  }
}

export interface KeyVaultCertificateCertificatePolicyLifetimeActionTrigger {
  readonly daysBeforeExpiry?: number;
  readonly lifetimePercentage?: number;
}

function keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days_before_expiry: cdktf.numberToTerraform(struct!.daysBeforeExpiry),
    lifetime_percentage: cdktf.numberToTerraform(struct!.lifetimePercentage),
  }
}

export interface KeyVaultCertificateCertificatePolicyLifetimeAction {
  /** action block */
  readonly action: KeyVaultCertificateCertificatePolicyLifetimeActionAction[];
  /** trigger block */
  readonly trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger[];
}

function keyVaultCertificateCertificatePolicyLifetimeActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform)(struct!.action),
    trigger: cdktf.listMapper(keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform)(struct!.trigger),
  }
}

export interface KeyVaultCertificateCertificatePolicySecretProperties {
  readonly contentType: string;
}

function keyVaultCertificateCertificatePolicySecretPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicySecretProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
  }
}

export interface KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {
  readonly dnsNames?: string[];
  readonly emails?: string[];
  readonly upns?: string[];
}

function keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsNames),
    emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emails),
    upns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.upns),
  }
}

export interface KeyVaultCertificateCertificatePolicyX509CertificateProperties {
  readonly extendedKeyUsage?: string[];
  readonly keyUsage: string[];
  readonly subject: string;
  readonly validityInMonths: number;
  /** subject_alternative_names block */
  readonly subjectAlternativeNames?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames[];
}

function keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificateProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform)(struct!.extendedKeyUsage),
    key_usage: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keyUsage),
    subject: cdktf.stringToTerraform(struct!.subject),
    validity_in_months: cdktf.numberToTerraform(struct!.validityInMonths),
    subject_alternative_names: cdktf.listMapper(keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
  }
}

export interface KeyVaultCertificateCertificatePolicy {
  /** issuer_parameters block */
  readonly issuerParameters: KeyVaultCertificateCertificatePolicyIssuerParameters[];
  /** key_properties block */
  readonly keyProperties: KeyVaultCertificateCertificatePolicyKeyProperties[];
  /** lifetime_action block */
  readonly lifetimeAction?: KeyVaultCertificateCertificatePolicyLifetimeAction[];
  /** secret_properties block */
  readonly secretProperties: KeyVaultCertificateCertificatePolicySecretProperties[];
  /** x509_certificate_properties block */
  readonly x509CertificateProperties?: KeyVaultCertificateCertificatePolicyX509CertificateProperties[];
}

function keyVaultCertificateCertificatePolicyToTerraform(struct?: KeyVaultCertificateCertificatePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    issuer_parameters: cdktf.listMapper(keyVaultCertificateCertificatePolicyIssuerParametersToTerraform)(struct!.issuerParameters),
    key_properties: cdktf.listMapper(keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform)(struct!.keyProperties),
    lifetime_action: cdktf.listMapper(keyVaultCertificateCertificatePolicyLifetimeActionToTerraform)(struct!.lifetimeAction),
    secret_properties: cdktf.listMapper(keyVaultCertificateCertificatePolicySecretPropertiesToTerraform)(struct!.secretProperties),
    x509_certificate_properties: cdktf.listMapper(keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform)(struct!.x509CertificateProperties),
  }
}

export interface KeyVaultCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function keyVaultCertificateTimeoutsToTerraform(struct?: KeyVaultCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class KeyVaultCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KeyVaultCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._tags = config.tags;
    this._certificate = config.certificate;
    this._certificatePolicy = config.certificatePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_attribute - computed: true, optional: false, required: false
  public certificateAttribute(index: string) {
    return new KeyVaultCertificateCertificateAttribute(this, 'certificate_attribute', index);
  }

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
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

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
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

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: KeyVaultCertificateCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: KeyVaultCertificateCertificate[] ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // certificate_policy - computed: false, optional: false, required: true
  private _certificatePolicy: KeyVaultCertificateCertificatePolicy[];
  public get certificatePolicy() {
    return this.interpolationForAttribute('certificate_policy') as any;
  }
  public set certificatePolicy(value: KeyVaultCertificateCertificatePolicy[]) {
    this._certificatePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePolicyInput() {
    return this._certificatePolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KeyVaultCertificateTimeouts ) {
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
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      certificate: cdktf.listMapper(keyVaultCertificateCertificateToTerraform)(this._certificate),
      certificate_policy: cdktf.listMapper(keyVaultCertificateCertificatePolicyToTerraform)(this._certificatePolicy),
      timeouts: keyVaultCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
