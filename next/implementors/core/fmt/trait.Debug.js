(function() {var implementors = {};
implementors["serenity"] = [{"text":"impl Debug for OpCode","synthetic":false,"types":[]},{"text":"impl Debug for VoiceOpCode","synthetic":false,"types":[]},{"text":"impl Debug for ApplicationInfo","synthetic":false,"types":[]},{"text":"impl Debug for BotApplication","synthetic":false,"types":[]},{"text":"impl Debug for CurrentApplicationInfo","synthetic":false,"types":[]},{"text":"impl Debug for Team","synthetic":false,"types":[]},{"text":"impl Debug for TeamMember","synthetic":false,"types":[]},{"text":"impl Debug for MembershipState","synthetic":false,"types":[]},{"text":"impl Debug for Attachment","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;Debug + AsRef&lt;Http&gt;&gt; Debug for MessagesIter&lt;H&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Embed","synthetic":false,"types":[]},{"text":"impl Debug for EmbedAuthor","synthetic":false,"types":[]},{"text":"impl Debug for EmbedField","synthetic":false,"types":[]},{"text":"impl Debug for EmbedFooter","synthetic":false,"types":[]},{"text":"impl Debug for EmbedImage","synthetic":false,"types":[]},{"text":"impl Debug for EmbedProvider","synthetic":false,"types":[]},{"text":"impl Debug for EmbedThumbnail","synthetic":false,"types":[]},{"text":"impl Debug for EmbedVideo","synthetic":false,"types":[]},{"text":"impl Debug for GuildChannel","synthetic":false,"types":[]},{"text":"impl Debug for Message","synthetic":false,"types":[]},{"text":"impl Debug for MessageReaction","synthetic":false,"types":[]},{"text":"impl Debug for MessageType","synthetic":false,"types":[]},{"text":"impl Debug for MessageActivityKind","synthetic":false,"types":[]},{"text":"impl Debug for MessageApplication","synthetic":false,"types":[]},{"text":"impl Debug for MessageActivity","synthetic":false,"types":[]},{"text":"impl Debug for MessageReference","synthetic":false,"types":[]},{"text":"impl Debug for ChannelMention","synthetic":false,"types":[]},{"text":"impl Debug for MessageFlags","synthetic":false,"types":[]},{"text":"impl Debug for PrivateChannel","synthetic":false,"types":[]},{"text":"impl Debug for Reaction","synthetic":false,"types":[]},{"text":"impl Debug for ReactionType","synthetic":false,"types":[]},{"text":"impl Debug for ReactionConversionError","synthetic":false,"types":[]},{"text":"impl Debug for NeverFails","synthetic":false,"types":[]},{"text":"impl Debug for ChannelCategory","synthetic":false,"types":[]},{"text":"impl Debug for Channel","synthetic":false,"types":[]},{"text":"impl Debug for ChannelType","synthetic":false,"types":[]},{"text":"impl Debug for PermissionOverwrite","synthetic":false,"types":[]},{"text":"impl Debug for PermissionOverwriteType","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for ChannelCreateEvent","synthetic":false,"types":[]},{"text":"impl Debug for ChannelDeleteEvent","synthetic":false,"types":[]},{"text":"impl Debug for ChannelPinsUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for ChannelUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildBanAddEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildBanRemoveEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildCreateEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildDeleteEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildEmojisUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildIntegrationsUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildMemberAddEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildMemberRemoveEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildMemberUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildMembersChunkEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildRoleCreateEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildRoleDeleteEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildRoleUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for InviteCreateEvent","synthetic":false,"types":[]},{"text":"impl Debug for InviteDeleteEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildUnavailableEvent","synthetic":false,"types":[]},{"text":"impl Debug for GuildUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for MessageCreateEvent","synthetic":false,"types":[]},{"text":"impl Debug for MessageDeleteBulkEvent","synthetic":false,"types":[]},{"text":"impl Debug for MessageDeleteEvent","synthetic":false,"types":[]},{"text":"impl Debug for MessageUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for PresenceUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for PresencesReplaceEvent","synthetic":false,"types":[]},{"text":"impl Debug for ReactionAddEvent","synthetic":false,"types":[]},{"text":"impl Debug for ReactionRemoveEvent","synthetic":false,"types":[]},{"text":"impl Debug for ReactionRemoveAllEvent","synthetic":false,"types":[]},{"text":"impl Debug for ReadyEvent","synthetic":false,"types":[]},{"text":"impl Debug for ResumedEvent","synthetic":false,"types":[]},{"text":"impl Debug for TypingStartEvent","synthetic":false,"types":[]},{"text":"impl Debug for UnknownEvent","synthetic":false,"types":[]},{"text":"impl Debug for UserUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for VoiceServerUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for VoiceStateUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for WebhookUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for GatewayEvent","synthetic":false,"types":[]},{"text":"impl Debug for Event","synthetic":false,"types":[]},{"text":"impl Debug for EventType","synthetic":false,"types":[]},{"text":"impl Debug for VoiceHeartbeat","synthetic":false,"types":[]},{"text":"impl Debug for VoiceHeartbeatAck","synthetic":false,"types":[]},{"text":"impl Debug for VoiceReady","synthetic":false,"types":[]},{"text":"impl Debug for VoiceHello","synthetic":false,"types":[]},{"text":"impl Debug for VoiceSessionDescription","synthetic":false,"types":[]},{"text":"impl Debug for VoiceSpeaking","synthetic":false,"types":[]},{"text":"impl Debug for VoiceResume","synthetic":false,"types":[]},{"text":"impl Debug for VoiceClientConnect","synthetic":false,"types":[]},{"text":"impl Debug for VoiceClientDisconnect","synthetic":false,"types":[]},{"text":"impl Debug for VoiceEvent","synthetic":false,"types":[]},{"text":"impl Debug for BotGateway","synthetic":false,"types":[]},{"text":"impl Debug for Activity","synthetic":false,"types":[]},{"text":"impl Debug for ActivityAssets","synthetic":false,"types":[]},{"text":"impl Debug for ActivityFlags","synthetic":false,"types":[]},{"text":"impl Debug for ActivityParty","synthetic":false,"types":[]},{"text":"impl Debug for ActivitySecrets","synthetic":false,"types":[]},{"text":"impl Debug for ActivityEmoji","synthetic":false,"types":[]},{"text":"impl Debug for ActivityType","synthetic":false,"types":[]},{"text":"impl Debug for Gateway","synthetic":false,"types":[]},{"text":"impl Debug for ClientStatus","synthetic":false,"types":[]},{"text":"impl Debug for Presence","synthetic":false,"types":[]},{"text":"impl Debug for Ready","synthetic":false,"types":[]},{"text":"impl Debug for SessionStartLimit","synthetic":false,"types":[]},{"text":"impl Debug for ActivityTimestamps","synthetic":false,"types":[]},{"text":"impl Debug for Emoji","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;Debug + AsRef&lt;Http&gt;&gt; Debug for MembersIter&lt;H&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Integration","synthetic":false,"types":[]},{"text":"impl Debug for IntegrationAccount","synthetic":false,"types":[]},{"text":"impl Debug for Member","synthetic":false,"types":[]},{"text":"impl Debug for PartialMember","synthetic":false,"types":[]},{"text":"impl Debug for PartialGuild","synthetic":false,"types":[]},{"text":"impl Debug for Role","synthetic":false,"types":[]},{"text":"impl Debug for Target","synthetic":false,"types":[]},{"text":"impl Debug for Action","synthetic":false,"types":[]},{"text":"impl Debug for ActionChannel","synthetic":false,"types":[]},{"text":"impl Debug for ActionChannelOverwrite","synthetic":false,"types":[]},{"text":"impl Debug for ActionMember","synthetic":false,"types":[]},{"text":"impl Debug for ActionRole","synthetic":false,"types":[]},{"text":"impl Debug for ActionInvite","synthetic":false,"types":[]},{"text":"impl Debug for ActionWebhook","synthetic":false,"types":[]},{"text":"impl Debug for ActionEmoji","synthetic":false,"types":[]},{"text":"impl Debug for ActionMessage","synthetic":false,"types":[]},{"text":"impl Debug for ActionIntegration","synthetic":false,"types":[]},{"text":"impl Debug for Change","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogs","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogEntry","synthetic":false,"types":[]},{"text":"impl Debug for Options","synthetic":false,"types":[]},{"text":"impl Debug for PremiumTier","synthetic":false,"types":[]},{"text":"impl Debug for Ban","synthetic":false,"types":[]},{"text":"impl Debug for Guild","synthetic":false,"types":[]},{"text":"impl Debug for GuildContainer","synthetic":false,"types":[]},{"text":"impl Debug for GuildEmbed","synthetic":false,"types":[]},{"text":"impl Debug for GuildPrune","synthetic":false,"types":[]},{"text":"impl Debug for GuildInfo","synthetic":false,"types":[]},{"text":"impl Debug for GuildUnavailable","synthetic":false,"types":[]},{"text":"impl Debug for GuildStatus","synthetic":false,"types":[]},{"text":"impl Debug for DefaultMessageNotificationLevel","synthetic":false,"types":[]},{"text":"impl Debug for ExplicitContentFilter","synthetic":false,"types":[]},{"text":"impl Debug for MfaLevel","synthetic":false,"types":[]},{"text":"impl Debug for Region","synthetic":false,"types":[]},{"text":"impl Debug for VerificationLevel","synthetic":false,"types":[]},{"text":"impl Debug for ApplicationId","synthetic":false,"types":[]},{"text":"impl Debug for ChannelId","synthetic":false,"types":[]},{"text":"impl Debug for EmojiId","synthetic":false,"types":[]},{"text":"impl Debug for GuildId","synthetic":false,"types":[]},{"text":"impl Debug for IntegrationId","synthetic":false,"types":[]},{"text":"impl Debug for MessageId","synthetic":false,"types":[]},{"text":"impl Debug for RoleId","synthetic":false,"types":[]},{"text":"impl Debug for UserId","synthetic":false,"types":[]},{"text":"impl Debug for WebhookId","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogEntryId","synthetic":false,"types":[]},{"text":"impl Debug for AttachmentId","synthetic":false,"types":[]},{"text":"impl Debug for Invite","synthetic":false,"types":[]},{"text":"impl Debug for InviteUser","synthetic":false,"types":[]},{"text":"impl Debug for InviteChannel","synthetic":false,"types":[]},{"text":"impl Debug for InviteGuild","synthetic":false,"types":[]},{"text":"impl Debug for RichInvite","synthetic":false,"types":[]},{"text":"impl Debug for UserParseError","synthetic":false,"types":[]},{"text":"impl Debug for UserIdParseError","synthetic":false,"types":[]},{"text":"impl Debug for RoleIdParseError","synthetic":false,"types":[]},{"text":"impl Debug for ChannelIdParseError","synthetic":false,"types":[]},{"text":"impl Debug for ChannelParseError","synthetic":false,"types":[]},{"text":"impl Debug for RoleParseError","synthetic":false,"types":[]},{"text":"impl Debug for EmojiIdentifier","synthetic":false,"types":[]},{"text":"impl Debug for AffectedComponent","synthetic":false,"types":[]},{"text":"impl Debug for Incident","synthetic":false,"types":[]},{"text":"impl Debug for IncidentUpdate","synthetic":false,"types":[]},{"text":"impl Debug for IncidentStatus","synthetic":false,"types":[]},{"text":"impl Debug for Maintenance","synthetic":false,"types":[]},{"text":"impl Debug for Permissions","synthetic":false,"types":[]},{"text":"impl Debug for CurrentUser","synthetic":false,"types":[]},{"text":"impl Debug for DefaultAvatar","synthetic":false,"types":[]},{"text":"impl Debug for OnlineStatus","synthetic":false,"types":[]},{"text":"impl Debug for User","synthetic":false,"types":[]},{"text":"impl Debug for VoiceRegion","synthetic":false,"types":[]},{"text":"impl Debug for VoiceState","synthetic":false,"types":[]},{"text":"impl Debug for Webhook","synthetic":false,"types":[]},{"text":"impl Debug for CreateEmbed","synthetic":false,"types":[]},{"text":"impl Debug for CreateEmbedAuthor","synthetic":false,"types":[]},{"text":"impl Debug for CreateEmbedFooter","synthetic":false,"types":[]},{"text":"impl Debug for Timestamp","synthetic":false,"types":[]},{"text":"impl Debug for CreateChannel","synthetic":false,"types":[]},{"text":"impl Debug for CreateInvite","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for CreateMessage&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for ParseValue","synthetic":false,"types":[]},{"text":"impl Debug for CreateAllowedMentions","synthetic":false,"types":[]},{"text":"impl Debug for EditChannel","synthetic":false,"types":[]},{"text":"impl Debug for EditGuild","synthetic":false,"types":[]},{"text":"impl Debug for EditMember","synthetic":false,"types":[]},{"text":"impl Debug for EditMessage","synthetic":false,"types":[]},{"text":"impl Debug for EditProfile","synthetic":false,"types":[]},{"text":"impl Debug for EditRole","synthetic":false,"types":[]},{"text":"impl Debug for ExecuteWebhook","synthetic":false,"types":[]},{"text":"impl Debug for GetMessages","synthetic":false,"types":[]},{"text":"impl Debug for Settings","synthetic":false,"types":[]},{"text":"impl Debug for Cache","synthetic":false,"types":[]},{"text":"impl Debug for ShardStageUpdateEvent","synthetic":false,"types":[]},{"text":"impl Debug for ShardManager","synthetic":false,"types":[]},{"text":"impl Debug for ShardManagerMonitor","synthetic":false,"types":[]},{"text":"impl Debug for ShardManagerError","synthetic":false,"types":[]},{"text":"impl Debug for ShardMessenger","synthetic":false,"types":[]},{"text":"impl Debug for ChunkGuildFilter","synthetic":false,"types":[]},{"text":"impl Debug for ShardRunnerMessage","synthetic":false,"types":[]},{"text":"impl Debug for GatewayIntents","synthetic":false,"types":[]},{"text":"impl Debug for ShardClientMessage","synthetic":false,"types":[]},{"text":"impl Debug for ShardManagerMessage","synthetic":false,"types":[]},{"text":"impl Debug for ShardQueuerMessage","synthetic":false,"types":[]},{"text":"impl Debug for ShardId","synthetic":false,"types":[]},{"text":"impl Debug for ShardRunnerInfo","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for Extras","synthetic":false,"types":[]},{"text":"impl Debug for GroupCommandsPair","synthetic":false,"types":[]},{"text":"impl Debug for SuggestedCommandName","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Command&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Suggestions","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for CustomisedHelpData&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;Debug&gt; Debug for Error&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Delimiter","synthetic":false,"types":[]},{"text":"impl Debug for Args","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for RawArguments&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for WithWhiteSpace","synthetic":false,"types":[]},{"text":"impl Debug for Reason","synthetic":false,"types":[]},{"text":"impl Debug for CheckResult","synthetic":false,"types":[]},{"text":"impl Debug for Check","synthetic":false,"types":[]},{"text":"impl Debug for OnlyIn","synthetic":false,"types":[]},{"text":"impl Debug for CommandOptions","synthetic":false,"types":[]},{"text":"impl Debug for Command","synthetic":false,"types":[]},{"text":"impl Debug for HelpCommand","synthetic":false,"types":[]},{"text":"impl Debug for HelpBehaviour","synthetic":false,"types":[]},{"text":"impl Debug for HelpOptions","synthetic":false,"types":[]},{"text":"impl Debug for GroupOptions","synthetic":false,"types":[]},{"text":"impl Debug for CommandGroup","synthetic":false,"types":[]},{"text":"impl Debug for DispatchError","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for ConnectionStage","synthetic":false,"types":[]},{"text":"impl Debug for InterMessage","synthetic":false,"types":[]},{"text":"impl Debug for Http","synthetic":false,"types":[]},{"text":"impl Debug for DiscordJsonError","synthetic":false,"types":[]},{"text":"impl Debug for ErrorResponse","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for Ratelimiter","synthetic":false,"types":[]},{"text":"impl Debug for Ratelimit","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for RatelimitedRequest&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Request&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Route","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for RouteInfo&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Typing","synthetic":false,"types":[]},{"text":"impl Debug for LightMethod","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for AttachmentType&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Colour","synthetic":false,"types":[]},{"text":"impl Debug for MessageBuilder","synthetic":false,"types":[]},{"text":"impl Debug for Content","synthetic":false,"types":[]},{"text":"impl Debug for CustomMessage","synthetic":false,"types":[]},{"text":"impl Debug for ContentSafeOptions","synthetic":false,"types":[]},{"text":"impl Debug for DcaMetadata","synthetic":false,"types":[]},{"text":"impl Debug for VoiceError","synthetic":false,"types":[]},{"text":"impl Debug for DcaError","synthetic":false,"types":[]},{"text":"impl Debug for MessageFilter","synthetic":false,"types":[]},{"text":"impl Debug for ReactionAction","synthetic":false,"types":[]},{"text":"impl Debug for ReactionFilter","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()