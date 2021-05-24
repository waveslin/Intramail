export enum Event { Sys, Team, TeamSys, Teams, Public, GlobalSys, Global, Admin }

export type SystemEvent = Event.Sys | Event.TeamSys | Event.GlobalSys

export type TeamEvent = Event.Team | Event.TeamSys 

export type PMEvent = Event.Team | Event.TeamSys | Event.Teams | Event.Public