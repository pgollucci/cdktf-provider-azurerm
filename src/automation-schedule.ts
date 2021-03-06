// https://www.terraform.io/docs/providers/azurerm/r/automation_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationScheduleConfig extends cdktf.TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly description?: string;
  readonly expiryTime?: string;
  readonly frequency: string;
  readonly interval?: number;
  readonly monthDays?: number[];
  readonly name: string;
  readonly resourceGroupName: string;
  readonly startTime?: string;
  readonly timezone?: string;
  readonly weekDays?: string[];
  /** monthly_occurrence block */
  readonly monthlyOccurrence?: AutomationScheduleMonthlyOccurrence[];
  /** timeouts block */
  readonly timeouts?: AutomationScheduleTimeouts;
}
export interface AutomationScheduleMonthlyOccurrence {
  readonly day: string;
  readonly occurrence: number;
}

function automationScheduleMonthlyOccurrenceToTerraform(struct?: AutomationScheduleMonthlyOccurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
  }
}

export interface AutomationScheduleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function automationScheduleTimeoutsToTerraform(struct?: AutomationScheduleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AutomationSchedule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._description = config.description;
    this._expiryTime = config.expiryTime;
    this._frequency = config.frequency;
    this._interval = config.interval;
    this._monthDays = config.monthDays;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._startTime = config.startTime;
    this._timezone = config.timezone;
    this._weekDays = config.weekDays;
    this._monthlyOccurrence = config.monthlyOccurrence;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this.getStringAttribute('automation_account_name');
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountNameInput() {
    return this._automationAccountName
  }

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

  // expiry_time - computed: true, optional: true, required: false
  private _expiryTime?: string;
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number;
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }

  // month_days - computed: false, optional: true, required: false
  private _monthDays?: number[];
  public get monthDays() {
    return this.interpolationForAttribute('month_days') as any;
  }
  public set monthDays(value: number[] ) {
    this._monthDays = value;
  }
  public resetMonthDays() {
    this._monthDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthDaysInput() {
    return this._monthDays
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string ) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string[];
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
  public set weekDays(value: string[] ) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays
  }

  // monthly_occurrence - computed: false, optional: true, required: false
  private _monthlyOccurrence?: AutomationScheduleMonthlyOccurrence[];
  public get monthlyOccurrence() {
    return this.interpolationForAttribute('monthly_occurrence') as any;
  }
  public set monthlyOccurrence(value: AutomationScheduleMonthlyOccurrence[] ) {
    this._monthlyOccurrence = value;
  }
  public resetMonthlyOccurrence() {
    this._monthlyOccurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyOccurrenceInput() {
    return this._monthlyOccurrence
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationScheduleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationScheduleTimeouts ) {
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
      automation_account_name: cdktf.stringToTerraform(this._automationAccountName),
      description: cdktf.stringToTerraform(this._description),
      expiry_time: cdktf.stringToTerraform(this._expiryTime),
      frequency: cdktf.stringToTerraform(this._frequency),
      interval: cdktf.numberToTerraform(this._interval),
      month_days: cdktf.listMapper(cdktf.numberToTerraform)(this._monthDays),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_time: cdktf.stringToTerraform(this._startTime),
      timezone: cdktf.stringToTerraform(this._timezone),
      week_days: cdktf.listMapper(cdktf.stringToTerraform)(this._weekDays),
      monthly_occurrence: cdktf.listMapper(automationScheduleMonthlyOccurrenceToTerraform)(this._monthlyOccurrence),
      timeouts: automationScheduleTimeoutsToTerraform(this._timeouts),
    };
  }
}
