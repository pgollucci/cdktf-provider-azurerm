// https://www.terraform.io/docs/providers/azurerm/r/route_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RouteFilterConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly rule?: RouteFilterRule[];
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: RouteFilterTimeouts;
}
export interface RouteFilterRule {
  readonly access?: string;
  readonly communities?: string[];
  readonly name?: string;
  readonly ruleType?: string;
}
export interface RouteFilterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class RouteFilter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RouteFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_route_filter',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._rule = config.rule;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rule - computed: true, optional: true, required: false
  private _rule?: RouteFilterRule[]
  public get rule(): RouteFilterRule[] {
    return this.interpolationForAttribute('rule') as any; // Getting the computed value is not yet implemented
  }
  public set rule(value: RouteFilterRule[]) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RouteFilterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RouteFilterTimeouts ) {
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
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      rule: this._rule,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}