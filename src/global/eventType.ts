export enum EventType { Sys, Team, TeamSys, Teams, Public, GlobalSys, Global, Admin }

export type SystemEventType = EventType.Sys | EventType.TeamSys | EventType.GlobalSys

export type TeamEventType = EventType.Team | EventType.TeamSys 

export type PMEventType = EventType.Team | EventType.TeamSys | EventType.Teams | EventType.Public