// https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusSubscriptionRuleConfig extends cdktf.TerraformMetaArguments {
  readonly action?: string;
  readonly filterType: string;
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  readonly sqlFilter?: string;
  readonly subscriptionName: string;
  readonly topicName: string;
  /** correlation_filter block */
  readonly correlationFilter?: ServicebusSubscriptionRuleCorrelationFilter[];
  /** timeouts block */
  readonly timeouts?: ServicebusSubscriptionRuleTimeouts;
}
export interface ServicebusSubscriptionRuleCorrelationFilter {
  readonly contentType?: string;
  readonly correlationId?: string;
  readonly label?: string;
  readonly messageId?: string;
  readonly properties?: { [key: string]: string };
  readonly replyTo?: string;
  readonly replyToSessionId?: string;
  readonly sessionId?: string;
  readonly to?: string;
}

function servicebusSubscriptionRuleCorrelationFilterToTerraform(struct?: ServicebusSubscriptionRuleCorrelationFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    correlation_id: cdktf.stringToTerraform(struct!.correlationId),
    label: cdktf.stringToTerraform(struct!.label),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    reply_to: cdktf.stringToTerraform(struct!.replyTo),
    reply_to_session_id: cdktf.stringToTerraform(struct!.replyToSessionId),
    session_id: cdktf.stringToTerraform(struct!.sessionId),
    to: cdktf.stringToTerraform(struct!.to),
  }
}

export interface ServicebusSubscriptionRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function servicebusSubscriptionRuleTimeoutsToTerraform(struct?: ServicebusSubscriptionRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ServicebusSubscriptionRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicebusSubscriptionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_subscription_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._filterType = config.filterType;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._sqlFilter = config.sqlFilter;
    this._subscriptionName = config.subscriptionName;
    this._topicName = config.topicName;
    this._correlationFilter = config.correlationFilter;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string ) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType: string;
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
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

  // sql_filter - computed: false, optional: true, required: false
  private _sqlFilter?: string;
  public get sqlFilter() {
    return this.getStringAttribute('sql_filter');
  }
  public set sqlFilter(value: string ) {
    this._sqlFilter = value;
  }
  public resetSqlFilter() {
    this._sqlFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFilterInput() {
    return this._sqlFilter
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName: string;
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName: string;
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName
  }

  // correlation_filter - computed: false, optional: true, required: false
  private _correlationFilter?: ServicebusSubscriptionRuleCorrelationFilter[];
  public get correlationFilter() {
    return this.interpolationForAttribute('correlation_filter') as any;
  }
  public set correlationFilter(value: ServicebusSubscriptionRuleCorrelationFilter[] ) {
    this._correlationFilter = value;
  }
  public resetCorrelationFilter() {
    this._correlationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationFilterInput() {
    return this._correlationFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusSubscriptionRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicebusSubscriptionRuleTimeouts ) {
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
      action: cdktf.stringToTerraform(this._action),
      filter_type: cdktf.stringToTerraform(this._filterType),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sql_filter: cdktf.stringToTerraform(this._sqlFilter),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      topic_name: cdktf.stringToTerraform(this._topicName),
      correlation_filter: cdktf.listMapper(servicebusSubscriptionRuleCorrelationFilterToTerraform)(this._correlationFilter),
      timeouts: servicebusSubscriptionRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
