// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridSystemTopicEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  readonly eventDeliverySchema?: string;
  readonly eventhubEndpointId?: string;
  readonly expirationTimeUtc?: string;
  readonly hybridConnectionEndpointId?: string;
  readonly includedEventTypes?: string[];
  readonly labels?: string[];
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serviceBusQueueEndpointId?: string;
  readonly serviceBusTopicEndpointId?: string;
  readonly systemTopic: string;
  /** advanced_filter block */
  readonly advancedFilter?: EventgridSystemTopicEventSubscriptionAdvancedFilter[];
  /** azure_function_endpoint block */
  readonly azureFunctionEndpoint?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint[];
  /** retry_policy block */
  readonly retryPolicy?: EventgridSystemTopicEventSubscriptionRetryPolicy[];
  /** storage_blob_dead_letter_destination block */
  readonly storageBlobDeadLetterDestination?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination[];
  /** storage_queue_endpoint block */
  readonly storageQueueEndpoint?: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint[];
  /** subject_filter block */
  readonly subjectFilter?: EventgridSystemTopicEventSubscriptionSubjectFilter[];
  /** timeouts block */
  readonly timeouts?: EventgridSystemTopicEventSubscriptionTimeouts;
  /** webhook_endpoint block */
  readonly webhookEndpoint?: EventgridSystemTopicEventSubscriptionWebhookEndpoint[];
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals {
  readonly key: string;
  readonly value: boolean;
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan {
  readonly key: string;
  readonly value: number;
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
  readonly key: string;
  readonly value: number;
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn {
  readonly key: string;
  readonly values: number[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan {
  readonly key: string;
  readonly value: number;
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
  readonly key: string;
  readonly value: number;
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn {
  readonly key: string;
  readonly values: number[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith {
  readonly key: string;
  readonly values: string[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains {
  readonly key: string;
  readonly values: string[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith {
  readonly key: string;
  readonly values: string[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn {
  readonly key: string;
  readonly values: string[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn {
  readonly key: string;
  readonly values: string[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilter {
  /** bool_equals block */
  readonly boolEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals[];
  /** number_greater_than block */
  readonly numberGreaterThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan[];
  /** number_greater_than_or_equals block */
  readonly numberGreaterThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
  /** number_in block */
  readonly numberIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn[];
  /** number_less_than block */
  readonly numberLessThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan[];
  /** number_less_than_or_equals block */
  readonly numberLessThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
  /** number_not_in block */
  readonly numberNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn[];
  /** string_begins_with block */
  readonly stringBeginsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith[];
  /** string_contains block */
  readonly stringContains?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains[];
  /** string_ends_with block */
  readonly stringEndsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith[];
  /** string_in block */
  readonly stringIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn[];
  /** string_not_in block */
  readonly stringNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn[];
}

function eventgridSystemTopicEventSubscriptionAdvancedFilterToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bool_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToTerraform)(struct!.boolEquals),
    number_greater_than: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform)(struct!.numberGreaterThan),
    number_greater_than_or_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform)(struct!.numberGreaterThanOrEquals),
    number_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToTerraform)(struct!.numberIn),
    number_less_than: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToTerraform)(struct!.numberLessThan),
    number_less_than_or_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform)(struct!.numberLessThanOrEquals),
    number_not_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToTerraform)(struct!.numberNotIn),
    string_begins_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToTerraform)(struct!.stringBeginsWith),
    string_contains: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToTerraform)(struct!.stringContains),
    string_ends_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToTerraform)(struct!.stringEndsWith),
    string_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToTerraform)(struct!.stringIn),
    string_not_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToTerraform)(struct!.stringNotIn),
  }
}

export interface EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint {
  readonly functionId: string;
  readonly maxEventsPerBatch?: number;
  readonly preferredBatchSizeInKilobytes?: number;
}

function eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_id: cdktf.stringToTerraform(struct!.functionId),
    max_events_per_batch: cdktf.numberToTerraform(struct!.maxEventsPerBatch),
    preferred_batch_size_in_kilobytes: cdktf.numberToTerraform(struct!.preferredBatchSizeInKilobytes),
  }
}

export interface EventgridSystemTopicEventSubscriptionRetryPolicy {
  readonly eventTimeToLive: number;
  readonly maxDeliveryAttempts: number;
}

function eventgridSystemTopicEventSubscriptionRetryPolicyToTerraform(struct?: EventgridSystemTopicEventSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_time_to_live: cdktf.numberToTerraform(struct!.eventTimeToLive),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}

export interface EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination {
  readonly storageAccountId: string;
  readonly storageBlobContainerName: string;
}

function eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_blob_container_name: cdktf.stringToTerraform(struct!.storageBlobContainerName),
  }
}

