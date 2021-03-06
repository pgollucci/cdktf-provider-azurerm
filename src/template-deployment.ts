// https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateDeploymentConfig extends cdktf.TerraformMetaArguments {
  readonly deploymentMode: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly parametersBody?: string;
  readonly resourceGroupName: string;
  readonly templateBody?: string;
  /** timeouts block */
  readonly timeouts?: TemplateDeploymentTimeouts;
}
export interface TemplateDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function templateDeploymentTimeoutsToTerraform(struct?: TemplateDeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class TemplateDeployment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TemplateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_template_deployment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deploymentMode = config.deploymentMode;
    this._name = config.name;
    this._parameters = config.parameters;
    this._parametersBody = config.parametersBody;
    this._resourceGroupName = config.resourceGroupName;
    this._templateBody = config.templateBody;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_mode - computed: false, optional: false, required: true
  private _deploymentMode: string;
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // parameters_body - computed: false, optional: true, required: false
  private _parametersBody?: string;
  public get parametersBody() {
    return this.getStringAttribute('parameters_body');
  }
  public set parametersBody(value: string ) {
    this._parametersBody = value;
  }
  public resetParametersBody() {
    this._parametersBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersBodyInput() {
    return this._parametersBody
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

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string;
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TemplateDeploymentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: TemplateDeploymentTimeouts ) {
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
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      parameters_body: cdktf.stringToTerraform(this._parametersBody),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      template_body: cdktf.stringToTerraform(this._templateBody),
      timeouts: templateDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
