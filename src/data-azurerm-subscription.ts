// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSubscriptionConfig extends cdktf.TerraformMetaArguments {
  readonly subscriptionId?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSubscriptionTimeouts;
}
export interface DataAzurermSubscriptionTimeouts {
  readonly read?: string;
}

function dataAzurermSubscriptionTimeoutsToTerraform(struct?: DataAzurermSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermSubscription extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._subscriptionId = config.subscriptionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_placement_id - computed: true, optional: false, required: false
  public get locationPlacementId() {
    return this.getStringAttribute('location_placement_id');
  }

  // quota_id - computed: true, optional: false, required: false
  public get quotaId() {
    return this.getStringAttribute('quota_id');
  }

  // spending_limit - computed: true, optional: false, required: false
  public get spendingLimit() {
    return this.getStringAttribute('spending_limit');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string;
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermSubscriptionTimeouts ) {
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
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      timeouts: dataAzurermSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