export interface EventgridSystemTopicEventSubscriptionStorageQueueEndpoint {
  readonly queueName: string;
  readonly storageAccountId: string;
}

function eventgridSystemTopicEventSubscriptionStorageQueueEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface EventgridSystemTopicEventSubscriptionSubjectFilter {
  readonly caseSensitive?: boolean;
  readonly subjectBeginsWith?: string;
  readonly subjectEndsWith?: string;
}

function eventgridSystemTopicEventSubscriptionSubjectFilterToTerraform(struct?: EventgridSystemTopicEventSubscriptionSubjectFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    subject_begins_with: cdktf.stringToTerraform(struct!.subjectBeginsWith),
    subject_ends_with: cdktf.stringToTerraform(struct!.subjectEndsWith),
  }
}

export interface EventgridSystemTopicEventSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function eventgridSystemTopicEventSubscriptionTimeoutsToTerraform(struct?: EventgridSystemTopicEventSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface EventgridSystemTopicEventSubscriptionWebhookEndpoint {
  readonly activeDirectoryAppIdOrUri?: string;
  readonly activeDirectoryTenantId?: string;
  readonly maxEventsPerBatch?: number;
  readonly preferredBatchSizeInKilobytes?: number;
  readonly url: string;
}

function eventgridSystemTopicEventSubscriptionWebhookEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionWebhookEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_app_id_or_uri: cdktf.stringToTerraform(struct!.activeDirectoryAppIdOrUri),
    active_directory_tenant_id: cdktf.stringToTerraform(struct!.activeDirectoryTenantId),
    max_events_per_batch: cdktf.numberToTerraform(struct!.maxEventsPerBatch),
    preferred_batch_size_in_kilobytes: cdktf.numberToTerraform(struct!.preferredBatchSizeInKilobytes),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


// Resource

export class EventgridSystemTopicEventSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventgridSystemTopicEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_system_topic_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventDeliverySchema = config.eventDeliverySchema;
    this._eventhubEndpointId = config.eventhubEndpointId;
    this._expirationTimeUtc = config.expirationTimeUtc;
    this._hybridConnectionEndpointId = config.hybridConnectionEndpointId;
    this._includedEventTypes = config.includedEventTypes;
    this._labels = config.labels;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceBusQueueEndpointId = config.serviceBusQueueEndpointId;
    this._serviceBusTopicEndpointId = config.serviceBusTopicEndpointId;
    this._systemTopic = config.systemTopic;
    this._advancedFilter = config.advancedFilter;
    this._azureFunctionEndpoint = config.azureFunctionEndpoint;
    this._retryPolicy = config.retryPolicy;
    this._storageBlobDeadLetterDestination = config.storageBlobDeadLetterDestination;
    this._storageQueueEndpoint = config.storageQueueEndpoint;
    this._subjectFilter = config.subjectFilter;
    this._timeouts = config.timeouts;
    this._webhookEndpoint = config.webhookEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_delivery_schema - computed: false, optional: true, required: false
  private _eventDeliverySchema?: string;
  public get eventDeliverySchema() {
    return this.getStringAttribute('event_delivery_schema');
  }
  public set eventDeliverySchema(value: string ) {
    this._eventDeliverySchema = value;
  }
  public resetEventDeliverySchema() {
    this._eventDeliverySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeliverySchemaInput() {
    return this._eventDeliverySchema
  }

  // eventhub_endpoint_id - computed: true, optional: true, required: false
  private _eventhubEndpointId?: string;
  public get eventhubEndpointId() {
    return this.getStringAttribute('eventhub_endpoint_id');
  }
  public set eventhubEndpointId(value: string) {
    this._eventhubEndpointId = value;
  }
  public resetEventhubEndpointId() {
    this._eventhubEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubEndpointIdInput() {
    return this._eventhubEndpointId
  }

  // expiration_time_utc - computed: false, optional: true, required: false
  private _expirationTimeUtc?: string;
  public get expirationTimeUtc() {
    return this.getStringAttribute('expiration_time_utc');
  }
  public set expirationTimeUtc(value: string ) {
    this._expirationTimeUtc = value;
  }
  public resetExpirationTimeUtc() {
    this._expirationTimeUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeUtcInput() {
    return this._expirationTimeUtc
  }

  // hybrid_connection_endpoint_id - computed: true, optional: true, required: false
  private _hybridConnectionEndpointId?: string;
  public get hybridConnectionEndpointId() {
    return this.getStringAttribute('hybrid_connection_endpoint_id');
  }
  public set hybridConnectionEndpointId(value: string) {
    this._hybridConnectionEndpointId = value;
  }
  public resetHybridConnectionEndpointId() {
    this._hybridConnectionEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionEndpointIdInput() {
    return this._hybridConnectionEndpointId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_event_types - computed: true, optional: true, required: false
  private _includedEventTypes?: string[];
  public get includedEventTypes() {
    return this.getListAttribute('included_event_types');
  }
  public set includedEventTypes(value: string[]) {
    this._includedEventTypes = value;
  }
  public resetIncludedEventTypes() {
    this._includedEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedEventTypesInput() {
    return this._includedEventTypes
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[];
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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

  // service_bus_queue_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusQueueEndpointId?: string;
  public get serviceBusQueueEndpointId() {
    return this.getStringAttribute('service_bus_queue_endpoint_id');
  }
  public set serviceBusQueueEndpointId(value: string ) {
    this._serviceBusQueueEndpointId = value;
  }
  public resetServiceBusQueueEndpointId() {
    this._serviceBusQueueEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusQueueEndpointIdInput() {
    return this._serviceBusQueueEndpointId
  }

  // service_bus_topic_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusTopicEndpointId?: string;
  public get serviceBusTopicEndpointId() {
    return this.getStringAttribute('service_bus_topic_endpoint_id');
  }
  public set serviceBusTopicEndpointId(value: string ) {
    this._serviceBusTopicEndpointId = value;
  }
  public resetServiceBusTopicEndpointId() {
    this._serviceBusTopicEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusTopicEndpointIdInput() {
    return this._serviceBusTopicEndpointId
  }

  // system_topic - computed: false, optional: false, required: true
  private _systemTopic: string;
  public get systemTopic() {
    return this.getStringAttribute('system_topic');
  }
  public set systemTopic(value: string) {
    this._systemTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTopicInput() {
    return this._systemTopic
  }

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter?: EventgridSystemTopicEventSubscriptionAdvancedFilter[];
  public get advancedFilter() {
    return this.interpolationForAttribute('advanced_filter') as any;
  }
  public set advancedFilter(value: EventgridSystemTopicEventSubscriptionAdvancedFilter[] ) {
    this._advancedFilter = value;
  }
  public resetAdvancedFilter() {
    this._advancedFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilterInput() {
    return this._advancedFilter
  }

  // azure_function_endpoint - computed: false, optional: true, required: false
  private _azureFunctionEndpoint?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint[];
  public get azureFunctionEndpoint() {
    return this.interpolationForAttribute('azure_function_endpoint') as any;
  }
  public set azureFunctionEndpoint(value: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint[] ) {
    this._azureFunctionEndpoint = value;
  }
  public resetAzureFunctionEndpoint() {
    this._azureFunctionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionEndpointInput() {
    return this._azureFunctionEndpoint
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: EventgridSystemTopicEventSubscriptionRetryPolicy[];
  public get retryPolicy() {
    return this.interpolationForAttribute('retry_policy') as any;
  }
  public set retryPolicy(value: EventgridSystemTopicEventSubscriptionRetryPolicy[] ) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // storage_blob_dead_letter_destination - computed: false, optional: true, required: false
  private _storageBlobDeadLetterDestination?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination[];
  public get storageBlobDeadLetterDestination() {
    return this.interpolationForAttribute('storage_blob_dead_letter_destination') as any;
  }
  public set storageBlobDeadLetterDestination(value: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination[] ) {
    this._storageBlobDeadLetterDestination = value;
  }
  public resetStorageBlobDeadLetterDestination() {
    this._storageBlobDeadLetterDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobDeadLetterDestinationInput() {
    return this._storageBlobDeadLetterDestination
  }

  // storage_queue_endpoint - computed: false, optional: true, required: false
  private _storageQueueEndpoint?: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint[];
  public get storageQueueEndpoint() {
    return this.interpolationForAttribute('storage_queue_endpoint') as any;
  }
  public set storageQueueEndpoint(value: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint[] ) {
    this._storageQueueEndpoint = value;
  }
  public resetStorageQueueEndpoint() {
    this._storageQueueEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQueueEndpointInput() {
    return this._storageQueueEndpoint
  }

  // subject_filter - computed: false, optional: true, required: false
  private _subjectFilter?: EventgridSystemTopicEventSubscriptionSubjectFilter[];
  public get subjectFilter() {
    return this.interpolationForAttribute('subject_filter') as any;
  }
  public set subjectFilter(value: EventgridSystemTopicEventSubscriptionSubjectFilter[] ) {
    this._subjectFilter = value;
  }
  public resetSubjectFilter() {
    this._subjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFilterInput() {
    return this._subjectFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridSystemTopicEventSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventgridSystemTopicEventSubscriptionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // webhook_endpoint - computed: false, optional: true, required: false
  private _webhookEndpoint?: EventgridSystemTopicEventSubscriptionWebhookEndpoint[];
  public get webhookEndpoint() {
    return this.interpolationForAttribute('webhook_endpoint') as any;
  }
  public set webhookEndpoint(value: EventgridSystemTopicEventSubscriptionWebhookEndpoint[] ) {
    this._webhookEndpoint = value;
  }
  public resetWebhookEndpoint() {
    this._webhookEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookEndpointInput() {
    return this._webhookEndpoint
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_delivery_schema: cdktf.stringToTerraform(this._eventDeliverySchema),
      eventhub_endpoint_id: cdktf.stringToTerraform(this._eventhubEndpointId),
      expiration_time_utc: cdktf.stringToTerraform(this._expirationTimeUtc),
      hybrid_connection_endpoint_id: cdktf.stringToTerraform(this._hybridConnectionEndpointId),
      included_event_types: cdktf.listMapper(cdktf.stringToTerraform)(this._includedEventTypes),
      labels: cdktf.listMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_bus_queue_endpoint_id: cdktf.stringToTerraform(this._serviceBusQueueEndpointId),
      service_bus_topic_endpoint_id: cdktf.stringToTerraform(this._serviceBusTopicEndpointId),
      system_topic: cdktf.stringToTerraform(this._systemTopic),
      advanced_filter: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterToTerraform)(this._advancedFilter),
      azure_function_endpoint: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToTerraform)(this._azureFunctionEndpoint),
      retry_policy: cdktf.listMapper(eventgridSystemTopicEventSubscriptionRetryPolicyToTerraform)(this._retryPolicy),
      storage_blob_dead_letter_destination: cdktf.listMapper(eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToTerraform)(this._storageBlobDeadLetterDestination),
      storage_queue_endpoint: cdktf.listMapper(eventgridSystemTopicEventSubscriptionStorageQueueEndpointToTerraform)(this._storageQueueEndpoint),
      subject_filter: cdktf.listMapper(eventgridSystemTopicEventSubscriptionSubjectFilterToTerraform)(this._subjectFilter),
      timeouts: eventgridSystemTopicEventSubscriptionTimeoutsToTerraform(this._timeouts),
      webhook_endpoint: cdktf.listMapper(eventgridSystemTopicEventSubscriptionWebhookEndpointToTerraform)(this._webhookEndpoint),
    };
  }
}
