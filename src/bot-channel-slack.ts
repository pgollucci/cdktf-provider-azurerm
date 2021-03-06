// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_slack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelSlackConfig extends cdktf.TerraformMetaArguments {
  readonly botName: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly landingPageUrl?: string;
  readonly location: string;
  readonly resourceGroupName: string;
  readonly verificationToken: string;
  /** timeouts block */
  readonly timeouts?: BotChannelSlackTimeouts;
}
export interface BotChannelSlackTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function botChannelSlackTimeoutsToTerraform(struct?: BotChannelSlackTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BotChannelSlack extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BotChannelSlackConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_slack',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._landingPageUrl = config.landingPageUrl;
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._verificationToken = config.verificationToken;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_name - computed: false, optional: false, required: true
  private _botName: string;
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret: string;
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // landing_page_url - computed: false, optional: true, required: false
  private _landingPageUrl?: string;
  public get landingPageUrl() {
    return this.getStringAttribute('landing_page_url');
  }
  public set landingPageUrl(value: string ) {
    this._landingPageUrl = value;
  }
  public resetLandingPageUrl() {
    this._landingPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landingPageUrlInput() {
    return this._landingPageUrl
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

  // verification_token - computed: false, optional: false, required: true
  private _verificationToken: string;
  public get verificationToken() {
    return this.getStringAttribute('verification_token');
  }
  public set verificationToken(value: string) {
    this._verificationToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationTokenInput() {
    return this._verificationToken
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelSlackTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelSlackTimeouts ) {
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
      bot_name: cdktf.stringToTerraform(this._botName),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      landing_page_url: cdktf.stringToTerraform(this._landingPageUrl),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      verification_token: cdktf.stringToTerraform(this._verificationToken),
      timeouts: botChannelSlackTimeoutsToTerraform(this._timeouts),
    };
  }
}
