// https://www.terraform.io/docs/providers/azurerm/r/policy_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly displayName: string;
  readonly managementGroupId?: string;
  readonly managementGroupName?: string;
  readonly metadata?: string;
  readonly mode: string;
  readonly name: string;
  readonly parameters?: string;
  readonly policyRule?: string;
  readonly policyType: string;
  /** timeouts block */
  readonly timeouts?: PolicyDefinitionTimeouts;
}
export interface PolicyDefinitionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function policyDefinitionTimeoutsToTerraform(struct?: PolicyDefinitionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PolicyDefinition extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._managementGroupId = config.managementGroupId;
    this._managementGroupName = config.managementGroupName;
    this._metadata = config.metadata;
    this._mode = config.mode;
    this._name = config.name;
    this._parameters = config.parameters;
    this._policyRule = config.policyRule;
    this._policyType = config.policyType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_group_id - computed: true, optional: true, required: false
  private _managementGroupId?: string;
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  public resetManagementGroupId() {
    this._managementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId
  }

  // management_group_name - computed: true, optional: true, required: false
  private _managementGroupName?: string;
  public get managementGroupName() {
    return this.getStringAttribute('management_group_name');
  }
  public set managementGroupName(value: string) {
    this._managementGroupName = value;
  }
  public resetManagementGroupName() {
    this._managementGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupNameInput() {
    return this._managementGroupName
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string;
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // mode - computed: false, optional: false, required: true
  private _mode: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string;
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // policy_rule - computed: false, optional: true, required: false
  private _policyRule?: string;
  public get policyRule() {
    return this.getStringAttribute('policy_rule');
  }
  public set policyRule(value: string ) {
    this._policyRule = value;
  }
  public resetPolicyRule() {
    this._policyRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleInput() {
    return this._policyRule
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType: string;
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PolicyDefinitionTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      management_group_name: cdktf.stringToTerraform(this._managementGroupName),
      metadata: cdktf.stringToTerraform(this._metadata),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.stringToTerraform(this._parameters),
      policy_rule: cdktf.stringToTerraform(this._policyRule),
      policy_type: cdktf.stringToTerraform(this._policyType),
      timeouts: policyDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
