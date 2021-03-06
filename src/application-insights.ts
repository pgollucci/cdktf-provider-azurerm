// https://www.terraform.io/docs/providers/azurerm/r/application_insights.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsConfig extends cdktf.TerraformMetaArguments {
  readonly applicationType: string;
  readonly dailyDataCapInGb?: number;
  readonly dailyDataCapNotificationsDisabled?: boolean;
  readonly disableIpMasking?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly retentionInDays?: number;
  readonly samplingPercentage?: number;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: ApplicationInsightsTimeouts;
}
export interface ApplicationInsightsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function applicationInsightsTimeoutsToTerraform(struct?: ApplicationInsightsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApplicationInsights extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApplicationInsightsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationType = config.applicationType;
    this._dailyDataCapInGb = config.dailyDataCapInGb;
    this._dailyDataCapNotificationsDisabled = config.dailyDataCapNotificationsDisabled;
    this._disableIpMasking = config.disableIpMasking;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionInDays = config.retentionInDays;
    this._samplingPercentage = config.samplingPercentage;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // application_type - computed: false, optional: false, required: true
  private _applicationType: string;
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // daily_data_cap_in_gb - computed: true, optional: true, required: false
  private _dailyDataCapInGb?: number;
  public get dailyDataCapInGb() {
    return this.getNumberAttribute('daily_data_cap_in_gb');
  }
  public set dailyDataCapInGb(value: number) {
    this._dailyDataCapInGb = value;
  }
  public resetDailyDataCapInGb() {
    this._dailyDataCapInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyDataCapInGbInput() {
    return this._dailyDataCapInGb
  }

  // daily_data_cap_notifications_disabled - computed: true, optional: true, required: false
  private _dailyDataCapNotificationsDisabled?: boolean;
  public get dailyDataCapNotificationsDisabled() {
    return this.getBooleanAttribute('daily_data_cap_notifications_disabled');
  }
  public set dailyDataCapNotificationsDisabled(value: boolean) {
    this._dailyDataCapNotificationsDisabled = value;
  }
  public resetDailyDataCapNotificationsDisabled() {
    this._dailyDataCapNotificationsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyDataCapNotificationsDisabledInput() {
    return this._dailyDataCapNotificationsDisabled
  }

  // disable_ip_masking - computed: false, optional: true, required: false
  private _disableIpMasking?: boolean;
  public get disableIpMasking() {
    return this.getBooleanAttribute('disable_ip_masking');
  }
  public set disableIpMasking(value: boolean ) {
    this._disableIpMasking = value;
  }
  public resetDisableIpMasking() {
    this._disableIpMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpMaskingInput() {
    return this._disableIpMasking
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instrumentation_key - computed: true, optional: false, required: false
  public get instrumentationKey() {
    return this.getStringAttribute('instrumentation_key');
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

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number ) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // sampling_percentage - computed: false, optional: true, required: false
  private _samplingPercentage?: number;
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number ) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage
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
  private _timeouts?: ApplicationInsightsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApplicationInsightsTimeouts ) {
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
      application_type: cdktf.stringToTerraform(this._applicationType),
      daily_data_cap_in_gb: cdktf.numberToTerraform(this._dailyDataCapInGb),
      daily_data_cap_notifications_disabled: cdktf.booleanToTerraform(this._dailyDataCapNotificationsDisabled),
      disable_ip_masking: cdktf.booleanToTerraform(this._disableIpMasking),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: applicationInsightsTimeoutsToTerraform(this._timeouts),
    };
  }
}
